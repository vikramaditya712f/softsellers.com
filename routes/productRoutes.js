const express = require('express');
const productController = require('../controllers/productController');
const { isAuthenticatedUser, authorizeRoles } = require('../middleware/auth');

const router = express.Router();

// router.param('id', productController.checkID);

//Create a check body middleware
//Check if body contains the name and price property
//If not, send back 400(bad request)
//Add it to post handler stack

router
  .route('/')
  .get(productController.getAllProduct)
  .post(productController.createProduct);
// .post(
//   isAuthenticatedUser
//   authorizeRoles('seller'),
//   productController.createProduct
// );
router.route('/:id').get(productController.getProduct);
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
