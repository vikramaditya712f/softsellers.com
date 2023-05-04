// const express = require('express');

// const app = express();
const Product = require('../models/productModel');
const APIFeatures = require('../utils/apiFeatures');
const ErrorHandler = require('../utils/errorhander');
const catchAsyncErrors = require('../middleware/catchAsyncErrors');
const multer = require('multer');

// exports.checkID = (req, res, next, val) => {
//   console.log(`Tour id is : ${val}`);
//   if (req.params.id * 1 > products.length) {
//     return res.status(404).json({
//       status: 'fail',
//       message: 'Invalid ID',
//     });
//   }
//   next();
// };

// exports.getAllProduct = async (req, res) => {
//   try {
//     const products = await Product.find();

//     res.status(200).json({
//       status: 'success',
//       requestedAt: req.requestTime,
//       results: products.length,
//       data: {
//         products,
//       },
//     });
//   } catch (err) {
//     res.status(404).json({
//       status: 'fail',
//       message: err,
//     });
//   }
// };

exports.getTopProducts = (req, res, next) => {
  req.query.limit = '5';
  req.query.sort = 'price';
  req.query.fields = 'name, price, type, description';
  next();
};

exports.getAllProduct = async (req, res) => {
  try {
    // console.log(req.query)
    const features = new APIFeatures(Product.find(), req.query)
      .filter()
      .sort()
      .limitFields()
      .paginate();

    const products = await features.query;
    // const products = await Product.find().where('type').equals('txt');
    // console.log(products);
    res.render('index', {
      productsData: products,
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err,
    });
  }
};

// exports.getProduct = async (req, res) => {
//   try {
//     const product = await Product.findById(req.params.id);
//     //Tour.findOne({_id: req.params.id})

//     res.status(200).json({
//       status: 'success',
//       data: {
//         product,
//       },
//     });
//   } catch (err) {
//     res.status(404).json({
//       status: 'fail',
//       message: err,
//     });
//   }
// };

exports.getProduct = async (req, res, next) => {
  console.log(req.params.id);
  try {
    const product = await Product.findById(req.params.id);
    console.log(product);

    //Tour.findOne({_id: req.params.id})
    // console.log(product);
    res.render('product', {
      productsData: product,
    });
  } catch (err) {
    // res.status(404).json({
    //   status: 'fail',
    //   message: err,
    // });
    return next(new ErrorHandler('Product not found', 404));
  }
};

// image upload
// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, './public/upload/image');
//     console.log('hi');
//   },
//   filename: function (req, file, cb) {
//     cb(null, file.fieldname + '_' + Date.now() + '_' + file.originalname);
//   },
// });

// const upload = multer({
//   storage: storage,
// });

// exports.upload = multer({
//   storage: storage,
// }).single('imageCover');

// exports.handleFileUpload = async (req, res, next) => {
//   upload.single('imageCover')(req, res, function (err) {
//     if (err) {
//       return res
//         .status(400)
//         .json({ message: 'Error uploading file', error: err });
//     }
//     next();
//   });
// };

exports.createProduct = async (req, res) => {
  // const newTour = new Tour({});
  // newTour.save();

  try {
    // req.body.user = req.user.id;
    const { name, description, price, sellerEmail, category } = req.body;
    // console.log(name);
    // const { imageCover } = req.file.filename;
    // console.log(req.body);
    // console.log(req.file);
    // const newProduct = await Product.create({
    //   name,
    //   description,
    //   price,
    //   sellerEmail,
    //   category,
    //   imageCover,
    // });
    const newProduct = await Product.create(req.body);

    res.status(201).json({
      status: 'succes',
      data: {
        tour: newProduct,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: 'Invalid data sent!',
    });
  }
};

exports.updateProduct = async (req, res) => {
  try {
    const product = await Product.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    res.status(200).json({
      status: 'success',
      data: {
        product,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err,
    });
  }
};

exports.deleteProduct = async (req, res) => {
  try {
    await Product.findByIdAndDelete(req.params.id);
    res.status(200).json({
      status: 'success',
      data: null,
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err,
    });
  }
};
