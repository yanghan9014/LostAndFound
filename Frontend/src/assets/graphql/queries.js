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
	query foundItems{
		id
		name
		foundLocation
		descriptions
		images
		isReturned
	}
`

const LOSTITEMS_QUERY = gql`
	query lostItems{
		id
		name
		lostLocation
		descriptions
		images
		isFound
		rewards
	}
`
export {USERS_QUERY, 
	MESSAGES_QUERY, 
	FOUNDITEMS_QUERY, 
	LOSTITEMS_QUERY
}