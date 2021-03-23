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

// This is the start for doctor endpoints

// This code will add /patients endpoint
app.get("/patients", function(req, res) {
  // This code will return all patients from the patients table 
  data.getPatients(function(patients) {
    res.json(patients);
  });
});

// This code will add a single /patient endpoint
app.get("/patient/:Patient_ID", function(req, res) {
  // This code will return a single patient from the patients table 
  data.getPatient(req.params.Patient_ID, function(patient) {
      res.json(patient);
  });
});

// Patient endpoints stop here

// This is the start for doctor endpoints

//This code will Add /doctors endpoint
app.get("/doctors" , function(req, res) {
  // This code will return "all doctors" from the doctors table 
  data.getDoctors(function(doctors) {
    res.json(doctors);
  });
  
});

// This is the code for Adding a single /doctor endpoint
app.get("/doctor/:doc", function(req, res) {
  // This code will Call getDoctor on data
  data.getDoctor(req.params.doc, function(doc) {
      res.json(doc);
  });
});
// Doctor endpoints stop here

  
  // This code will add Diagnostics endpoint to the front end
  app.get("/diagnosting", function(req, res) {
    // This code will return the endpoint to the frontend
    data.getDiagnostics(function(diagnosting) {
    res.json(diagnosting);
  });
});

// This code will add /diagnostics endpoint
app.get("/diagnostic/:code", function(req, res) {
  // This code will call getDiagnostics on data
  data.getDiagnostic(req.params.code, function(diagnostic) {
      res.json(diagnostic);
  });
});




// This code is adding prescriptions endpoint to the front end
app.get("/prescriptions", function(req, res) {
  // Call getPrescriptons on data
  data.getPrescriptions(function(prescriptions){
      res.json(prescriptions)
    });
});

// Add /Prescription endpoint
app.get("/SinglePrescription/:code", function(req, res) {
  // This code will call prescriptions on data
  data.getSinglePrescription(req.params.code, function(singleprescription) {
      res.json(singleprescription);
  });
});


//This code is adding volunteers endpoint to the front end
app.get("/volunteers", function(req, res) {
  // Call getVolunteers on data
  data.getVolunteers(function(volunteers) {
      res.json(volunteers);
  });
});

// Add /volunteer endpoint
app.get("/volunteer/:code", function(req, res) {
  // Call getVolunteer on data
  data.getVolunteer(req.params.code, function(volunteer) {
      res.json(volunteer);
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

