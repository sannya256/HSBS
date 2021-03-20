"use strict";

exports.Diagnosis = class {
  // Patient ID
  P_ID;
  // Patient first name
  P_First_Name;
  // Patient last name 
  P_Last_Name;
  //Diagnostics
  Diagnostics;
  // Medications
  Medications;
  // Tests
  Tests;
  // Referal
  Referal;

  constructor(P_ID, P_First_Name, P_Last_Name, Diagnostics, Medications, Tests, Referal) {
    this.P_ID = P_ID;
    this.P_First_Name = P_First_Name;
    this.P_Last_Name = P_Last_Name;
    this.Diagnostics = Diagnostics;
    this.Medications = Medications;
    this.Tests = Tests;
    this.Referal = Referal;
  }
} 
exports.Patients = class {
  // Patient ID
  P_ID;
  // Patient first name
  P_First_Name;
  // Patient last name 
  P_Last_Name;
  //Date of birth
  DOB;
  //Gender of patients
  Gender;
  //Diagnostics
  Diagnostics;
  // Medications
  Medications;
 

  constructor(P_ID, P_First_Name, P_Last_Name, DOB, Gender, Diagnostics, Medications) {
    this.P_ID = P_ID;
    this.P_First_Name = P_First_Name;
    this.P_Last_Name = P_Last_Name;
    this.DOB = DOB;
    this.Gender= Gender;
    this.Diagnostics = Diagnostics;
    this.Medications = Medications;
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
  ID;
  // this shows the doctors gender
  Gender;
  // This is the doctors avalability date
  Availability;
  
 
  constructor(Name, ID, Gender, Availability) {
    this.Name = Name;
    this.ID = ID;
    this.Gender = Gender;
    this.Availability = Availability;

  } 
}