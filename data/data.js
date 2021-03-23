"use strict";

// This code will import SQLite library.
const sqlite3 = require("sqlite3").verbose();

// This code intructs the application layer to use planetdoctor classes
const planetdoctor = require("../planetdoctor.js");

// This code will connect to the planetdocotor database.
var db = new sqlite3.Database("data/PlanetDoctor.db", function(err) {
    // this code will run in case of an error
    if (err) {
        return console.error(err.message);
    }
    // This code will run if there is no error
    console.log("You are now Connected to planetdoctor database.");
});
// This will Export getPrescriptions function
exports.getPrescriptions = function(callback) {
    // Creating SQL statement for Prescriptions and connecting foreign keys
    var sql = `
        SELECT 
            Prescriptions.Drug_name, 
            Prescriptions.Stock, 
            Prescriptions.Drug_ID, 
            Prescriptions.Patient_ID
        FROM
            Prescriptions, 
            Diagnostics,
            Patients
        WHERE
            Prescriptions.Drug_ID = Diagnostics.Drug_ID 
            
        
        `;
    // Execute query. Return all
    db.all(sql, function(err, rows) {
        // Check if there is an error
        if (err) {
            return console.error(err.message);
        }
        // Create an array of Prescriptions
        var prescriptions = [];
        // Loop through rows creating Prescriptions objects
        for (var row of rows) {
            // Create Diagnostics object
            var tests = new prescriptions.Diagnostics(row.Patient_ID, row.P_First_name, row.P_Last_name,row.Diagnosis, row.Drug_ID, row.Drug_name, row.Tests, row.Referal);
             // Create Patients object
             //var pats = new prescriptions.Patients(row.Patient_ID, row.P_First_name, row.P_Last_name, row.DOB, row.Gender, row.Symptoms);
            // Create Prescriptions object
            var Meds = new prescriptions.Prescriptions(row.Drug_name, row.Stock, row.Drug_ID, row.Patient_ID);
            // Add prescriptions to array
            prescriptions.push(Meds);
        }
        // Execute callback function
        callback(prescriptions);
    });
};

// NEW CODE

// Export getStudents function
exports.getDoctors = function(callback) {
    // Create SQL statement
    var sql = `
        SELECT * FROM Doctors`;
    // Execute query. Return all
    db.all(sql, function(err, rows) {
        // Check if error
        if (err) {
            return console.error(err.message);
        }
        // Create an array of Students
        var doctors = [];
        // Loop through rows creating Student objects
        for (var row of rows) {
            // Create programme object
            //var vols = new doctor.Volunteers(row., row.name);
            // Create student object
            var doc = new doctor.Doctors(row.Doctor_ID, row.Name, row.Gender, row.Availability);
            // Add student to array
            doctors.push(doc);
        }
        // Execute callback function
        callback(doctors);
    });
};
// ENDS HERE

//volunteering code starts here 
// Export getProgrammes function
exports.getVolunteers = function(callback) {
    // Create SQL statement
    var sql = `SELECT * FROM volunteers`;
 // Execute query. Return all
db.all(sql, function(err, rows) {
    // Check if error
    if (err) {
        return console.error(err.message);
    }
    // Create programme array
        var volunteering = [];
        // Loop through rows creating programme objects
        for (var row of rows) {
            // Create programme object
            var volunt = new planetdoctor.Volunteers(row.ID, row.First_Name, row.Last_Name, row.Nationality, row.camp_loc);
            // Add object to array
            volunteering.push(volunt);
        }
        // Execute callback function
        callback(volunteering);
    });
};

// 
// Export getProgrammes function
exports.getDiagnostics = function(callback) {
    // Create SQL statement
    var sql = `SELECT * FROM Diagnostics` 
    //`SELECT Patient_ID, P_First_name, P_Last_name, Diagnosis, Drug_ID, Drug_name, Tests, Referal
    //From Diagnostics, Patients
    //WHERE Diagnostics.Patient_ID = Patients.Patient_ID`;
 // Execute query. Return all
db.all(sql, function(err, rows) {
    // Check if error
    if (err) {
        return console.error(err.message);
    }
    // Create programme array
        var diagnosisting = [];
        // Loop through rows creating programme objects
        for (var row of rows) {
            // creating patient object
            //var pats = new planetdoctor.Patients(row.Patients_ID, row.P_First_name, row.P_Last_name, row.DOB, row.Gender, row.Symptoms);
            // Create programme object
            var diag = new planetdoctor.Diagnostics(row.Patient_ID, row.P_First_name, row.P_Last_name, row.Diagnosis, row.Drug_ID, row.Drug_name, row.Tests, row.Referal);
            // Add object to array
            diagnosisting.push(diag);
        }
        // Execute callback function
        callback(diagnosisting);
    });
};

//NEW CODE
// This will Export getPatients function
exports.getPatients = function(callback) {
    // Creating SQL statements for Patients and connecting keys
    var sql = `SELECT * FROM Patients`;
    // Execute query. Return all
    db.all(sql, function(err, rows) {
        // Check if there is an error
        if (err) {
            return console.error(err.message);
        }
        // Create an array of Patients
        var patienting = [];
        // Loop through rows creating Patient objects
        for (var row of rows) {
            // Create programme object
            //var prog = new student.Programme(row.programme, row.name);
            // Create patient object
            var pat = new planetdoctor.Patients(row.Patient_ID, row.P_First_name, row.P_Last_name, row.DOB, row,Gender);
            // Add patients to array
            patienting.push(pat);
        }
        // Execute callback function
        callback(patienting);
    });
};
