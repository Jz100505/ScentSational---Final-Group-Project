const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const orderSchema = new Schema({
  customerName: {
    type: String,
    required: true,
  },
  items: [{
    productId: {
      type: Schema.Types.ObjectId,
      ref: 'Product',
    },
    quantity: {
      type: Number,
      required: true,
    },
  }],
  totalPrice: {
    type: Number,
    required: true,
  },
  status: {
    type: String,
    required: true,
    enum: ['Pending', 'Preparing', 'Completed', 'Cancelled'],
    default: 'Pending',
  },
}, { timestamps: true });
const Order = mongoose.model('Order', orderSchema);
module.exports = Order;