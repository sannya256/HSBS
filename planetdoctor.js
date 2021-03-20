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