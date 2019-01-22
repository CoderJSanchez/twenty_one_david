const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");

const users = require("./routes/api/users");
const profile = require("./routes/api/profile");

const app = express();

//Body Parser
// Body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//Get key
const db = require("./config/keys").mongoURI;

//Connect to MongoDB thru Mongoose
mongoose
  .connect(
    db,
    { useMongoClient: true }
  )
  .then(() => console.log("mongoDB connected"))
  .catch(err => console.log(err));

//Passport middleware
app.use(passport.initialize());

//Use routes
app.use("/api/users", users);
app.use("/api/profile", profile);

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Listening on PORT... ${port}`));
