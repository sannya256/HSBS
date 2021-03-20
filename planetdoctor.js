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

// harman/harry please start medical records here. delete this when you start