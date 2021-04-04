"use strict";

class diagnostic {
    // This is the patient ID number
Patient_ID;
  // This is Patient's first name
P_First_Name;
  // This is Patient's last name 
P_Last_Name;
  //This will show Patient's medical diagnosis
Diagnosis;
  //This will show Drug_ID
Drug_ID;
  //This will show all drug names prescribed to Patients
Drug_name;
  //This will show tests carried out for Patients
Tests;
  //This will show the Doctors patients are referred to
Referal; 

  // To definie constructor
constructor(Patient_ID, P_First_Name, P_Last_Name, Diagnosis, Drug_ID, Drug_name, Tests, Referal) {
    this.Patient_ID = Patient_ID;
    this.P_First_Name = P_First_Name;
    this.P_Last_Name = P_Last_Name;
    this.Diagnosis = Diagnosis;
    this.Drug_ID = Drug_ID;
    this.Drug_name = Drug_name;
    this.Tests = Tests;
    this.Referal = Referal;
    }
}