const express = require('express');
const sellerController = require('../controllers/sellerController');
const Product = require('../models/productModel');
const productController = require('../controllers/sellerController');
const { isAuthenticatedUser, authorizeRoles } = require('../middleware/auth');

const router = express.Router();

// router.param('id', productController.checkID);

//Create a check body middleware
//Check if body contains the name and price property
//If not, send back 400(bad request)
//Add it to post handler stack

router.route('/').get(sellerController.getDashboard);
router.route('/addProductPage').get(sellerController.addProductPage);
// .post(
//   isAuthenticatedUser,
//   authorizeRoles('seller'),
//   productController.createProduct
// );
// router.route('/:id').get(sellerController.getProduct);
// .patch(
//   isAuthenticatedUser,
//   authorizeRoles('seller'),
//   productController.updateProduct
// )
// .delete(
//   isAuthenticatedUser,
//   authorizeRoles('seller'),
//   productController.deleteProduct
// );

module.exports = router;
