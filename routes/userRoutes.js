const express = require('express');
const userController = require('../controllers/userController');
const router = express.Router();

// router.route('/').get(userController.getAllUsers).post(userController.createUser);

// router
//   .route('/:id')
//   .get(userController.getUser)
//   .post(userController.createUser)
//   .patch(userController.updateUser)
//   .delete(userController.deleteUser);

// module.exports = router;

// const express = require('express');
const {
  loginPage,
  signupPage,
  registerUser,
  loginUser,
  logout,
  forgotPassword,
  resetPassword,
  getUserDetails,
  updatePassword,
  updateProfile,
  deleteUser,
} = require('../controllers/userController');
const { isAuthenticatedUser, authorizeRoles } = require('../middleware/auth');

// const router = express.Router();
// console.log('login');
router.route('/').get(loginPage);

router.route('/signupPage').get(signupPage);

router.route('/register').post(registerUser);

router.route('/login').post(loginUser);

router.route('/password/forgot').post(forgotPassword);

router.route('/password/reset/:token').put(resetPassword);

router.route('/logout').get(logout);

router.route('/me').get(isAuthenticatedUser, getUserDetails);

router.route('/password/update').put(isAuthenticatedUser, updatePassword);

router.route('/me/update').put(isAuthenticatedUser, updateProfile);

// router
//   .route('/admin/users')
//   .get(isAuthenticatedUser, authorizeRoles('admin'), getAllUser);

router
  .route('/delete/:id')
  // .get(isAuthenticatedUser, authorizeRoles('admin'), getSingleUser)
  // .put(isAuthenticatedUser, authorizeRoles('admin'), updateUserRole)
  .delete(isAuthenticatedUser, deleteUser);

module.exports = router;
