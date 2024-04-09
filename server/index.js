// // /server/index.js
// const express = require('express');
// const { ApolloServer } = require('apollo-server-express');
// const mongoose = require('mongoose');
// const config = require('./config/connection');
// const authRoutes = require('./routes/authRoutes')
// // Make sure the path to your modules is correct
// const typeDefs = require('./schemas/typeDefs');
// const resolvers = require('./schemas/resolvers');

// require('dotenv').config();

// async function startServer() {
//   const app = express();
  
//   // Initialize Apollo Server with imported typeDefs and resolvers
//   const apolloServer = new ApolloServer({ typeDefs, resolvers });
//   await apolloServer.start();
  
//   // Apply Apollo GraphQL middleware and specify the path
//   apolloServer.applyMiddleware({ app, path: '/graphql' });
  
//   // Connect to MongoDB
//   mongoose.connect(process.env.DB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
//     .then(() => console.log('Successfully connected to MongoDB.'))
//     .catch(err => console.error('Connection error to MongoDB:', err));
  
//   // Start the server
//   const PORT = process.env.PORT || 4000;
//   app.listen(PORT, () => {
//     console.log(`Server is running on http://localhost:${PORT}${apolloServer.graphqlPath}`);
//   });
// }

// // Execute the asynchronous server start function
// startServer();

// /server/index.js
const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const mongoose = require('mongoose');
const config = require('./config/connection');
const authRoutes = require('./routes/authRoutes');
// Make sure the path to your modules is correct
const typeDefs = require('./schemas/typeDefs');
const resolvers = require('./schemas/resolvers');

//* import our typeDefs and resolvers
const { typeDefs, resolvers } = require("./schemas");
const db = require("./config/connection");

require("dotenv").config();

async function startServer() {
   const app = express();

   // Initialize Apollo Server with imported typeDefs and resolvers
   const apolloServer = new ApolloServer({ typeDefs, resolvers });
   await apolloServer.start();
     // Apply middleware for parsing JSON and urlencoded request bodies
     app.use(express.json());
     app.use(express.urlencoded({ extended: true }));

   // Apply Apollo GraphQL middleware and specify the path
   // apolloServer.applyMiddleware({ app, path: "/graphql" });
   app.use('/graphql', expressMiddleware(apolloServer, {
      // context: authMiddleware
    }));

    if (process.env.NODE_ENV === 'production') {
      app.use(express.static(path.join(__dirname, '../client/dist')));
  
      app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, '../client/dist/index.html'));
      });
    }
    
   // Connect to MongoDB
   mongoose.connect("mongodb://127.0.0.1:27017/accountinfo", { useNewUrlParser: true, useUnifiedTopology: true })
   .then(() => console.log('Successfully connected to MongoDB.'))
   .catch(err => console.error('Connection error to MongoDB:', err));


  
  // Apply Apollo GraphQL middleware and specify the path
  apolloServer.applyMiddleware({ app, path: '/graphql' });

  // Connect to MongoDB
  mongoose.connect("mongodb://127.0.0.1:27017/accountinfo", { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Successfully connected to MongoDB.'))
    .catch(err => console.error('Connection error to MongoDB:', err));

  // Apply middleware for parsing JSON and urlencoded request bodies
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  // Routes for user authentication
  // app.use('/api/auth', authRoutes);

  // Start the server
  const PORT = process.env.PORT || 4000;
  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}${apolloServer.graphqlPath}`);
  });
}

// Execute the asynchronous server start function
startServer();
