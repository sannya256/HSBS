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

exports.Programme = class {
  // Programme code
  code;
  // Programme name
  name;
  // Programme modules
  modules = [];

  constructor(code, name) {
    this.code = code;
    this.name = name;
  }
}

exports.Module = class {
  // Module code
  code;
  // Module name
  name;

  constructor(code, name) {
    this.code = code;
    this.name = name;
  }
}