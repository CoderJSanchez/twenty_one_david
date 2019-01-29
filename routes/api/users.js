const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require("../../config/keys");
const Joi = require("joi");
const passport = require("passport");

const User = require("../../models/UserSchema");

router.get("/test", (req, res) => res.json({ msg: "Users Works" }));

//Post request that allows users to register
router.post("/register", (req, res) => {
  const regSchema = {
    name: Joi.string().min(2),
    email: Joi.string().email({ minDomainAtoms: 2 }),
    password: Joi.string()
      .min(6)
      .regex(/^[a-zA-Z0-9]{3,30}$/),
    password2: Joi.string()
      .min(6)
      .regex(/^[a-zA-Z0-9]{3,30}$/)
  };
  const regResult = Joi.validate(req.body, regSchema);
  if (regResult.error) {
    res.status(400).send(regResult.error.details[0].message);
  }

  //check to see if the user exits by checking if User == true
  User.findOne({ email: req.body.email }).then(user => {
    if (user) {
      return res.status(400).json({ email: "Email already exists" });
    } else {
      const newUser = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
      });
      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
          if (err) throw err;
          newUser.password = hash;
          newUser
            .save()
            .then(user => res.json(user))
            .catch(err => console.log(err));
        });
      });
    }
  });
});

//User Login - Returning JWT Token
router.post("/login", (req, res) => {
  //Joi Validation
  const schema = {
    password: Joi.string()
      .min(6)
      .regex(/^[a-zA-Z0-9]{3,30}$/),
    email: Joi.string().email({ minDomainAtoms: 2 })
  };

  const result = Joi.validate(req.body, schema);

  //response if errors
  if (result.error) {
    res.status(400).send(result.error.details[0].message);
    return;
  }

  const email = req.body.email;
  const password = req.body.password;

  User.findOne({ email }).then(user => {
    if (!user) {
      return res.status(404).json({ email: "User not found" });
    }

    //check if password hash matches
    bcrypt.compare(password, user.password).then(isMatch => {
      if (isMatch) {
        //Password matched

        const payload = { id: user.id, name: user.name };

        jwt.sign(
          payload,
          keys.secretOrKey,
          { expiresIn: 86400 },
          (err, token) => {
            res.json({
              success: true,
              token: "Bearer " + token
            });
          }
        );
      } else {
        return res.status(400).json({ password: "Password incorrect" });
      }
    });
  });
});

module.exports = router;
