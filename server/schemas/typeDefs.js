const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Mutation {
    signUp(email: String!, password: String!): AuthResponse!
    login(email: String!, password: String!): AuthResponse!
  }

  type User {
    username: String
    email: String
  }

  type Query {
me: User
  }
  type AuthResponse {
    token: String
  }
`;

module.exports = typeDefs;
