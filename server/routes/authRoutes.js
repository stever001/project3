// Import necessary modules or dependencies
const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

// Route for user registration
router.post('/register', authController.register);

// Route for user login
router.post('/login', authController.login);

// Route for user logout (optional)
router.post('/logout', authController.logout);

// Route for checking authentication status (e.g., verifying JWT token)
router.get('/check-auth-status', authController.checkAuthStatus);

// Export the router
module.exports = router;
