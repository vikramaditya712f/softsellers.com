const mongoose = require('mongoose');
// const slugify = require('slugify');
// const validator = require('validator');

const orderSchema = new mongoose.Schema({
  cart_id: {
    type: String,
    required: [true, 'There must be a cart_id'],
    unique: true,
  },
});
// {
//   toJSON: { virtuals: true },
//   toObject: { virtuals: true },
// }
// );

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;
