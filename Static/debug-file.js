/// This code will export getPatient function
///exports.getPatient = function(Patient_ID, callback) {
    // This codw will create SQL statement
    //var sql =`
            //SELECT 
               // Patients.Patient_ID, 
               // Patients.P_First_Name, 
               // Patients.P_Last_Name, 
               // Patients.DOB,
               // Patients.Gender,
              //  Patients.Symptoms,
              //  Prescriptions.Drug_name,
              //  Prescriptions.Stock,
              //  Prescriptions.Drug_ID,
           // FROM
                //Patients,
                //Prescriptions
            //WHERE
              //  Patients.Patient_ID = '2553811640'
            //    AND
              //  Patients.Patient_ID = Prescriptions.Patient_ID
            //`;
    //This code will execute query and only one row
   // db.get(sql, function(err, row) {
       // if (err) {
          //  return console.error(err.message);
       // }
        //This code will create diagnostic object
       // var pres = new planetdoctor.Prescriptions(row.Drug_name, row.prescription, row.prescription);
        // //This code will create a patient object
        //var pat = new planetdoctor.Patients(row.Patient_ID, row.P_First_Name, row.P_Last_Name, row.DOB, row.Gender, row.Symptoms, pres);
        // This code will add patient to array
       // patients.push(pres);
   // }
    // This code will execute callback function
   //     callback(patients);
    ///});

