// // /server/resolvers.js
// const resolvers = {
//     Query: {
//       message: () => 'Hello, World!',
//       users: async () => {
//         // Logic to retrieve users from your MongoDB database
//       },
//     },
//     Mutation: {
//       createUser: async (_, { username, email }) => {
//         // Logic to create a user in your MongoDB database
//       },
//     },
//   };

//   module.exports = resolvers;

//* Import Users and Appointments (like Users and Thoughts from NoSQL challenge?)
const { User, Appointment } = require("../models");

//* Import Auth handling
const { AuthenticationError } = require("apollo-server-express");

//* Import json web token stuff
const { signToken } = require("../utils/authUtils");

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
      addUser: async (parent, args) => {
         const user = await User.create(args);
         const token = signToken(user);

         return { token, user };
      },

      addAppt: async (parent, args, context) => {
          console.log("resolvers.js", args, context);
         if (context.user) {
            const appointment = await Appointment.create({ ...args, username: context.user.username });
            await User.findByIdAndUpdate(
               { _id: context.user._id },
               { $push: { appointments: appointment._id } },
               { new: true }
);
            return appointment;
         }
         throw new AuthenticationError("You need to be logged in!");
      },

      login: async (parent, { email, password }) => {
         const user = await User.findOne({ email });

         if (!user) {
            throw new AuthenticationError("Incorrect login credentials");
         }

         const correctPw = await user.isCorrectPassword(password);

         if (!correctPw) {
            throw new AuthenticationError("Incorrect login credentials");
         }

         const token = signToken(user);
         return { token, user };
      },
   },
};

module.exports = resolvers;
