import { gql } from "@apollo/client";
const { Date } = require("graphql-scalars");

export const LOGIN_USER = gql`
   mutation login($email: String!, $password: String!) {
      login(email: $email, password: $password) {
         token
         user {
            _id
            username
         }
      }
   }
`;

export const ADD_USER = gql`
   mutation addUser($username: String!, $email: String!, $password: String!) {
      addUser(username: $username, email: $email, password: $password) {
         token
         user {
            _id
            username
         }
      }
   }
`;

export const ADD_APPT = gql`
   mutation addAppt($username: String, $apptDate: Date!, $apptTime: String!, $confirmed: Boolean!) {
      addAppt(username: $username, apptDate: $apptDate, apptTime: $apptTime, confirmed: $confirmed)
   }
`;
