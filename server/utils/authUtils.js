// Backend authUtils.js
// utils/authUtils.js

const { GraphQlError } = require('graphql');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const secret = "mysecretssshhhhhhh";
const expiration = "2h";


const JWT_SECRET = process.env.JWT_SECRET || 'your_jwt_secret';

// Function to generate a JWT token
function generateToken(payload) {
  return jwt.sign(payload, JWT_SECRET, { expiresIn: '1h' }); // Token expires in 1 hour
}

// Function to verify a JWT token
function verifyToken(token) {
  return jwt.verify(token, JWT_SECRET);
}

// Function to hash a password
async function hashPassword(password) {
  const saltRounds = 10; // Number of salt rounds for bcrypt hashing
  return bcrypt.hash(password, saltRounds);
}

// Function to compare a password with its hashed version
async function comparePassword(password, hashedPassword) {
  return bcrypt.compare(password, hashedPassword);
}

module.exports = {
  generateToken,
  verifyToken,
  hashPassword,
  comparePassword,
};
