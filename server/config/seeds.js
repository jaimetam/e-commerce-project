const db = require('./connection');
const { User, Product, Category } = require('../models');
const cleanDB = require('./cleanDB');

db.once('open', async () => {
  await cleanDB('Category', 'categories');
  await cleanDB('Product', 'products');
  await cleanDB('User', 'users');

  const categories = await Category.insertMany([
    { name: 'T-shirts' },
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
      image: 'mens-white-tshirt.png',
      category: categories[0]._id,
      price: 10.99,
      sizes: ["S", "M", "L"],

    },
    {
      name: 'Black T-shirt',
      description:
        'Regular-fit, comfortable T-shirt in lightweight cotton jersey with a classic silhouette. Round, ribbed neck and a straight-cut hem.',
      image: 'mens-black-tshirt.png',
      category: categories[0]._id,
      price: 10.99,
      sizes: ["S", "M", "L"],

    },
    {
      name: 'Light gray T-shirt',
      description:
        'Regular-fit, comfortable T-shirt in lightweight cotton jersey with a classic silhouette. Round, ribbed neck and a straight-cut hem.',
      image: 'mens-light-gray-shirt.png',
      category: categories[0]._id,
      price: 10.99,
      sizes: ["S", "M", "L"],

    },
    {
      name: 'Dark gray T-shirt',
      description:
        'Regular-fit, comfortable T-shirt in lightweight cotton jersey with a classic silhouette. Round, ribbed neck and a straight-cut hem.',
      image: 'mens-dark-gray-shirt.png',
      category: categories[0]._id,
      price: 10.99,
      sizes: ["S", "M", "L"],

    },
    {
      name: 'Beige T-shirt',
      description:
        'Regular-fit, comfortable T-shirt in lightweight cotton jersey with a classic silhouette. Round, ribbed neck and a straight-cut hem.',
      image: 'mens-beige-tshirt.png',
      category: categories[0]._id,
      price: 10.99,
      sizes: ["S", "M", "L"],

    },

    //men's clothes: pants
    {
      name: 'Black slim-fit pants',
      description:
        'Five-pocket cotton twill pants. Model with zipper and button closure.',
      image: 'mens-black-pants.jpeg',
      category: categories[1]._id,
      price: 19.99,
      sizes: ["S", "M", "L"],

    },
    {
      name: 'Blue slim-fit pants',
      description:
        'Five-pocket cotton twill pants. Model with zipper and button closure.',
      image: 'mens-blue-pants.png',
      category: categories[1]._id,
      price: 19.99,
      sizes: ["S", "M", "L"],

    },
    {
      name: 'Khaki green slim-fit pants',
      description:
        'Five-pocket cotton twill pants. Model with zipper and button closure.',
      image: 'mens-green-pants.jpeg',
      category: categories[1]._id,
      price: 19.99,
      sizes: ["S", "M", "L"],

    },
    {
      name: 'Beige slim-fit pants',
      description:
        'Five-pocket cotton twill pants. Model with zipper and button closure.',
      image: 'mens-beige-pants.jpeg',
      category: categories[1]._id,
      price: 19.99,
      sizes: ["S", "M", "L"],

    },
    {
      name: 'Light gray slim-fit pants',
      description:
        'Five-pocket cotton twill pants. Model with zipper and button closure.',
      image: 'mens-light-gray-pants.png',
      category: categories[1]._id,
      price: 19.99,
      sizes: ["S", "M", "L"],

    },

    //men's clothes: sweaters
    {
      name: 'Navy blue merino wool sweater',
      description:
        'Slim-fit sweater in soft merino wool. Crew neck model with long sleeves. Ribbed trim around the neck, cuffs, and hem.',
      image: 'mens-navy-blue-sweater.png',
      category: categories[2]._id,
      price: 23.99,
      sizes: ["S", "M", "L"],

    },
    {
      name: 'Gray merino wool sweater',
      description:
        'Slim-fit sweater in soft merino wool. Crew neck model with long sleeves. Ribbed trim around the neck, cuffs, and hem.',
      image: 'mens-gray-sweater.png',
      category: categories[2]._id,
      price: 23.99,
      sizes: ["S", "M", "L"],

    },
    {
      name: 'Brown merino wool sweater',
      description:
        'Slim-fit sweater in soft merino wool. Crew neck model with long sleeves. Ribbed trim around the neck, cuffs, and hem.',
      image: 'mens-brown-sweater.png',
      category: categories[2]._id,
      price: 23.99,
      sizes: ["S", "M", "L"],

    },
    {
      name: 'Black merino wool sweater',
      description:
        'Slim-fit sweater in soft merino wool. Crew neck model with long sleeves. Ribbed trim around the neck, cuffs, and hem.',
      image: 'mens-black-sweater.png',
      category: categories[2]._id,
      price: 23.99,
      sizes: ["S", "M", "L"],

    },
    {
      name: 'Beige merino wool sweater',
      description:
        'Slim-fit sweater in soft merino wool. Crew neck model with long sleeves. Ribbed trim around the neck, cuffs, and hem.',
      image: 'mens-beige-sweater.png',
      category: categories[2]._id,
      price: 23.99,
      sizes: ["S", "M", "L"],

    },

    //women's clothes: tshirts
    {
      name: 'Khaki Cotton T-shirt',
      description:
        'Crew neck thsirt in soft cotton jersey',
      image: 'womens-khaki-tshirt.png',
      category: categories[0]._id,
      price: 8.99,
      sizes: ["S", "M", "L"],

    },
    {
      name: 'Pink Cotton T-shirt',
      description:
        'Crew neck thsirt in soft cotton jersey',
      image: 'womens-pink-tshirt.png',
      category: categories[0]._id,
      price: 8.99,
      sizes: ["S", "M", "L"],

    },
    {
      name: 'Green Cotton T-shirt',
      description:
        'Crew neck thsirt in soft cotton jersey',
      image: 'womens-green-tshirt.png',
      category: categories[0]._id,
      price: 8.99,
      sizes: ["S", "M", "L"],

    },
    {
      name: 'Yellow Cotton T-shirt',
      description:
        'Crew neck thsirt in soft cotton jersey',
      image: 'womens-yellow-tshirt.png',
      category: categories[0]._id,
      price: 8.99,
      sizes: ["S", "M", "L"],

    },
    {
      name: 'Blue Cotton T-shirt',
      description:
        'Crew neck thsirt in soft cotton jersey',
      image: 'womens-blue-tshirt.png',
      category: categories[0]._id,
      price: 8.99,
      sizes: ["S", "M", "L"],

    },

    //women's clothes: pants

    {
      name: 'Black Cigarette Pants',
      description:
        'Crew neck thsirt in soft cotton jerseAnkle-length cigarette pants in stretch fabric with a standard waist. Model with elastic waistband and hidden zip and hook closure. Side pockets, decorative back pockets, and tapered legs toward the ankles.',
      image: 'womens-black-pants.png',
      category: categories[1]._id,
      price: 27.99,
      sizes: ["S", "M", "L"],

    },
    {
      name: 'Beige Cigarette Pants',
      description:
        'Crew neck thsirt in soft cotton jerseAnkle-length cigarette pants in stretch fabric with a standard waist. Model with elastic waistband and hidden zip and hook closure. Side pockets, decorative back pockets, and tapered legs toward the ankles.',
      image: 'womens-beige-pants.png',
      category: categories[1]._id,
      price: 27.99,
      sizes: ["S", "M", "L"],

    },
    {
      name: 'Navy blue Cigarette Pants',
      description:
        'Crew neck thsirt in soft cotton jerseAnkle-length cigarette pants in stretch fabric with a standard waist. Model with elastic waistband and hidden zip and hook closure. Side pockets, decorative back pockets, and tapered legs toward the ankles.',
      image: 'womens-blue-pants.png',
      category: categories[1]._id,
      price: 27.99,
      sizes: ["S", "M", "L"],

    },
    {
      name: 'Light gray Cigarette Pants',
      description:
        'Crew neck thsirt in soft cotton jerseAnkle-length cigarette pants in stretch fabric with a standard waist. Model with elastic waistband and hidden zip and hook closure. Side pockets, decorative back pockets, and tapered legs toward the ankles.',
      image: 'womens-light-gray-pants.png',
      category: categories[1]._id,
      price: 27.99,
      sizes: ["S", "M", "L"],

    },
    {
      name: 'Dark gray Cigarette Pants',
      description:
        'Crew neck thsirt in soft cotton jerseAnkle-length cigarette pants in stretch fabric with a standard waist. Model with elastic waistband and hidden zip and hook closure. Side pockets, decorative back pockets, and tapered legs toward the ankles.',
      image: 'womens-dark-gray-pants.png',
      category: categories[1]._id,
      price: 27.99,
      sizes: ["S", "M", "L"],

    },

    //women's clothes: sweaters
    {
      name: 'Black Oversized sweater',
      description:
        'Loose fit sweater in soft, fine fabric. Model with round neck and raglan sleeves. Ribbed trim around collar, cuffs and hem.',
      image: 'womens-black-sweater.jpeg',
      category: categories[2]._id,
      price: 25.99,
      sizes: ["S", "M", "L"],

    },
    {
      name: 'Gray oversized sweater',
      description:
        'Loose fit sweater in soft, fine fabric. Model with round neck and raglan sleeves. Ribbed trim around collar, cuffs and hem.',
      image: 'womens-gray-sweater.jpeg',
      category: categories[2]._id,
      price: 25.99,
      sizes: ["S", "M", "L"],

    },
    {
      name: 'Navy blue oversized sweater',
      description:
        'Loose fit sweater in soft, fine fabric. Model with round neck and raglan sleeves. Ribbed trim around collar, cuffs and hem.',
      image: 'womens-blue-sweater.jpeg',
      category: categories[2]._id,
      price: 25.99,
      sizes: ["S", "M", "L"],

    },
    {
      name: 'Beige oversized sweater',
      description:
        'Loose fit sweater in soft, fine fabric. Model with round neck and raglan sleeves. Ribbed trim around collar, cuffs and hem.',
      image: 'womens-beige-sweater.jpeg',
      category: categories[2]._id,
      price: 25.99,
      sizes: ["S", "M", "L"],

    },
    {
      name: 'Striped oversized sweater',
      description:
        'Loose fit sweater in soft, fine fabric. Model with round neck and raglan sleeves. Ribbed trim around collar, cuffs and hem.',
      image: 'womens-striped-sweater.jpeg',
      category: categories[2]._id,
      price: 25.99,
      sizes: ["S", "M", "L"],

    },

  ]);

  console.log('products seeded');



  await User.create({
    firstName: 'John',
    lastName: 'Doe',
    email: 'johndoe@hotmailemail.com',
    password: 'Password123',
    orders: [
      {
        products: [products[1]._id]
      }
    ]
  });

  console.log('users seeded');

  process.exit()
});
