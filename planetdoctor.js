"use strict";

exports.Patient = class {
  // Patient ID
  id;
  // Patient first name
  first_name;
  // Patient surname
  last_name;
  //Gender
  gender;
  // Date of Birth
  dob;

  constructor(id, first_name, last_name, gender,dob ) {
    this.id = id;
    this.first_name = first_name;
    this.last_name = last_name;
    this.gender = gender;
    this.dob = dob; 
  }
}

exports.Doctor = class {
  // doctors id
  ID;
  // doctors name
  Name;
  // doctors speciality modules
  Speciality;

  //Doctor hospital no.
  Hospital_no;
  

  constructor(ID, Name, Speciality, Hospital_no) {
    this.ID = ID;
    this.Name = Name;
    this.Speciality = Speciality;
    this.Hospital_no = Hospital_no;
  }
}

exports.Pharmacist = class {
  // pharmacist id
  ID;
  // pharmacist name
  Name;
  // pharmacist hospital no.
  Hospital_no;


  constructor(ID, Name, Hospital_no) {
    this.ID = ID;
    this.Name = Name;
    this.Hospital_no = Hospital_no;
  }
}

exports.Patient_Medical_History = class {
  // patienet id
  Patient_ID;
  // patient medical history
  P_MedicalHistoty;
  // patient symptoms 
  P_Symptoms;
  // patient reports 
  P_Reports;
  // patient prescriptions
  P_Prescriptions;
  // patient treatment
  P_Treatment;
  // Doctor ID
  Doctor_ID;
  // pharmacist ID
  Pharmacist_ID;


  constructor(Patient_ID, _P_MedicalHistory,P_Symptoms, P_Reports, P_Prescriptions, P_Treatment, Doctor_ID, Pharmacist_ID) {
    this.Patient_ID = Patient_ID;
    this.P_MedicalHistory = P_MedicalHistoty;
    this.P_Symptoms = P_Symptoms;
    this.P_Reports = P_Reports;
    this.P_Prescriptions = P_Prescriptions;
    this.P_Treatment = P_Treatment;
    this.Doctor_ID = Doctor_ID;
    this.Pharmacist_ID = Pharmacist_ID; 
  }
}