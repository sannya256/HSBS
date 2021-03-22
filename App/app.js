"use strict";

// Planet doctor classes are used in the application layer 
const planetdoctor = require("../planetdoctor.js");

// Establishing communication between the application layer and the data layer
const data = require("../data/data.js");

// This code is going to import express from the npm library
const express = require("express");

// Express application is created 
var app = express();

// Location of the static files are added 
app.use(express.static("static"));

// This code will create /patient endpoints
app.get("/patient/:Patient_ID", function(req, res) {
  // This code will only display one patient and their ID 
  res.send("Patients" + req.params.Patient_ID);
});

// This code will create /patients endpoint
app.get("/patients", function(req, res) {
  // This code will display 'All patients' as a response 
  res.send("All patients");
});

// This code will Add /doctor endpoint
app.get("/doctor/:Doctor_ID", function(req, res) {
  // This code will return "Doctor along with the id"
  res.send("Doctors" + req.params.Doctor_ID);
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