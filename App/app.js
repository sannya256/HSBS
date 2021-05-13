"use strict";

// Planet doctor classes are used in the application layer 
const planetdoctor = require("../planetdoctor.js");

// Establishing communication between the application layer and the data layer
const data = require("../data/data.js");

// This code is going to import express from the npm library
const express = require("express");

// Express application is created 
var app = express();

// Add JSON parsing to accept incoming data from the frontend
app.use(express.json());

// Location of the static files are added 
app.use(express.static("Static")); // s=S

// This is the start for patient endpoints

// This code will add /patients endpoint
app.get("/patients", function(req, res) {
  // This code will return all patients from the patients table 
  data.getPatients(function(patients) {
      res.json(patients);
  });
});

// Add /patients post endpoint
app.post("/patients", function(req, res) {
// Call createPatient on data
  data.addPatient(req.body, function() {
    res.send("OK");
  });
});

// This code will add a single /patient endpoint
app.get("/patient/:code", function(req, res) {
  // This code will return a single patient from the patients table 
  data.getPatient(req.params.code, function(patient) {
      res.json(patient);
  });
});

// This code will update a single /patient endpoint
app.put("/patient/:code", function(req, res) {
  data.updatePatient(req.body, function() {
      res.send("OK");
  });
});


//Asking the data layer to remove a patient
// Add a /patient delete endpoint
app.delete("/patient/:Patient_ID", function(req, res) {
  // This will call deletePatient on the data
  data.deletePatient(req.params.Patient_ID, function() {
    // After successful deletion there will be an OK response to the browser
    res.send("OK");
  });
});

app.put("/patients", function(req, res) {
  // Call function on data
  data.updatePatient(req.body, function() {
    res.send("OK");
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


// Add /doctors post endpoint
app.post("/doctors", function(req, res) {
  // Call addDoctor on data
  data.addDoctor(req.body, function() {
    res.send("OK");
  });
});

// This is the code for Adding a single /doctor endpoint
app.get("/doctor/:doc", function(req, res) {
  // This code will Call getDoctor on data
  data.getDoctor(req.params.doc, function(doc) {
      res.json(doc);
  });
});
//Asking the data layer to remove a doctors availability
// Add a /doctor delete endpoint
app.delete("/doctor/:Doctor_ID", function(req, res) {
  // This will call deleteDoctor on the data
  data.deleteDoctor(req.params.Doctor_ID, function() {
    // After successful deletion there will be an OK response to the browser
    res.send("OK");
  });
});

app.put("/doctors", function(req, res) {
  // Call function on data
  data.updateDoctorAvailability(req.body, function() {
    res.send("OK");
  });
});




// Doctor endpoints stop here

// Diagnostics endpoints start here

  // This code will add /diagnostics endpoint to the front end
  app.get("/diagnostics", function(req, res) {
    // This code will return the endpoint to the frontend
    data.getDiagnostics(function(diagnostics) {
    res.json(diagnostics);
  });
});

// This code will add /diagnostics endpoint
app.get("/diagnostic/:code", function(req, res) {
  // This code will call getDiagnostics on data
  data.getDiagnostic(req.params.code, function(diagnostic) {
      res.json(diagnostic);
  });
});

// This code will add /diagnostic delete endpoint
app.delete("/diagnostic/:Drug_ID", function(req, res) {
  data.deleteDiagnostic(req.params.Drug_ID, function() {
    res.send("OK");
  });
});

app.post("/diagnostics", function(req, res){
  data.addDiagnostic(req.body,function(){
    res.send("OK");
  });
});

app.put("/diagnostic/:Drug_ID", function(req, res) {
  data.updateDiagnostic(req.params.Drug_ID, function() {
    res.send("OK");
  });
});

// Diagnostics endpoints stop here

// This code is adding prescriptions endpoint to the front end
app.get("/prescriptions", function(req, res) {
  // Call getPrescriptons on data
  data.getPrescriptions(function(prescriptions) {
      res.json(prescriptions);
    });
});

// Add /Prescription endpoint
app.get("/prescription/:code", function(req, res) {
  // This code will call prescriptions on data
  data.getPrescription(req.params.code, function(prescription) {
      res.json(prescription);
  });
}); 
app.post("/prescriptions", function(req,res){
  //call addsingleprescription on data 
  data.addPrescription(req.body, function(){
    res.send("OK");
  });
}); 
// This code will update a single /patient endpoint
app.put("/prescriptions/:code", function(req, res) {
  data.updatePrescriptions(req.body, function() {
      res.send("OK");
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



app.post("/volunteers", function(req,res){
  console.log('app.js - in the app.post function')
  //call addVolunteer on data 
  data.addVolunteer(req.body, function(){
    console.log('app.js in the addvolunteer function call')
    res.send("OK");
  });
});

// Add a /doctor delete endpoint
app.delete("/volunteer/:ID", function(req, res) {
  console.log('app.js - in the app.del function')
  // This will call deleteVolunteer on the data
  data.deleteVolunteer(req.params.ID, function() {
    console.log('app.js in the deletevolunteer function call')
    // After deletion send OK response to the browser
    res.send("OK");
  });
});

// Add a /doctor alter endpoint
app.put("/volunteer/:ID", function(req, res) {
  // This will call alterVolunteer on the data
  data.alterVolunteer(req.body, function(Volunteer) {
    // After deletion send OK response to the browser
    res.send(Volunteer);
  });
});

// Add a /doctor delete endpoint
//app.put("/volunteers", function(req, res) {
  // This will call deleteVolunteer on the data
  //data.updateVolunteer(req.body, function() {
    // After deletion send OK response to the browser
  //  res.send("OK");
  //});
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

