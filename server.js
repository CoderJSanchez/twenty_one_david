const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");
const path = require("path");

const users = require("./routes/api/users");
const warrant = require("./routes/api/warrantData");

const app = express();

//Body Parser
// Body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//Get key
const db = require("./config/keys").mongoURI;

//Connect to MongoDB thru Mongoose
mongoose
  .connect(db, { useMongoClient: true })
  .then(() => console.log("mongoDB connected"))
  .catch(err => console.log(err));

//Passport middleware
app.use(passport.initialize());

//passport config
require("./config/passport")(passport);

//Use routes
app.use("/api/users", users);
app.use("/api/warrantData", warrant);

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

const port = process.env.PORT || 3001;

app.listen(port, () => console.log(`Listening on PORT... ${port}`));
