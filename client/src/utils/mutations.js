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
   mutation addAppt($username: String, $apptDate: Date!, $apptTime: String!) {
      addAppt(username: $username, apptDate: $apptDate, apptTime: $apptTime)
   }
`;

// import { gql } from "@apollo/client";

export const CREATE_APPT = gql`
   mutation createAppointment($username: String!, $apptDate: String!, $apptTime: String!) {
      createAppointment(username: $username, apptDate: $apptDate, apptTime: $apptTime) {
         id
         date
         time
      }
   }
`;
