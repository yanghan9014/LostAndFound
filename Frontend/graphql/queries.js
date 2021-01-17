import { gql } from 'apollo-boost'

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