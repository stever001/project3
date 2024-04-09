// /src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

// // Construct our main GraphQL API endpoint
// const httpLink = createHttpLink({
//   uri: '/graphql',
// });

// Adjust the URI to match your server's address and port
const client = new ApolloClient({
  // link: httpLink,
  // uri: "http://localhost:4000/graphql",
  uri: "/graphql",
  cache: new InMemoryCache()
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ApolloProvider>,
  document.getElementById('root')
);

