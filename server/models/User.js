//* RUTHIE CODE FOR USER MODEL/SCHEMA
const { Schema, model, mongoose } = require("mongoose");
// const dateFormat = require("../utils/dateFormat");
const bcrypt = require("bcryptjs");
const Appointment = require("./Appointment");

const UserSchema = new mongoose.Schema({
      email: {
         type: String,
         unique: true,
         required: true,
         // required: "An email address is required!",
         match: [/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, "Must match a valid email address."],
      },
      password: {
         type: String,
         required: true,
         minLength: 5
         // required: "A password of min length of 5 characters is required!",
         // minlength: 5,
      },
      appointments: [
         {
            type: Schema.Types.ObjectId,
            ref: "Appointment",
         },
      ],
   }
   ,
   {
      toJSON: {
         virtuals: true,
         getters: true, //*do i need this line?
      },
   }
);

//* sets up pre save middleware to create password
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

// module.exports = mongoose.model("User", userSchema);
const User = model("User", UserSchema);

module.exports = User;
