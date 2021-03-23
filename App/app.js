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
//app.get("/doctors" , function(req, res) {
  // Return "All modules"
 // res.send("All Doctors");
    
//});

//NEW CODE

// Add /students endpoint
app.get("/doctors", function(req, res) {
  // Call getStudents on data
  data.getDoctors(function(doctors) {
    res.json(doctors);
  });
});
// ends here


// To add Diagnosis endpoint
app.get("/diagnostic/:Drug_ID", function(req, res) {
    // This code will return diagnostic of a single patient
    res.send("Diagnostics" + req.params.Drug_ID);
  });
  
  // To add Diagnosis endpoint to the front end
  app.get("/Diagnostics", function(req, res) {
    // This code will diaplay the diagnostics of all patients as a response
    res.send("All Diagnostics");
  });
//Need to edit this code
// This code is adding prescriptions endpoint
app.get("/prescription/:Drug_name", function(req, res) {
  // Return "Module <code>"
  res.send("Prescriptions " + req.params.Drug_name);
});

// This code is adding prescriptions endpoint to the front end
//app.get("/prescriptions", function(req, res) {
  // Return "All modules"
  //res.send("All Prescriptions");
//});

// Add /student endpoint
app.get("/Prescriptions", function(req, res) {
  // Call getPrescriptions on data
  data.getPrescriptions(function(Prescriptions) {
      res.json(Prescriptions);
  });
});




// To start the server
// This code will allow the application layer to listen communication from the front end on port 3000
app.listen(3000, function(err) {
  // In case of an error
  if (err) {
    return console.error(err.message);
  }
  //When theres no error
  console.log("You have launched the Server.");
});