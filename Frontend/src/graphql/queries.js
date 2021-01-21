import { gql } from "apollo-boost";

const USERS_QUERY = gql`
  query users($query: String) {
    users(query: $query) {
      name
      email
      messages {
        senderName
        receiverName
        body
      }
    }
  }
`

const MESSAGES_QUERY = gql`
  query messages($query: String) {
    messages(query: $query) {
      senderName
      receiverName
      body
    }
  }
`
const FOUNDITEMS_QUERY = gql`
	query foundItems($query: String){
		foundItems(query:$query){
			_id
			name
			foundLocation
			currentLocation
			descriptions
			images
			isReturned
      foundTime
      founder
		}
	}
`
const LOSTITEMS_QUERY = gql`
	query lostItems($query: String){
		lostItems(query:$query){
			_id
			name
			lostLocation
			descriptions
			images
			isFound
			rewards
      lostTime
      loster
		}
	}
`
const LOGIN_QUERY = gql`
  query login($query: login!) {
    login(query: $query) {
      Login
    }
  }
`;
const CHECKNOWUSER_QUERY = gql`
  query checkNowUser($query: String!) {
    login(query: $query)
  }
`;
export {
  USERS_QUERY,
  MESSAGES_QUERY,
  FOUNDITEMS_QUERY,
  LOSTITEMS_QUERY,
  LOGIN_QUERY,
  CHECKNOWUSER_QUERY,
};
