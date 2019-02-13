const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Create Schema
const WarrantSchema = new Schema({
  reportNumber: {
    type: String,
    required: true
  },
  countyOfWarrant: {
    type: String,
    required: true
  },
  countyOfOffense: {
    type: String,
    required: true
  },
  drivingBehaviorTextBox: {
    type: String,
    required: true
  },
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
  },
  trainedAffient: {
    type: Boolean
  },
  suspectRefused: {
    type: Boolean
  },
  sfstOtherTests: {
    type: Boolean
  },
  sfstOfficer: {
    type: Boolean
  },
  sfstAffient: {
    type: Boolean
  },
  suspectInjured: {
    type: Boolean
  },
  eyesBloodshot: {
    type: Boolean
  },
  eyesRedPink: {
    type: Boolean
  },
  eyesGlassy: {
    type: Boolean
  },
  eyesWatery: {
    type: Boolean
  },
  eyesDilated: {
    type: Boolean
  },
  eyesNormal: {
    type: Boolean
  },
  speechThick: {
    type: Boolean
  },
  speechIncoherent: {
    type: Boolean
  },
  speechSlurred: {
    type: Boolean
  },
  speechSlow: {
    type: Boolean
  },
  speechMumbled: {
    type: Boolean
  },
  speechStuttered: {
    type: Boolean
  },
  speechTalkative: {
    type: Boolean
  },
  speechRapid: {
    type: Boolean
  },
  speechRepetitive: {
    type: Boolean
  },
  speechFair: {
    type: Boolean
  },
  speechGood: {
    type: Boolean
  },
  attArgumentative: {
    type: Boolean
  },
  attCombative: {
    type: Boolean
  },
  attProfane: {
    type: Boolean
  },
  attSarcastic: {
    type: Boolean
  },
  attInsulting: {
    type: Boolean
  },
  attCooperative: {
    type: Boolean
  },
  attCocky: {
    type: Boolean
  },
  attLaughing: {
    type: Boolean
  },
  attCarefree: {
    type: Boolean
  },
  attIndifferent: {
    type: Boolean
  },
  attSleepy: {
    type: Boolean
  },
  attPolite: {
    type: Boolean
  },
  attSilent: {
    type: Boolean
  },
  attReserved: {
    type: Boolean
  },
  attCalm: {
    type: Boolean
  },
  attTalkative: {
    type: Boolean
  },
  attAnxious: {
    type: Boolean
  },
  attExcited: {
    type: Boolean
  },
  attConfused: {
    type: Boolean
  },
  attUninhibited: {
    type: Boolean
  },
  attMoodswing: {
    type: Boolean
  },
  appDisorderly: {
    type: Boolean
  },
  appOrderly: {
    type: Boolean
  },
  appUrine: {
    type: Boolean
  },
  appVomit: {
    type: Boolean
  },
  balFalling: {
    type: Boolean
  },
  balUnsteady: {
    type: Boolean
  },
  balSwaying: {
    type: Boolean
  },
  balSupport: {
    type: Boolean
  },
  balFair: {
    type: Boolean
  },
  balGood: {
    type: Boolean
  },
  walkFalling: {
    type: Boolean
  },
  walkSwaying: {
    type: Boolean
  },
  walkHeavy: {
    type: Boolean
  },
  walkFair: {
    type: Boolean
  },
  walkGood: {
    type: Boolean
  },
  walkSupport: {
    type: Boolean
  },
  turnFalling: {
    type: Boolean
  },
  turnStaggering: {
    type: Boolean
  },
  turnSwaying: {
    type: Boolean
  },
  turnHesitant: {
    type: Boolean
  },
  turnFair: {
    type: Boolean
  },
  turnGood: {
    type: Boolean
  },
  walkStagg: {
    type: Boolean
  },
  hgnLackLeft: {
    type: Boolean
  },
  hgnLackRight: {
    type: Boolean
  },
  hgnDisLeft: {
    type: Boolean
  },
  hgnDisRight: {
    type: Boolean
  },
  hgnOnsetLeft: {
    type: Boolean
  },
  hgnOnsetRight: {
    type: Boolean
  }
});

module.exports = Warrant = mongoose.model("warrants", WarrantSchema);
