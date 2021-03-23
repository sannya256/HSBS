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
        SELECT * FROM Prescriptions `;

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
            // Create Prescriptions object
            var Meds = new planetdoctor.Prescriptions(row.Drug_name, row.Stock, row.Drug_ID, row.Patient_ID);
            // Add prescriptions to array
            prescriptions.push(Meds);
        }
        // Execute callback function
        callback(prescriptions);
    });
};

// Export getModule function
exports.getSinglePrescription = function(code, callback) {
    // Create SQL statement
    var sql = `
        SELECT * FROM Prescriptions
        WHERE Drug_ID = '${code}'`;
    // Execute query. Only one row returned.
    db.get(sql, function(err, row) {
        if (err) {
            return console.error(err.message);
        }
        // Create a module object
        var singleprescription = new planetdoctor.Prescriptions(row.Drug_name, row.Stock, row.Drug_ID, row.Patient_ID);
        // Return module
        callback(singleprescription);
    });
};

//Code here will expose doctor data information

// This codde will export getStudents function 
exports.getDoctors = function(callback) {
    // SQL statement for showing all doctors created
    var sql = `
        SELECT * FROM Doctors`;
    // To execute th SQL quer and the return all doctors
    db.all(sql, function(err, rows) {
        // This code will check for any errors and if any run the code
        if (err) {
            return console.error(err.message);
        }
        // Create an array for Doctors
        var doctors = [];
        // This code will Loop through each row  to create Doctor objects
        for (var row of rows) {
            // To create a doctor object
            var doc = new planetdoctor.Doctors(row.Doctor_ID, row.Name, row.Gender, row.Availability);
            // This code will push each doctor to the array created above
            doctors.push(doc);
        }
        // callback function will be excuted with this code
        callback(doctors);
    });
};

// This code will export getDoctor function
exports.getDoctor = function(doc, callback) {
    // SQL statement for showing a single doctor created
    var sql = `
        SELECT * FROM Doctors
        WHERE Doctor_ID = '${doc}'`;
    // The code below will execute the query above and return just a row of data.
    db.get(sql, function(err, row) {
        // To check for errors, this code will be excuted and if any the error msg will be displayed
        if (err) {
            return console.error(err.message);
        }
        // This code will create a doctor object
        var doctor = new planetdoctor.Doctors(row.Doctor_ID, row.Name, row.Gender, row.Availability);
        // After the code above is excuted then this code will return a doctor
        callback(doctor);
    });
};
// Communication with the doctors data stops here

//The following code will broadcast Diagnostics data

// This code will allow to export getDiagnostics function
exports.getDiagnostics = function(callback) {
    // This code will create SQL statement
    var sql = `SELECT * FROM Diagnostics` 

 // This code will allow to execute queries and return data from Diagnostics class 
db.all(sql, function(err, rows) {
    // Check if error
    if (err) {
        return console.error(err.message);
    }
    // This code will create programme array
        var diagnosting = [];
        //This code will allow to loop through rows creating programme objects
        for (var row of rows) {
            
            // This code will create Diagnostics object
            var diag = new planetdoctor.Diagnostics(row.Patient_ID, row.P_First_name, row.P_Last_name, row.Diagnosis, row.Drug_ID, row.Drug_name, row.Tests, row.Referal);
            // This code will add Diagnostics object to array
            diagnosting.push(diag);
        }
        // This code will execute callback function
        callback(diagnosting);
    });
};

// This code will export getDiagnostics function
exports.getDiagnostic = function(code, callback) {
    // This code will allow to create SQL statements
    var sql = `
        SELECT * FROM Diagnostics
        WHERE Drug_ID = '${code}'`;
    // This code will execute return of only one row from the sql query
    db.get(sql, function(err, row) {
        if (err) {
            return console.error(err.message);
        }
        // This code will create a module object
        var diagnostic = new planetdoctor.Diagnostics(row.Patient_ID, row.P_First_name, row.P_Last_Name, row.Diagnosis, row.Drug_ID, row.Drug_name, row.Tests, row.Referal);
        // This code will return diagnostics
        callback(diagnostic);
    });
};

// Diagnostics data broadcasting ends here

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
        var patients= [];
        // Loop through rows creating Patient objects
        for (var row of rows) {
            // Create programme object
            //var prog = new student.Programme(row.programme, row.name);
            // Create patient object
            var pat = new planetdoctor.Patients(row.Patient_ID, row.P_First_Name, row.P_Last_Name, row.DOB, row.Gender);
            // Add patients to array
            patients.push(pat);
        }
        // Execute callback function
        callback(patients);
    });
};

// Export getPatient function
exports.getPatient = function(Patient_ID, callback) {
    // Create SQL statement
    var sql = `
        SELECT * FROM Patients
        WHERE Patient_ID = '${Patient_ID}'`;
    // Execute query. Only one row returned.
    db.get(sql, function(err, row) {
        if (err) {
            return console.error(err.message);
        }
        // Create a patient object
        var patient = new planetdoctor.Patients(row.Patient_ID, row.P_First_Name, row.P_Last_Name, row.DOB, row.Gender);
        // Return patient
        callback(patient);
    });
};


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

// Export getVolunteer function
exports.getVolunteer = function(code, callback) {
    // Create SQL statement
    var sql = `
        SELECT * FROM volunteers
        WHERE ID = '${code}'`;
    // Execute query. Only one row returned.
    db.get(sql, function(err, row) {
        if (err) {
            return console.error(err.message);
        }
        // Create a volunteer object
        var volunteer = new planetdoctor.Volunteers(row.ID, row.First_Name, row.Last_Name, row.Profession, row.Nationality, row.camp_loc);
        // Return module
        callback(volunteer);
    });
}; 