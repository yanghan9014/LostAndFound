import { gql } from 'apollo-boost'

const CREATE_USER_MUTATION = gql`
	mutation createUser(
		$name: String!
		$password: String!
		$email: String!
	) {
		createUser(
			data: {
				name: $name
				password: $password
				email: $email
			}
		) {
			name
			email
		}
	}
`
const CREATE_MESSAGE_MUTATION = gql`
	mutation createMessage(
		$senderName: String!
		$receiverName: String!
		$body: String!
	) {
		createUser(
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
`

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
			id
			name
			lostLocation
			isReturned
		}
	}
`

const UPDATE_FOUNDITEM_MUTATION = gql`
	mutation updateFoundItem(
		$id: ID!
		$name: String!
		$isReturned: Boolean!
		$updatedReturnedState: Boolean!
	) {
		createFoundItem(
			data: {		
				id: $id
				name: $name
				isReturned: $isReturned
				updatedReturnedState: $updatedReturnedState
			}
		) {
			id
			name
			lostLocation
			isReturned
		}
	}
`

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
				lostLocation: $foundLocation
				descriptions: $descriptions
				images: $images
				isFound: $isFound
				rewards: $rewards
			}
		) {
			id
			name
			lostLocation
			isFound
		}
	}
`

const UPDATE_LOSTITEM_MUTATION = gql`
	mutation updateLostItem(
		$id: ID!
		$name: String!
		$isFound: Boolean!
		$updatedFoundState: Boolean!
	) {
		updateLostItem(
			data: {
				id: $ID
				name: $name
				isFound: $isFound
				updatedFoundState: $updatedFoundState
			}
		) {
			id
			name
			lostLocation
			isFound
		}
	}
`

export {CREATE_USER_MUTATION, 
	CREATE_MESSAGE_MUTATION, 
	CREATE_FOUNDITEM_MUTATION, 
	UPDATE_FOUNDITEM_MUTATION, 
	CREATE_LOSTITEM_MUTATION, 
	UPDATE_LOSTITEM_MUTATION
}