import { gql } from "@apollo/client";

export const LOGIN_USER = gql`
mutation Mutation($email: String!, $password: String!) {
   login(email: $email, password: $password) {
     token
   }
 }
`;

export const ADD_USER = gql`
mutation SignUp($email: String!, $password: String!) {
   signUp(email: $email, password: $password) {
     token}
     
   }
`;

export const ADD_APPT = gql`
   mutation addAppt($username: String, $apptDate: Date!, $apptTime: String!, $apptWith: User!, $confirmed: Boolean!) {
      addAppt(username: $username, apptDate: $apptDate, apptTime: $apptTime, apptWith: $apptWith, confirmed: $confirmed)
   }
`;
