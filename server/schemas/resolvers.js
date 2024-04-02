// /server/resolvers.js
const resolvers = {
    Query: {
      message: () => 'Hello, World!',
      users: async () => {
        // Logic to retrieve users from your MongoDB database
      },
    },
    Mutation: {
      createUser: async (_, { username, email }) => {
        // Logic to create a user in your MongoDB database
      },
    },
  };
  
  module.exports = resolvers;
  