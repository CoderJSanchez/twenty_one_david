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
    required: true
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
  },
  eyesBloodshot: {
    type: String
  },
  eyesRedPink: {
    type: String
  },
  eyesGlassy: {
    type: String
  },
  eyesWatery: {
    type: String
  },
  eyesDilated: {
    type: String
  },
  eyesNormal: {
    type: String
  },
  speechThick: {
    type: String
  },
  speechIncoherent: {
    type: String
  },
  speechSlurred: {
    type: String
  },
  speechSlow: {
    type: String
  },
  speechMumbled: {
    type: String
  },
  speechStuttered: {
    type: String
  },
  speechTalkative: {
    type: String
  },
  speechRapid: {
    type: String
  },
  speechRepetitive: {
    type: String
  },
  speechFair: {
    type: String
  },
  speechGood: {
    type: String
  },
  attArgumentative: {
    type: String
  },
  attCombative: {
    type: String
  },
  attProfane: {
    type: String
  },
  attSarcastic: {
    type: String
  },
  attInsulting: {
    type: String
  },
  attCooperative: {
    type: String
  },
  attCocky: {
    type: String
  },
  attLaughing: {
    type: String
  },
  attCarefree: {
    type: String
  },
  attIndifferent: {
    type: String
  },
  attSleepy: {
    type: String
  },
  attPolite: {
    type: String
  },
  attSilent: {
    type: String
  },
  attReserved: {
    type: String
  },
  attCalm: {
    type: String
  },
  attTalkative: {
    type: String
  },
  attAnxious: {
    type: String
  },
  attExcited: {
    type: String
  },
  attConfused: {
    type: String
  },
  attUninhibited: {
    type: String
  },
  attMoodswing: {
    type: String
  },
  appDisorderly: {
    type: String
  },
  appOrderly: {
    type: String
  },
  appUrine: {
    type: String
  },
  appVomit: {
    type: String
  },
  balFalling: {
    type: String
  },
  balUnsteady: {
    type: String
  },
  balSwaying: {
    type: String
  },
  balSupport: {
    type: String
  },
  balFair: {
    type: String
  },
  balGood: {
    type: String
  },
  walkFalling: {
    type: String
  },
  walkSwaying: {
    type: String
  },
  walkHeavy: {
    type: String
  },
  walkFair: {
    type: String
  },
  walkGood: {
    type: String
  },
  walkSupport: {
    type: String
  },
  turnFalling: {
    type: String
  },
  turnStaggering: {
    type: String
  },
  turnSwaying: {
    type: String
  },
  turnHesitant: {
    type: String
  },
  turnFair: {
    type: String
  },
  turnGood: {
    type: String
  }
});

module.exports = Warrant = mongoose.model("warrants", WarrantSchema);
