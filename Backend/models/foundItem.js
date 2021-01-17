const mongoose = require('mongoose')
const Schema = mongoose.Schema

// Creating a schema, sort of like working with an ORM
const FoundItemSchema = new Schema({
	name: {
		type: String,
		required: [true, 'Name field is required.']
	},
	foundLocation: {
		type: String,
		required: [true, 'FoundLocation field is required.']
    },
    currentLocation:{
        type: String,
		required: [true, 'CurrentLocation field is required.']
    },
    descriptions:{
        type: String,
		required: [true, 'descriptions field is required.']
    },
    images:{
        type: String,
		required: [true, 'images field is required.']
    },
    isReturned:{
        type:Boolean,
        required: [true, 'isReturned field is required.']
    } 
})

// Creating a table within database with the defined schema
const FoundItem = mongoose.model('foundItem', FoundItemSchema)

// Exporting table for querying and mutating
module.exports = FoundItem