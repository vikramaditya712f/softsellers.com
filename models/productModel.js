const mongoose = require('mongoose');
const validator = require('validator');

// const slugify = require('slugify');

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'A product must have a name'],
      unique: true,
      trim: true,
    },
    slug: String,
    price: {
      type: String,
      required: [true, 'A product must have price'],
    },
    category: {
      type: String,
      trim: true,
    },
    description: {
      type: String,
      trim: true,
    },
    sellerEmail: {
      type: String,
      required: [true, 'Please Enter Your Email'],
      // unique: true,
      // validate: [validator.isEmail, 'Please Enter a valid Email'],
    },
    imageCover: {
      type: String,
      trim: true,
      required: [true, 'A product must have image cover'],
    },
    product: {
      type: String,
      trim: true,
      required: [true, 'There should be product file'],
    },
    // images: [String],

    // user: {
    //   type: mongoose.Schema.ObjectId,
    //   ref: 'User',
    //   required: true,
    // },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
