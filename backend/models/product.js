const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  ratings: {
    type: Number,
    default: 0
  },
  imageUrl: {
    type: String,
    required: true
  },
  // ADD THIS: It links this product to a Category document
  category: {
    type: Schema.Types.ObjectId,
    ref: 'Category', // This must match the model name we used in category.js
    required: true
  }
}, { timestamps: true });

const Product = mongoose.model('Product', productSchema);
module.exports = Product;