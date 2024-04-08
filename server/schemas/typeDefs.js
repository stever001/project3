// /server/schemas/typeDefs.js
//* imports the gql tagged template function
const { gql } = require("apollo-server-express");

//* create our typeDefs
const typeDefs = gql`
   scalar Date

   type User {
      _id: ID
      username: String
      email: String
      appointments: [Appointment]
   }
   type Appointment {
      _id: ID
      username: String
      apptDate: Date
      apptTime: String
      confirmed: Boolean
   }

   type Query {
      me: User
      users: [User]
      user(username: String!): User
      getAppointments(username: String!, apptDate: Date!): [Appointment]
   }

   type Mutation {
      login(email: String!, password: String!): Auth
      addUser(username: String!, email: String!, password: String!): Auth
      addAppt(username: String, apptDate: Date!, apptTime: String!, confirmed: Boolean!): Appointment
   }

   type Auth {
      token: ID!
      user: User
   }
`;

module.exports = typeDefs;
