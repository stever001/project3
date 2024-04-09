const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const config = require('../config/connection');
const { signToken } = require('../utils/auth');

const resolvers = {
  Mutation: {
    signUp: async (_, { email, password }) => {
      // Hash password
      const hashedPassword = await bcrypt.hash(password, 10);
      
      // Create user
      const newUser = new User({ email, password: hashedPassword });
      await newUser.save();
      const token = signToken(newUser);
      console.log(token);
      console.log("test");
      return {token};
    },

    login: async (_, { email, password }) => {
      // Find user by email
      const user = await User.findOne({ email });
      
      // If user not found or password is incorrect, throw error
      if (!user || !(await bcrypt.compare(password, user.password))) {
        throw new Error('Invalid email or password');
      }
      
      // Generate token
      const token = signToken(user);
      
      return { token };
    }
  }
};

module.exports = resolvers;
