import { gql } from "apollo-boost";

const CREATE_USER_MUTATION = gql`
  mutation createUser($name: String!, $password: String!, $email: String!) {
    createUser(data: { name: $name, password: $password, email: $email }) {
      name
      email
    }
  }
`;
const CREATE_MESSAGE_MUTATION = gql`
  mutation createMessage(
    $senderName: String!
    $receiverName: String!
    $body: String!
  ) {
    createMessage(
      data: {
        senderName: $senderName
        receiverName: $receiverName
        body: $body
      }
    ) {
      senderName
      receiverName
      body
    }
  }
`;

const CREATE_FOUNDITEM_MUTATION = gql`
  mutation createFoundItem(
    $name: String!
    $foundLocation: String!
    $currentLocation: String!
    $descriptions: String!
    $images: [String]
    $isReturned: Boolean!
  ) {
    createFoundItem(
      data: {
        name: $name
        foundLocation: $foundLocation
        currentLocation: $currentLocation
        descriptions: $descriptions
        images: $images
        isReturned: $isReturned
      }
    ) {
      _id
      name

      isReturned
    }
  }
`;

const UPDATE_FOUNDITEM_MUTATION = gql`
  mutation updateFoundItem(
    $_id: ID!
    $name: String!
    $isReturned: Boolean!
    $updatedReturnedState: Boolean!
  ) {
    createFoundItem(
      data: {
        _id: $_id
        name: $name
        isReturned: $isReturned
        updatedReturnedState: $updatedReturnedState
      }
    ) {
      _id
      name
      isReturned
    }
  }
`;

const CREATE_LOSTITEM_MUTATION = gql`
  mutation createLostItem(
    $name: String!
    $lostLocation: String!
    $descriptions: String!
    $images: [String]
    $isFound: Boolean!
    $rewards: String!
  ) {
    createLostItem(
      data: {
        name: $name
        lostLocation: $lostLocation
        descriptions: $descriptions
        images: $images
        isFound: $isFound
        rewards: $rewards
      }
    ) {
      _id
      name
      lostLocation
      isFound
    }
  }
`;

const UPDATE_LOSTITEM_MUTATION = gql`
  mutation updateLostItem(
    $_id: ID!
    $name: String!
    $isFound: Boolean!
    $updatedFoundState: Boolean!
  ) {
    updateLostItem(
      data: {
        _id: $_id
        name: $name
        isFound: $isFound
        updatedFoundState: $updatedFoundState
      }
    ) {
      _id
      name
      lostLocation
      isFound
    }
  }
`;

export {
  CREATE_USER_MUTATION,
  CREATE_MESSAGE_MUTATION,
  CREATE_FOUNDITEM_MUTATION,
  UPDATE_FOUNDITEM_MUTATION,
  CREATE_LOSTITEM_MUTATION,
  UPDATE_LOSTITEM_MUTATION,
};
