const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const passport = require("passport");

const Profile = require("../../models/ProfileSchema");
const User = require("../../models/UserSchema");

router.get("/test", (req, res) => res.json({ msg: "Profile Works" }));

router.get(
  "/",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    Profile.findOne({ user: req.user.id })
      .then(profile => {
        if (!profile) {
          return res.status(404).json("Error");
        }
        res.json(profile);
      })
      .catch(err => res.status(404).json(err));
  }
);

//Post route for profile
router.post(
  "/",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {}
);

module.exports = router;
