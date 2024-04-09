import { gql } from "@apollo/client";

export const QUERY_GET_APPT = gql`
   query getAppointments($username: String!) {
      getAppointments(username: $username) {
         _id
         username
         apptDate
         apptTime
         confirmed
      }
   }
`;

export const QUERY_USER = gql`
   query user($username: String!) {
      user(username: $username) {
         _id
         username
         email
      }
   }
`;

export const QUERY_USER_BY_ID = gql`
   query userById($id: ID!) {
      userById(_id: $id) {
         _id
         username
         email
      }
   }
`;

//* ALL user's data for his/her personal profile page
export const QUERY_ME = gql`
   {
      me {
         _id
         username
         email
      }
   }
`;

export const QUERY_ME_BASIC = gql`
   {
      me {
         _id
         username
         email
      }
   }
`;
