// Backend authUtils.js
// utils/authUtils.js

const { GraphQlError } = require("graphql");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const secret = process.env.JWT_SECRET;
const expiration = "2h";

const JWT_SECRET = process.env.JWT_SECRET || "your_jwt_secret";

// Function to generate a JWT token
function generateToken({ username, email, _id }) {
   const payload = { username, email, _id };
   return jwt.sign({ data: payload }, JWT_SECRET, { expiresIn: "1h" }); // Token expires in 1 hour
}

function authMiddleware({ req }) {
   let token = req.body.token || req.query.token || req.headers.authorization;

   // ["Bearer", "<tokenvalue>"]
   if (req.headers.authorization) {
      token = token.split(" ").pop().trim();
   }

   if (!token) {
      return req;
   }

   try {
      const { data } = jwt.verify(token, secret, { maxAge: expiration });
      console.log("DATAAAAAAA", data);
      req.user = data;
   } catch {
      console.log("Invalid token");
   }

   return req;
}

// * signToken
// function signToken()

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
   authMiddleware,
};
