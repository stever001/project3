// /server/models/User.js
// const mongoose = require("mongoose");

// const userSchema = new mongoose.Schema({
//    username: { type: String, required: true, unique: true },
//    email: { type: String, required: true, unique: true },
//    // Add other fields as necessary
// });

// module.exports = mongoose.model("User", userSchema);

//* RUTHIE CODE FOR USER MODEL/SCHEMA
const { Schema, model } = require("mongoose");
const dateFormat = require("../utils/dateFormat");
const bcrypt = require("bcrypt");
const Appointment = require("./Appointment");

const UserSchema = new Schema(
   {
      username: {
         type: String,
         trim: true,
         required: "A username is required!",
         unique: true,
      },
      email: {
         type: String,
         unique: true,
         required: "An email address is required!",
         match: [/.+@+\..+/, "Must match a valid email address."],
      },
      password: {
         type: String,
         required: "A password of min length of 5 characters is required!",
         minlength: 5,
      },
      appointments: [
         {
            type: Schema.Types.ObjectId,
            ref: "Appointment",
         },
      ],
   },
   {
      toJSON: {
         virtuals: true,
         getters: true,
      },
   }
);

UserSchema.pre("save", async function (next) {
   if (this.isNew || this.isModified("password")) {
      const saltRounds = 10;
      this.password = await bcrypt.hash(this.password, saltRounds);
   }

   next();
});

//* comparing incoming password w hashed password
UserSchema.methods.isCorrectPassword = async function (password) {
   return bcrypt.compare(password, this.password);
};

const User = model("User", UserSchema);

module.exports = User;
