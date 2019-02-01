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
    month: req.body.month,
    day: req.body.day,
    year: req.body.year,
    time: req.body.time,
    officerLast: req.body.officerLast,
    officerID: req.body.officerID,
    offenderFirst: req.body.offenderFirst,
    offenderLast: req.body.offenderLast,
    race: req.body.race,
    sex: req.body.sex,
    dob: req.body.dob,
    dl: req.body.dl,
    height: req.body.height,
    weight: req.body.weight,
    hairColor: req.body.haircolor
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
        errors.noprofile = "no profile";
        return res.status(404).json(errors);
      }
      res.json(data);
    })
    .catch(err => res.statas(404).json(err));
});
module.exports = router;
