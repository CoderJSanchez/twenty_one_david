const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Create Schema
const ProfileSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "users"
  },
  city: {
    type: String
  },
  yearsOfService: {
    type: Number
  }
});

module.exports = Profile = mongoose.model("profile", ProfileSchema);
