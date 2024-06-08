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
      {
        name: 'Tshirt',
        description:
          'Regular-fit, comfortable T-shirt in lightweight cotton jersey with a classic silhouette. Round, ribbed neck and a straight-cut hem.',
        image: 'cookie-tin.jpg',
        category: categories[0]._id,
        price: 2.99,
        quantity: 500
      },
    

    ]);
  

  
  
  });
  