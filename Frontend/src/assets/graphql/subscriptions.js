import { gql } from 'apollo-boost'

export const MESSAGE_SUBSCRIPTION = gql`
	subscription message{
		message{
			mutation
			data{
				from
				body
			}
		}
	}
`
