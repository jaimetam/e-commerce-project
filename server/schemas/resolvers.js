
const {Product, Tshirt, Pants, Sueter, Category, User} = require('../models')

// add order query and mutations 

const resolvers = {
    Query: {
      product: async (_, { _id }) => {
        try {
          const product = await Product.findById(_id);
          if (!product) {
            throw new Error('Product not found');
          }
          switch (product.type) {
            case 'tshirt':
              return await Tshirt.findById(_id).populate('category');
            case 'pants':
              return await Pants.findById(_id).populate('category');
            case 'sueter':
              return await Sueter.findById(_id).populate('category');
            default:
              return product.populate('category');
          }
        } catch (error) {
          throw new Error(`Error fetching product`);
        }
      },
      products: async (_, { type, categoryId, page = 1, limit = 10, sortBy = 'name', sortOrder = 'asc' }) => {
        try {
          const { query } = store.getState().search;
          const filter = {};
          if (type) filter.type = type;
          if (categoryId) filter.categoryId = categoryId;
          if (query) filter.name = { $regex: query, $options: 'i' };
  
          const sortOptions = {};
          sortOptions[sortBy] = sortOrder === 'desc' ? -1 : 1;
  
          const products = await Product.find(filter)
            .populate('category')
            .sort(sortOptions)
            .skip((page - 1) * limit)
            .limit(limit);
  
          return products;
        } catch (error) {
          throw new Error(`Error fetching products: ${error.message}`);
        }
      },
      checkout: async (parent, args, context) => {
        const url = new URL(context.headers.referer).origin;
        const order = new Order({ products: args.products });
        const line_items = [];
  
        const { products } = await order.populate('products');
  
        for (let i = 0; i < products.length; i++) {
          const product = await stripe.products.create({
            name: products[i].name,
            description: products[i].description,
            images: [`${url}/images/${products[i].image}`]
          });
  
          const price = await stripe.prices.create({
            product: product.id,
            unit_amount: products[i].price * 100,
            currency: 'usd',
          });
  
          line_items.push({
            price: price.id,
            quantity: 1
          });
        }
  
        const session = await stripe.checkout.sessions.create({
          payment_method_types: ['card'],
          line_items,
          mode: 'payment',
          success_url: `${url}/success?session_id={CHECKOUT_SESSION_ID}`,
          cancel_url: `${url}/`
        });
  
        return { session: session.id };
      }, 
      category: async (_, { _id }) => {
        try {
          const category = await Category.findById(_id);
          if (!category) {
            throw new Error('Category not found');
          }
          return category;
        } catch (error) {
          throw new Error(`Error fetching category: ${error.message}`);
        }
      },
      categories: async () => {
        try {
          return await Category.find();
        } catch (error) {
          throw new Error(`Error fetching categories: ${error.message}`);
        }
      },
      user: async (_, { _id }, context) => {
        try {
          // Check if the user is authenticated
          if (!context.user) {
            throw new AuthenticationError('You must be logged in to view user details.');
          }
          // Check if the logged-in user has permission to view this user
          // (e.g., only allow viewing their own profile or if they're an admin)
          if (context.user._id.toString() !== _id && !context.user.isAdmin) {
            throw new AuthenticationError('You are not authorized to view this user.');
          }
  
          const user = await User.findById(_id);
          if (!user) {
            throw new Error('User not found');
          }
          return user;
        } catch (error) {
          throw new Error(`Error fetching user: ${error.message}`);
        }
      },
      usersByEmail: async (_, { email, partialMatch = false }, context) => {
        try {
          // Check if the user is authenticated and an admin
          if (!context.user || !context.user.isAdmin) {
            throw new AuthenticationError('You must be an admin to search users by email.');
          }
  
          const emailFilter = partialMatch
            ? { email: { $regex: email, $options: 'i' } } 
            : { email }; 
  
          const users = await User.find(emailFilter);
          return users;
        } catch (error) {
          throw new Error(`Error searching users by email: ${error.message}`);
        }
      },
      user: {
        orders: async (parent) => {
          try {
            return await Order.find({ userId: parent._id });
          } catch (error) {
            throw new Error(`Error fetching orders for user: ${error.message}`);
          }
      },
     }
    }, 
     Mutation: {
      createTshirt: async (_, { input }) => {
        try {
          const tshirt = await Tshirt.create({ ...input, type: 'tshirt' });
          return tshirt.populate('category');
        } catch (error) {
          throw new Error(`Error creating t-shirt: ${error.message}`);
        }
      },
      createPants: async (_, { input }) => {
        try {
          const pants = await Pants.create({ ...input, type: 'pants' });
          return pants.populate('category');
        } catch (error) {
          throw new Error(`Error creating pants: ${error.message}`);
        }
      },
      createSueter: async (_, { input }) => {
        try {
          const sueter = await Sueter.create({ ...input, type: 'sueter' });
          return sueter.populate('category');
        } catch (error) {
          throw new Error(`Error creating sweater: ${error.message}`);
        }
      },
      createCategory: async (_, { input }) => {
        try {
          return await Category.create(input);
        } catch (error) {
          throw new Error(`Error creating category: ${error.message}`);
        }
      },
      deleteTshirt: async (_, { _id }) => {
        try {
          const deletedTshirt = await Tshirt.findByIdAndRemove(_id);
          if (!deletedTshirt) {
            throw new Error('T-shirt not found');
          }
          return deletedTshirt._id;
        } catch (error) {
          throw new Error(`Error deleting t-shirt: ${error.message}`);
        }
      },
      deletePants: async (_, { _id }) => {
        try {
          const deletedPants = await Pants.findByIdAndRemove(_id);
          if (!deletedPants) {
            throw new Error('Pants not found');
          }
          return deletedPants._id;
        } catch (error) {
          throw new Error(`Error deleting pants: ${error.message}`);
        }
      },
      deleteSueter: async (_, { _id }) => {
        try {
          const deletedSueter = await Sueter.findByIdAndRemove(_id);
          if (!deletedSueter) {
            throw new Error('Sweater not found');
          }
          return deletedSueter._id;
        } catch (error) {
          throw new Error(`Error deleting sweater: ${error.message}`);
        }
      },
      deleteCategory: async (_, { _id }) => {
        try {
          // Check if any products are associated with this category
          const productsInCategory = await Product.find({ categoryId: _id });
          if (productsInCategory.length > 0) {
            throw new Error('Category cannot be deleted as it has associated products');
          }
  
          const deletedCategory = await Category.findByIdAndRemove(_id);
          if (!deletedCategory) {
            throw new Error('Category not found');
          }
          return deletedCategory._id;
        } catch (error) {
          throw new Error(`Error deleting category: ${error.message}`);
        }
      },
      addUser: async (_, { input }) => {
        try {
          // Input Validation
          if (!input.email || !input.password || !input.firstName || !input.lastName) {
            throw new UserInputError('All fields (email, password, firstName, lastName) are required');
          }
  
          // Check if email is already in use
          const existingUser = await User.findOne({ email: input.email });
          if (existingUser) {
            throw new UserInputError('Email already in use');
          }
  
          // Hash the password
          const hashedPassword = await bcrypt.hash(input.password, 12);
  
          // Create the new user
          const newUser = new User({
            ...input,
            password: hashedPassword,
          });
  
          // Save the new user to the database
          await newUser.save();
  
          return newUser;
        } catch (error) {
          throw new Error(`Error adding user: ${error.message}`);
        }
      },
    },
  };


  
  module.exports = resolvers; 