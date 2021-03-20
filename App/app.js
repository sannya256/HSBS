"use strict";

// The application layer uses student classes
const planetdoctor = require("../planetdoctor.js");

// The application layer talks to the data layer
const data = require("../data/data.js");

// Import express library.
const express = require("express");

// Create express application
var app = express();

// Add static files location
app.use(express.static("static"));

// Add /module endpoint
app.get("/patient/:ID", function(req, res) {
  // Return "Module <code>"
  res.send("patient " + req.params.ID);
});

// Add /modules endpoint
app.get("/Patients", function(req, res) {
  // Return "All modules"
  res.send("All Patients");
});
