"use strict";

// This code will import SQLite library.
const sqlite3 = require("sqlite3").verbose();

// This code intructs the application layer to use planetdoctor classes
const planetdocotor = require("../planetdoctor.js");

// This code will connect to the planetdocotor database.
var db = new sqlite3.Database("data/planetdoctor.db", function(err) {
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