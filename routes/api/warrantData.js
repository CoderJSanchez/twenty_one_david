const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const fs = require("fs");
//const pdf = require('../../../TwentyOneDavid/client/src/pdfFiles/DIC-24.pdf');

const Warrant = require("../../models/WarrantSchema");
const User = require("../../models/UserSchema");

router.get("/test", (req, res) => res.json({ msg: "Warrant Works" }));

router.post("/warrant", (req, res) => {
  const newWarrant = new Warrant({
    reportNumber: req.body.reportNumber,
    countyOfWarrant: req.body.countyOfWarrant,
    countyOfOffense: req.body.countyOfOffense,
    drivingBehaviorTextBox: req.body.drivingBehaviorTextBox,
    month: req.body.month,
    day: req.body.day,
    year: req.body.year,
    time: req.body.time,
    officerLast: req.body.officerLast,
    officerID: req.body.officerID,
    offenderFirst: req.body.offenderFirst,
    offenderLast: req.body.offenderLast,
    officerWitnessLast: req.body.officerWitnessLast,
    officerWitnessID: req.body.officerWitnessID,
    civilianWitnessDOB: req.body.civilianWitnessDOB,
    civilianWitnessFull: req.body.civilianWitnessFull,
    race: req.body.race,
    sex: req.body.sex,
    dob: req.body.dob,
    dl: req.body.dl,
    height: req.body.height,
    weight: req.body.weight,
    hair: req.body.hair,
    address: req.body.address,
    civilianCheckBox: req.body.civilianCheckBox,
    officerCheckBox: req.body.officerCheckBox,
    suspectAdmittedBox: req.body.suspectAdmittedBox,
    alcoholStrong: req.body.alcoholStrong,
    alcoholModerate: req.body.alcoholModerate,
    alcoholFaint: req.body.alcoholFaint,
    alcoholNone: req.body.alcoholNone,
    eyesBloodshot: req.body.eyesBloodshot,
    eyesRedPink: req.body.eyesRedPink,
    eyesGlassy: req.body.eyesGlassy,
    eyesWatery: req.body.eyesWatery,
    eyesDilated: req.body.eyesDilated,
    eyesNormal: req.body.eyesNormal,
    speechThick: req.body.speechThick,
    speechIncoherent: req.body.speechIncoherent,
    speechSlurred: req.body.speechSlurred,
    speechSlow: req.body.speechSlow,
    speechMumbled: req.body.speechMumbled,
    speechStuttered: req.body.speechStuttered,
    speechTalkative: req.body.speechTalkative,
    speechRapid: req.body.speechRapid,
    speechRepetitive: req.body.speechRepetitive,
    speechFair: req.body.speechFair,
    speechGood: req.body.speechGood,
    attArgumentative: req.body.attArgumentative,
    attCombative: req.body.attCombative,
    attProfane: req.body.attProfane,
    attSarcastic: req.body.attSarcastic,
    attInsulting: req.body.attInsulting,
    attCooperative: req.body.attCooperative,
    attCocky: req.body.attCocky,
    attLaughing: req.body.attLaughing,
    attCarefree: req.body.attCarefree,
    attIndifferent: req.body.attIndifferent,
    attSleepy: req.body.attSleepy,
    attPolite: req.body.attPolite,
    attSilent: req.body.attSilent,
    attReserved: req.body.attReserved,
    attCalm: req.body.attCalm,
    attTalkative: req.body.attTalkative,
    attAnxious: req.body.attAnxious,
    attExcited: req.body.attExcited,
    attConfused: req.body.attConfused,
    attUninhibited: req.body.attUninhibited,
    attMoodswing: req.body.attMoodswing,
    appDisorderly: req.body.appDisorderly,
    appOrderly: req.body.appOrderly,
    appUrine: req.body.appUrine,
    appVomit: req.body.appVomit,
    balFalling: req.body.balFalling,
    balUnsteady: req.body.balUnsteady,
    balSwaying: req.body.balSwaying,
    balSupport: req.body.balSupport,
    balFair: req.body.balFair,
    balGood: req.body.balGood,
    walkFalling: req.body.walkFalling,
    walkSwaying: req.body.walkSwaying,
    walkHeavy: req.body.walkHeavy,
    walkFair: req.body.walkFair,
    walkGood: req.body.walkGood,
    walkSupport: req.body.walkSupport,
    turnFalling: req.body.turnFalling,
    turnStaggering: req.body.turnStaggering,
    turnSwaying: req.body.turnSwaying,
    turnHesitant: req.body.turnHesitant,
    turnFair: req.body.turnFair,
    turnGood: req.body.turnGood,
    trainedAffient: req.body.trainedAffient,
    suspectRefused: req.body.suspectRefused,
    sfstOtherTests: req.body.sfstOtherTests,
    sfstOfficer: req.body.sfstOfficer,
    sfstAffient: req.body.sfstAffient,
    suspectInjured: req.body.suspectInjured,
    hgnLackLeft: req.body.hgnLackLeft,
    hgnLackRight: req.body.hgnLackRight,
    hgnDisLeft: req.body.hgnDisLeft,
    hgnDisRight: req.body.hgnDisRight,
    hgnOnsetLeft: req.body.hgnOnsetLeft,
    hgnOnsetRight: req.body.hgnOnsetRight
  });
  newWarrant
    .save()
    .then(warr => res.json(warr))
    .catch(err => console.log(err));
});

router.get("/warrant", (req, res) => {
  const errors = {};
  Warrant.findOne({})
    .then(data => {
      if (!data) {
        errors.noprofile = "no warrant";
        return res.status(404).json(errors);
      }
      res.json(data);
    })
    .catch(err => res.statas(404).json(err));
});
router.get("/warrant/:reportNumber", (req, res) => {
  const errors = {};
  res.send(req.params.reportNumber);
  // Warrant.findOne({ repotNumber: req.Warrant.reportNumber })
  //   .then(data => {
  //     if (!data) {
  //       errors.noprofile = "no warrant";
  //       return res.status(404).json(errors);
  //     }
  //     res.json(data);
  //   })
  //   .catch(err => res.statas(404).json(err));
});

module.exports = router;
