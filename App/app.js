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
//app.get("/patients", function(req, res) {
  // This code will only display one patient and their ID 
  //res.send("All Patients");
//});

// This code will create /patients endpoint
app.get("/patients", function(req, res) {
  // Call getPatients on data
  data.getPatients(function(patients) {
    res.json(patients);
  });
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
//app.get("/diagnostics", function(req, res) {
    // 
    //res.send("All Diagnostics");
  //});
  
  // To add Diagnostics endpoint to the front end
  app.get("/diagnosting", function(req, res) {
    // This code will return the endpoint to the frontend
    data.getDiagnostics(function(diagnosisting) {
    res.json(diagnosisting);
  });
});

    //res.send("All Diagnostics");
  //});

// This code is adding prescriptions endpoint
//app.get("/prescriptions/:Prescriptions", function(req, res) {
  // Return "Module <code>"
  //res.send("Prescriptions " + req.params.Drug_ID);
//});

// This code is adding prescriptions endpoint to the front end
app.get("/prescriptions", function(req, res) {
  // Call getPrescriptons on data
  data.getPrescriptions(function(prescriptions){
      res.json(prescriptions)
    });
});

// This code is adding prescriptions endpoint to the front end
//app.get("/volunteers", function(req, res) {
  // Return "All modules"
  //res.send("All Volunteers");
//});

//This code is adding volunteers endpoint to the front end
app.get("/volunteering", function(req, res) {
  // Call getVolunteers on data
  data.getVolunteers(function(volunteering) {
      res.json(volunteering);
  });
});

// This code is adding prescriptions endpoint
//app.get("/volunteers/:Volunteers", function(req, res) {
//  // Return "Module <code>"
//  res.send("volunteers " + req.params.ID);
//});

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