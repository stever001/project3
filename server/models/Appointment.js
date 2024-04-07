const { Schema, model } = require("mongoose");
const bcrypt = require("bcrypt");

const ApptSchema = new Schema(
   {
      apptDate: {
         type: Date,
      },
      apptTime: {
         type: String,
         required: true,
      },
      apptWith: {
         type: String,
      },
      username: {
         type: String,
      },
      confirmed: {
         type: Boolean,
         required: true,
      },
   },
   {
      toJSON: {
         virtuals: true,
      },
   }
);

const Appointment = model("Appointment", ApptSchema);

module.exports = Appointment;
