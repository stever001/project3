// /server/models/User.js
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  // Add other fields as necessary
});

module.exports = mongoose.model('User', userSchema);
