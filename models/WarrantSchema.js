const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Create Schema
const WarrantSchema = new Schema({
  month: {
    type: String,
    required: false
  },
  day: {
    type: Number,
    required: false
  },
  year: {
    type: Number,
    required: false
  },
  time: {
    type: Number,
    required: false
  },
  address: {
    type: String,
    required: false
  },
  officerLast: {
    type: String,
    required: false
  },
  officerID: {
    type: Number,
    required: false
  },
  offenderFirst: {
    type: String,
    required: false
  },
  offenderLast: {
    type: String,
    required: false
  },
  race: {
    type: String,
    required: false
  },
  sex: {
    type: String,
    required: false
  },
  dob: {
    type: String,
    required: false
  },
  dl: {
    type: Number,
    required: false
  },
  height: {
    type: String,
    required: false
  },
  weight: {
    type: Number,
    required: false
  },
  hair: {
    type: String,
    required: false
  },
  officerWitnessLast: {
    type: String,
    required: false
  },
  officerWitnessID: {
    type: Number,
    required: false
  },
  civilianWitnessFull: {
    type: String,
    required: false
  },
  civilianWitnessDOB: {
    type: String,
    required: false
  },
  civilianCheckBox: {
    type: Boolean,
    required: false
  },
  officerCheckBox: {
    type: Boolean,
    required: false
  },
  suspectAdmittedBox: {
    type: Boolean,
    required: false
  },
  alcoholStrong: {
    type: Boolean,
    required: false
  },
  alcoholModerate: {
    type: Boolean,
    required: false
  },
  alcoholFaint: {
    type: Boolean,
    required: false
  },
  alcoholNone: {
    type: Boolean,
    required: false
  }
});

module.exports = Warrant = mongoose.model("warrants", WarrantSchema);
