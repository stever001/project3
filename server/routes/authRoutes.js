// authRoutes.js

const express = require('express');
const router = express.Router();
const { loginUser, signupUser } = require('../controllers/authController');

// // Route for user registration
// router.post('/register', authController.register);

// // Route for checking authentication status (e.g., verifying JWT token)
// router.get('/check-auth-status', authController.checkAuthStatus);

// Export the router
// router.post('/login', loginUser);
// router.post('/signup', signupUser);

module.exports = router;
