//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const dbSetup = require("./models/model");
const _ = require("lodash");
const mongoose = require("mongoose");
const Routes = require("./routes/routes");



const app = express();


app.set('view engine', 'ejs');
dbSetup();

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));
app.use(Routes);


app.listen(process.env.PORT || 3000, function() {
  console.log("The Server has started on port 3000");
});
