// Import necessary modules or dependencies
const { validateEmail, validatePassword } = require('../utils/authUtils');
const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('../models/User');

// Function to register a new user
exports.register = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Validate email
    if (!validateEmail(email)) {
      return res.status(400).json({ message: 'Invalid email address' });
    }

    // Validate password
    if (!validatePassword(password)) {
      return res.status(400).json({ message: 'Password must be at least 8 characters long' });
    }

    // Check if the user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user
    const newUser = new User({ email, password: hashedPassword });
    await newUser.save();

    // Generate JWT token
    const token = jwt.sign({ userId: newUser._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

    // Send token in response
    res.status(201).json({ token });
  } catch (error) {
    console.error('Error registering user:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

// Function to handle user login
const login = async (req, res) => {
  const { email, password } = req.body; // Get email and password from request body

  try {
    // Find the user by email
    const user = await User.findOne({ email });

    // If user not found or password is incorrect, return error
    if (!user || !(await user.matchPassword(password))) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    // If email and password are correct, generate token and send response
    const token = user.generateAuthToken();
    res.json({ token });
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

// Function to handle user signup
const signup = async (req, res) => {
  const { email, password } = req.body; // Get email and password from request body

  try {
    // Check if user with the same email already exists
    let existingUser = await User.findOne({ email });

    // If user already exists, return error
    if (existingUser) {
      return res.status(400).json({ message: 'User with this email already exists' });
    }

    // Create new user
    const newUser = new User({ email, password });
    await newUser.save();

    // Generate token for new user and send response
    const token = newUser.generateAuthToken();
    res.status(201).json({ token });
  } catch (error) {
    console.error('Signup error:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

module.exports = {
  login,
  signup,
};


// Function to login a user
// exports.login = async (req, res) => {
//   try {
//     const { email, password } = req.body;

//     // Find user by email
//     const user = await User.findOne({ email });
//     if (!user) {
//       return res.status(401).json({ message: 'Invalid credentials' });
//     }

//     // Check password
//     const isPasswordValid = await bcrypt.compare(password, user.password);
//     if (!isPasswordValid) {
//       return res.status(401).json({ message: 'Invalid credentials' });
//     }

//     // Generate JWT token
//     const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

//     // Send token in response
//     res.status(200).json({ token });
//   } catch (error) {
//     console.error('Error logging in user:', error);
//     res.status(500).json({ message: 'Internal server error' });
//   }
// };

// // Function to logout a user (optional)
// exports.logout = (req, res) => {
//   // Perform logout operation if needed
// };

// Function to check authentication status
exports.checkAuthStatus = (req, res) => {
  // Check if user is authenticated (e.g., by verifying JWT token)
};
