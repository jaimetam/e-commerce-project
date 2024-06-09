const db = require('./connection');
const { User, Product, Category } = require('../models');
const cleanDB = require('./cleanDB');

db.once('open', async () => {
    await cleanDB('Category', 'categories');
    await cleanDB('Product', 'products');
    await cleanDB('User', 'users');
  
    const categories = await Category.insertMany([
      { name: 'Tshirts' },
      { name: 'Pants' },
      { name: 'Sweaters' },
    ]);
  
    console.log('categories seeded');
  
    const products = await Product.insertMany([

        //men's clothes: tshirts
      {
        name: 'White T-shirt',
        description:
          'Regular-fit, comfortable T-shirt in lightweight cotton jersey with a classic silhouette. Round, ribbed neck and a straight-cut hem.',
        image: 'white-tshirt.jpg',
        category: categories[0]._id,
        price: 10.99,
        sizes: ["S" , "M", "L"],
        stock: {
            "S": 150, 
            "M": 150, 
            "L": 150, 
        }
      },
      {
        name: 'Black T-shirt',
        description:
          'Regular-fit, comfortable T-shirt in lightweight cotton jersey with a classic silhouette. Round, ribbed neck and a straight-cut hem.',
        image: 'white-tshirt.jpg',
        category: categories[0]._id,
        price: 10.99,
        sizes: ["S" , "M", "L"],
        stock: {
            "S": 150, 
            "M": 150, 
            "L": 150, 
        }
      },
      {
        name: 'Light gray T-shirt',
        description:
          'Regular-fit, comfortable T-shirt in lightweight cotton jersey with a classic silhouette. Round, ribbed neck and a straight-cut hem.',
        image: 'white-tshirt.jpg',
        category: categories[0]._id,
        price: 10.99,
        sizes: ["S" , "M", "L"],
        stock: {
            "S": 150, 
            "M": 150, 
            "L": 150, 
        }
      },
      {
        name: 'Dark gray T-shirt',
        description:
          'Regular-fit, comfortable T-shirt in lightweight cotton jersey with a classic silhouette. Round, ribbed neck and a straight-cut hem.',
        image: 'white-tshirt.jpg',
        category: categories[0]._id,
        price: 10.99,
        sizes: ["S" , "M", "L"],
        stock: {
            "S": 150, 
            "M": 150, 
            "L": 150, 
        }
      },
      {
        name: 'Beige T-shirt',
        description:
          'Regular-fit, comfortable T-shirt in lightweight cotton jersey with a classic silhouette. Round, ribbed neck and a straight-cut hem.',
        image: 'white-tshirt.jpg',
        category: categories[0]._id,
        price: 10.99,
        sizes: ["S" , "M", "L"],
        stock: {
            "S": 150, 
            "M": 150, 
            "L": 150, 
        }
      },

        //men's clothes: pants
        {
            name: 'Black slim-fit pants',
            description:
              'Five-pocket cotton twill pants. Model with zipper and button closure.',
            image: 'white-tshirt.jpg',
            category: categories[1]._id,
            price: 19.99,
            sizes: ["S" , "M", "L"],
            stock: {
                "S": 110, 
                "M": 110, 
                "L": 110, 
            }
          },
          {
            name: 'Blue slim-fit pants',
            description:
              'Five-pocket cotton twill pants. Model with zipper and button closure.',
            image: 'white-tshirt.jpg',
            category: categories[1]._id,
            price: 19.99,
            sizes: ["S" , "M", "L"],
            stock: {
                "S": 110, 
                "M": 110, 
                "L": 110, 
            }
          },
          {
            name: 'Green slim-fit pants',
            description:
              'Five-pocket cotton twill pants. Model with zipper and button closure.',
            image: 'white-tshirt.jpg',
            category: categories[1]._id,
            price: 19.99,
            sizes: ["S" , "M", "L"],
            stock: {
                "S": 110, 
                "M": 110, 
                "L": 110, 
            }
          },
          {
            name: 'Beige slim-fit pants',
            description:
              'Five-pocket cotton twill pants. Model with zipper and button closure.',
            image: 'white-tshirt.jpg',
            category: categories[1]._id,
            price: 19.99,
            sizes: ["S" , "M", "L"],
            stock: {
                "S": 110, 
                "M": 110, 
                "L": 110, 
            }
          },
          {
            name: 'Light gray slim-fit pants',
            description:
              'Five-pocket cotton twill pants. Model with zipper and button closure.',
            image: 'white-tshirt.jpg',
            category: categories[1]._id,
            price: 19.99,
            sizes: ["S" , "M", "L"],
            stock: {
                "S": 110, 
                "M": 110, 
                "L": 110, 
            }
          },

        //men's clothes: sweaters
        {
            name: 'Navy blue merino wool sweater',
            description:
              'Slim-fit sweater in soft merino wool. Crew neck model with long sleeves. Ribbed trim around the neck, cuffs, and hem.',
            image: 'white-tshirt.jpg',
            category: categories[3]._id,
            price: 23.99,
            sizes: ["S" , "M", "L"],
            stock: {
                "S": 225, 
                "M": 110, 
                "L": 225, 
            }
          },
          {
            name: 'Gray merino wool sweater',
            description:
              'Slim-fit sweater in soft merino wool. Crew neck model with long sleeves. Ribbed trim around the neck, cuffs, and hem.',
            image: 'white-tshirt.jpg',
            category: categories[3]._id,
            price: 23.99,
            sizes: ["S" , "M", "L"],
            stock: {
                "S": 110, 
                "M": 110, 
                "L": 110, 
            }
          },
          {
            name: 'Brown merino wool sweater',
            description:
              'Slim-fit sweater in soft merino wool. Crew neck model with long sleeves. Ribbed trim around the neck, cuffs, and hem.',
            image: 'white-tshirt.jpg',
            category: categories[3]._id,
            price: 23.99,
            sizes: ["S" , "M", "L"],
            stock: {
                "S": 225, 
                "M": 110, 
                "L": 225, 
            }
          },
          {
            name: 'Black merino wool sweater',
            description:
              'Slim-fit sweater in soft merino wool. Crew neck model with long sleeves. Ribbed trim around the neck, cuffs, and hem.',
            image: 'white-tshirt.jpg',
            category: categories[3]._id,
            price: 23.99,
            sizes: ["S" , "M", "L"],
            stock: {
                "S": 225, 
                "M": 110, 
                "L": 225, 
            }
          },
          {
            name: 'Beige merino wool sweater',
            description:
              'Slim-fit sweater in soft merino wool. Crew neck model with long sleeves. Ribbed trim around the neck, cuffs, and hem.',
            image: 'white-tshirt.jpg',
            category: categories[3]._id,
            price: 23.99,
            sizes: ["S" , "M", "L"],
            stock: {
                "S": 225, 
                "M": 110, 
                "L": 225, 
            }
          },
          

    ]);
  

  
  
  });
  