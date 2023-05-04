const express = require('express');
const orderController = require('../controllers/orderController');

const router = express.Router();

// router.param('id', productController.checkID);

//Create a check body middleware
//Check if body contains the name and price property
//If not, send back 400(bad request)
//Add it to post handler stack

router.route('/').get(orderController.allCart);
// router.route('/buyProduct').get(orderController.buyProduct);
router.route('/:id').get(orderController.addToCart);

module.exports = router;
