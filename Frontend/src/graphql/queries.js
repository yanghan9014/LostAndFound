import { gql } from "apollo-boost";

const USERS_QUERY = gql`
  query users($query: String) {
    users(query: $query) {
      name
      email
      messages
    }
  }
`;

const MESSAGES_QUERY = gql`
  query messages {
    senderName
    receiverName
    body
  }
`;

const FOUNDITEMS_QUERY = gql`
  query foundItems {
    id
    name
    foundLocation
    descriptions
    images
    isReturned
  }
`;

const LOSTITEMS_QUERY = gql`
  query lostItems {
    id
    name
    lostLocation
    descriptions
    images
    isFound
    rewards
  }
`;
const LOGIN_QUERY = gql`
  query login($query: login!) {
    login(query: $query) {
      Login
    }
  }
`;
export {
  USERS_QUERY,
  MESSAGES_QUERY,
  FOUNDITEMS_QUERY,
  LOSTITEMS_QUERY,
  LOGIN_QUERY,
};
