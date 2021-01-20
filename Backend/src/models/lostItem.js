const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Creating a schema, sort of like working with an ORM
const LostItemSchema = new Schema({
  name: {
    type: String,
    required: [true, "Name field is required."],
  },
  lostLocation: {
    type: String,
    required: [true, "FoundLocation field is required."],
  },
  descriptions: {
    type: String,
    required: [true, "descriptions field is required."],
  },
  images: {
    type: [String],
    required: [true, "images field is required."],
  },
  isFound: {
    type: Boolean,
    required: [true, "isFound field is required."],
  },
  rewards: {
    type: String,
    required: [true, "rewards field is required."],
  },
  lostTime: {
    type: String,
    required: [true, "lostTime field is required."],
  },
  loster: {
    type: String,
    required: [true, "loster field is required."],
  },
});

// Creating a table within database with the defined schema
const LostItem = mongoose.model("lostItem", LostItemSchema);

// Exporting table for querying and mutating
module.exports = LostItem;
