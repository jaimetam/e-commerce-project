const mongoose = require('mongoose');

const { Schema } = mongoose;

const productSchema = new Schema({
  names: {
    type: [String],
    required: true,
    trim: true
  },
  description: {
    type: String
  },
  images: {
    type: [String]
  },
  price: {
    type: Number,
    required: true,
    min: 0.99
  },
  sizes: {
    type: [String],
  },
  // color: {
  //   type: [String, String],
  // },
  category: {
    type: Schema.Types.ObjectId,
    ref: 'Category',
    required: true
  }
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
