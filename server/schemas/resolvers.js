//* Import Users and Appointments (like Users and Thoughts from NoSQL challenge?)
const { User, Appointment } = require("../models");
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const config = require('../config/connection');

//* Import Auth handling
const { AuthenticationError } = require("apollo-server-express");

//* Import json web token stuff
const { signToken } = require("../utils/auth");

const resolvers = {
   Query: {
      me: async (parent, args, context) => {
         if (context.user) {
            const userData = await User.findOne({ _id: context.user._id }) //
               .select("-__v -password");

            return userData;
         }

         throw new AuthenticationError("Not logged in");
      },

      //* Get all users
      users: async () => {
         return User.find() //
            .select("-__v -password");
      },

      //* Get a User by username
      user: async (parent, { username }) => {
         return User.findOne({ username }) //
            .select("-__v -password");
      },

      //* Get all appointments by username and date
      getAppointments: async (parent, { username }) => {
         return Appointment.find({ username: username }).sort({ date: 1 });
      },
   },

   Mutation: {
      signUp: async (_, { email, password }) => {
         console.log(email);
         console.log(password);
         // Hash password
         const hashedPassword = await bcrypt.hash(password, 10);
         
         // Create user
         const newUser = await User.create({ email, password: hashedPassword });
         // await newUser.save();
         const token = signToken(newUser);
         console.log(token);
         console.log("test");
         return {token};
       },

      addAppt: async (parent, args, context) => {
         console.log("resolvers.js", args, context);
         if (context.user) {
            const appointment = await Appointment.create({ ...args, username: context.user.username });
            await User.findByIdAndUpdate({ _id: context.user._id }, { $push: { appointments: appointment._id } }, { new: true });
            return appointment;
         }
         throw new AuthenticationError("You need to be logged in!");
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
       },
   },
};

module.exports = resolvers;
