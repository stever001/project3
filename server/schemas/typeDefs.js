// /server/schemas/typeDefs.js
const { gql } = require("apollo-server-express");

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
      apptWith: String
      confirmed: Boolean
   }

   type Query {
      me: User
      users: [User]
      user(username: String!): User
      getAppointments(username: String!): [Appointment]
   }

   type Mutation {
      login(email: String!, password: String!): Auth
      addUser(username: String!, email: String!, password: String!): Auth
      addAppt(username: String, apptDate: Date!, apptTime: String!, apptWith: String, confirmed: Boolean!): Appointment
   }

   type Auth {
      token: ID!
      user: User
   }
`;

module.exports = typeDefs;
