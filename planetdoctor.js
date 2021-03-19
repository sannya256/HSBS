"use strict";

exports.Patient = class {
  // Patient ID
  id;
  // Patient first name
  first_name;
  // Patient surname
  last_name;
  // Student programme
  programme;
  // Student modules and grades
  modules = [];

  constructor(id, first_name, last_name, programme) {
    this.id = id;
    this.first_name = first_name;
    this.last_name = last_name;
    this.programme = programme;
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