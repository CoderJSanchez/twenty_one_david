const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Create Schema
const WarrantSchema = new Schema({
  month: {
    type: String,
    required: true
  },
  day: {
    type: Number,
    required: true
  },
  year: {
    type: Number,
    required: true
  },
  time: {
    type: Number,
    required: true
  },
  officerLast: {
    type: String,
    required: true
  },
  officerID: {
    type: Number,
    required: true
  },
  offenderFirst: {
    type: String,
    required: true
  },
  offenderLast: {
    type: String,
    required: true
  },
  race: {
    type: String,
    required: true
  },
  sex: {
    type: String,
    required: true
  },
  dob: {
    type: String,
    required: true
  },
  dl: {
    type: Number,
    required: true
  },
  height: {
    type: String,
    required: true
  },
  weight: {
    type: Number,
    required: true
  },
  hairColor: {
    type: String,
    required: false
  }
});

module.exports = Warrant = mongoose.model("warrants", WarrantSchema);
