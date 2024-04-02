// /server/index.js
const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const mongoose = require('mongoose');
// Make sure the path to your modules is correct
const typeDefs = require('./schemas/typeDefs');
const resolvers = require('./schemas/resolvers');

require('dotenv').config();

async function startServer() {
  const app = express();
  
  // Initialize Apollo Server with imported typeDefs and resolvers
  const apolloServer = new ApolloServer({ typeDefs, resolvers });
  await apolloServer.start();
  
  // Apply Apollo GraphQL middleware and specify the path
  apolloServer.applyMiddleware({ app, path: '/graphql' });
  
  // Connect to MongoDB
  mongoose.connect(process.env.DB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Successfully connected to MongoDB.'))
    .catch(err => console.error('Connection error to MongoDB:', err));
  
  // Start the server
  const PORT = process.env.PORT || 4000;
  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}${apolloServer.graphqlPath}`);
  });
}

// Execute the asynchronous server start function
startServer();
