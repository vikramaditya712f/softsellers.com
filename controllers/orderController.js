const Order = require('../models/orderModel');
const Product = require('../models/productModel');
const ErrorHander = require('../utils/errorhander');
const sendEmail = require('../utils/sendEmail');

// const catchAsyncErrors = require('../middleware/catchAsyncErrors');

exports.allCart = async (req, res) => {
  try {
    const products = await Product.find();
    const carts = await Order.find();

    // console.log(carts);
    res.render('cart', {
      productsData: products,
      cartsData: carts,
    });
  } catch (err) {
    // res.status(404).json({
    //   status: 'fail',
    //   message: err,
    // });
    return next(new ErrorHander('Product not found', 404));
  }
};

exports.addToCart = async (req, res) => {
  // console.log(req.params.id);

  try {
    // const cartItm = new Order({
    //   cart_id: req.params.id,
    // });
    // var newCart = await cartItm.save();
    // res.send('hi');
    const cartItm = {
      cart_id: req.params.id,
    };
    console.log(cartItm);
    const newCart = await Order.create(cartItm);

    res.redirect('/api/v1/products');
    // res.status(201).json({
    //   status: 'succes',
    //   data: {
    //     cart: newCart,
    //   },
    // });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: 'Invalid data sent!',
    });
  }
};

exports.buyProduct = async (req, res) => {
  console.log('hi');
  try {
    await sendEmail({
      email: 'vikramaditya712f@gmail.com',
      subject: `Your ordered products`,
      // message,
      attachments: [
        {
          filename: 'Screenshot 2023-05-03 232523.jpg',
          content: 'hello world!',
        },
        {
          filename: 'text2.txt',
        },
      ],
    });

    res.status(200).json({
      success: true,
      message: `Email sent to ${user.email} successfully`,
    });
  } catch (error) {
    // user.resetPasswordToken = undefined;
    // user.resetPasswordExpire = undefined;
    // await user.save({ validateBeforeSave: false });
    // return next(new ErrorHander(error.message, 500));
  }
};
