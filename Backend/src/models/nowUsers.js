const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const NowUsersSchema = new Schema({
  user: {
    type: String,
    required: [true, "user field is required."],
  },
  createdAt: { type: Date, default: Date.now, index: { expires: 60 } }, // 60s後自動刪除
});
// Creating a table within database with the defined schema
const NowUsers = mongoose.model("nowUsers", NowUsersSchema);

// Exporting table for querying and mutating
module.exports = NowUsers;
