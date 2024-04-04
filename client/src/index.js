import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

// Adjust the URI to match your server's address and port
const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
  cache: new InMemoryCache()
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('root')
);

//* Ruthie code for this!!!
// import React from "react";
// import ReactDOM from "react-dom";
// import "./index.css";
// import App from "./App";
// import "bootstrap/dist/css/bootstrap.min.css";

// ReactDOM.render(
//    <React.StrictMode>
//       <App />
//    </React.StrictMode>,
//    document.getElementById("root")
// );