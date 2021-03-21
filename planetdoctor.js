"use strict";

exports.Diagnostics = class {
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
exports.Patients = class {
  // This is Patient's ID number
  Patient_ID;
  // This is Patient's first name
  P_First_Name;
  // This is Patient's last name 
  P_Last_Name;
  //This is Patient's Date of birth
  DOB;
  //This is Patient's Gender
  Gender;
  //This will show Patient's current symptoms 
  Symptoms;

 
  constructor(Patient_ID, P_First_Name, P_Last_Name, DOB, Gender, Symptoms) {
    this.Patient_ID = Patient_ID;
    this.P_First_Name = P_First_Name;
    this.P_Last_Name = P_Last_Name;
    this.DOB = DOB;
    this.Gender = Gender;
    this.Symptoms = Symptoms;
  }
}
exports.Prescriptions = class {
  // Name of medication
  Drug_name;
  // Stock levels
  Stock_ID;
  // Patient Identification
  Patient_ID;
  
 

  constructor(Drug_name, Stock_ID, Patient_ID) {
    this.Drug_name = Drug_name;
    this.Stock_ID = Stock_ID;
    this.Patient_ID = Patient_ID;
  } 
}

exports.Volunteers = class {
  // ID
  ID;
  // Volunteers first name
  First_Name;
  // Volunteers last name
  Last_Name;
  //Profession of Volunteers
  Profession;
  //Nationality
  Nationality;

  constructor(ID,First_Name,Last_Name,Profession,Nationality) {
    this.ID = ID;
    this.First_Name = First_Name;
    this.Last_Name = Last_Name;
    this.Profession = Profession;
    this.Nationality = Nationality;
  } 
}

exports.Doctors = class {
  // This is the doctors full name
  Name;
  // This is the doctors identification
  Doctor_ID;
  // This shows the doctors gender
  Gender;
  // This is the doctors availability date
  Availability;
  
 
  constructor(Name, Doctor_ID, Gender, Availability) {
    this.Name = Name;
    this.Doctor_ID = Doctor_ID;
    this.Gender = Gender;
    this.Availability = Availability;

  } 
}