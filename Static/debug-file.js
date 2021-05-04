//This code will export getPatient function
exports.getPatient = function(Patient_ID, callback) {
    // This code will create SQL statement
    var sql =`
              SELECT 
                  Patients.Patient_ID, 
                  Patients.P_First_Name, 
                  Patients.P_Last_Name, 
                  Patients.DOB,
                  Patients.Gender,
                  Patients.Symptoms,
              FROM
                  Patients,
              WHERE
                  Patients.Patient_ID = '2553811640'
              `;
    //This code will execute query and only one row
    db.get(sql, function(err, row) {
        if (err) {
            return console.error(err.message);
        }
        //This code will create diagnostic object
        //var diag = new planetdoctor.Diagnostics(row.Diagnosis, row.Drug_name);
         
        //This code will create a patient object
        var pat = new planetdoctor.Patients(row.Patient_ID, row.P_First_Name, row.P_Last_Name, row.DOB, row.Gender, row.Symptoms, pres);
        
        //now get the diagnostics for patient
        var sql =`
        SELECT 
            Patients.Patient_ID, 
            Diagnostics.Diagnosis,
            Diahnostics.Drug_name
        FROM
            Patients,
            Diagnostics
        WHERE
            Patients.Patient_ID = '2553811640'
            AND
            Patients.Patient_ID= Diagnostics.Patient_ID
        `;

        // Execute query. Multiple rows returned.
        db.all(sql, function(err, rows) {
          if (err) {
              return console.error(err.message);
          }
          // Loop through each row and create a module object and attach a grade
          for (var row of rows) {
              // Create module object
              //var pat = new planetdoctor.Patients(row.Patient_ID, row.P_First_Name, row.P_Last_Name, row.DOB, row.Gender, row.Symptoms, pres);
              // Create a module combined with grade
              var diag = {pat, diag:row.diag}
              // Add module and grade to student
              pat.push(diag);
          }
          // Return student
          callback(pat);
      });
  });
};

// This code will export getPatient function
/*exports.getPatient = function(code, callback) {
    // This code will create SQL statement
    //Get the patient and their prescriptions
    //var sql =`
        //SELECT * FROM Patients
        //WHERE Patient_ID = '${code}'`;
    //This code will execute query and only one row
    db.get(sql, function(err, row) {
        // To check for errors, this code will be excuted and if any the error msg will be displayed
        if (err) {
            return console.error(err.message);
        }
// This code will create a patient object
        var patient = new planetdoctor.Patients(row.Patient_ID, row.P_First_Name, row.P_Last_Name, row.DOB, row.Gender, row.Symptoms);
    //This code will execute callback function
        callback(patient);
        });
     }; */
      
