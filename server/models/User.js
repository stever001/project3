// /server/models/User.js
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
   password: { type: String, 
      required: true, 
      unique: true },
   email: { type: String, 
      required: true, 
      unique: true },
   // Add other fields as necessary
});

module.exports = mongoose.model("User", userSchema);

//* RUTHIE CODE FOR USER MODEL/SCHEMA
// const { Schema, model } = require("mongoose");
// const bcrypt = require("bcrypt");
// const Message = require("./Message");
// const Appointment = require("./Appointment");

// const userSchema = new Schema(
//    {
//       username: {
//          type: String,
//          required: true,
//          unique: true,
//          trim: true,
//       },
//       email: {
//          type: String,
//          required: true,
//          unique: true,
//          match: [/.+@+\..+/, "Must match an email address"],
//       },
//       password: {
//          type: String,
//          required: true,
//          minlength: 5,
//       },
//       isProvider: {
//          type: Boolean,
//       },
//       specialty: {
//          type: String,
//          allowNull: false,
//       },
//       npiNumber: {
//          type: String,
//       },
//       appointments: [
//          {
//             type: Schema.Types.ObjectId,
//             ref: "Appointment",
//          },
//       ],
//       messages: [
//          {
//             type: Schema.Types.ObjectId,
//             ref: "Message",
//          },
//       ],
//    },
//    {
//       toJSON: {
//          virtuals: true,
//       },
//    }
// );

// userSchema.pre("save", async function (next) {
//    if (this.isNew || this.isModified("password")) {
//       const saltRounds = 10;
//       this.password = await bcrypt.hash(this.password, saltRounds);
//    }

//    next();
// });

// //* comparing incoming password w hashed password
// userSchema.methods.isCorrectPassword = async function (password) {
//    return bcrypt.compare(password, this.password);
// };

// const User = model("User", userSchema);

// module.exports = User;
