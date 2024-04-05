import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import AboutUs from './components/AboutUs/AboutUs';
import LoginForm from './components/auth/LoginForm';
import Contact from './components/Contact/Contact'; 
import SignupForm from './components/auth/SignupForm'; 


// Adjust the URI to match your server's address and port
const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
  cache: new InMemoryCache()
});

const router = createBrowserRouter ([{
  path: '/',
  element:  <App />,
  children: [{index: true, element: <AboutUs />}, 
  {path: 'login', element: <LoginForm />},
  {path: 'contact', element: <Contact />},
  {path: 'signup', element: <SignupForm />}
]}

]);

ReactDOM.render(
  <ApolloProvider client={client}>
     <RouterProvider router = {router}></RouterProvider>
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