const express = require("express");
const mongoose = require("mongoose");

const users = require("./routes/api/users");
const profile = require("./routes/api/profile");

const app = express();

//Get key
const db = require("./config/keys").mongoURI;

//Connect to MongoDB thru Mongoose
mongoose
  .connect(db)
  .then(() => console.log("mongoDB connected"))
  .catch(error => console.log(error));

app.get("/", (req, res) => res.send("21 DAVID"));

//Use routes
app.use("/api/users", users);
app.use("/api/profile", profile);

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Listening on PORT... ${port}`));
