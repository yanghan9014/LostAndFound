import { gql } from 'apollo-boost'

export {USERS_QUERY, 
	MESSAGES_QUERY, 
	FOUNDITEMS_QUERY, 
	LOSTITEMS_QUERY
}

const USERS_QUERY = gql`
	query users{
		name
		email
		messages
	}
`

const MESSAGES_QUERY = gql`
	query messages{
		senderName
		receiverName
		body
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
		}
	}
`