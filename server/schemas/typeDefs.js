// /server/schemas/typeDefs.js
const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    id: ID!
    username: String!
    email: String!
  }

  type Query {
    message: String
    users: [User]
  }

  type Mutation {
    createUser(username: String!, email: String!): User
  }
`;

module.exports = typeDefs;
               