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
    $foundTime: String!
    $founder: String!
  ) {
    createFoundItem(
      data: {
        name: $name
        foundLocation: $foundLocation
        currentLocation: $currentLocation
        descriptions: $descriptions
        images: $images
        isReturned: $isReturned
        foundTime: $foundTime
        founder: $founder
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
  ) {
    updateFoundItem(
      data: {
        _id: $_id
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
    $lostTime: String!
    $loster: String!
  ) {
    createLostItem(
      data: {
        name: $name
        lostLocation: $lostLocation
        descriptions: $descriptions
        images: $images
        isFound: $isFound
        rewards: $rewards
        lostTime: $lostTime
        loster: $loster
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
  ) {
    updateLostItem(
      data: {
        _id: $_id
      }
    ) {
      _id
      name
      lostLocation
      isFound
    }
  }
`;
const CREATE_NOWUSER_MUTATION = gql`
  mutation createNowUser($data: String!) {
    createNowUser(data: $data)
  }
`;

export {
  CREATE_USER_MUTATION,
  CREATE_MESSAGE_MUTATION,
  CREATE_FOUNDITEM_MUTATION,
  UPDATE_FOUNDITEM_MUTATION,
  CREATE_LOSTITEM_MUTATION,
  UPDATE_LOSTITEM_MUTATION,
  CREATE_NOWUSER_MUTATION,
};
