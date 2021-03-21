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
app.get("/patient/:Patient_ID", function(req, res) {
  // Return "Module <code>"
  res.send("Patient " + req.params.Patient_ID);
});

// Add /modules endpoint
app.get("/patients", function(req, res) {
  // Return "All modules"
  res.send("All patients");
});


// FIX THIS CODE TOMORROW...MUST
// This code will Add /doctor endpoint
app.get("/doctor/:Doctor_ID", function(req, res) {
  // This code will return "Doctor <code>"
  res.send("Doctors" + req.params.Doctor_ID);//fixed - changed ID to Doctor_ID
});

// this code will Add /doctors endpoint to the front end
app.get("/doctors" , function(req, res) {
  // Return "All modules"
  res.send("All Doctors");
});

// To add Diagnosis endpoint
app.get("/diagnosis/:Diagnosis", function(req, res) {
    // Return "Module <code>"
    res.send("Diagnosis " + req.params.Patient_ID);
  });
  
  // To add Diagnosis endpoint to the front end
  app.get("/diagnosis", function(req, res) {
    // Return "All modules"
    res.send("All Diagnosis");
  });