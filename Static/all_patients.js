"use strict";

// This code will get the PDApp
var  PDApp= angular.module("PDApp", []);

// This code will create the patient controller and request for patient data from the backend
PDApp.controller("patientController", function($scope, $http) {

//This code will get patient data from the backend and display to the frontend 
    $http.get('/patients').then(function(response) {
      $scope.patients = response.data;
    });
  });
  
    // This code will send a delete message to the server
    $scope.deletePatient = function(Patient_ID) {
    // This code will send delete message to /patients/Patient_ID endpoint
        $http.delete("/patient/" + Patient_ID).then(function(response) {
      // This code will refresh the list of patients after request is completed
            $http.get("/patients").then(function(response) {
                $scope.patients = response.data;
                });
            });
        };
    //Inserting a new patients medical records to the table
    //
    $scope.new_patients = new Patients("", "","","");
        // This code will send a put notification to the server
        $scope.createPatients = function() {
        // This code will send post a message the to /patients endpoint
            $http.post("/patients", $scope.new_patients).then(function(response) {
            // This will reset new_patient to empty to accept new entry 
                $scope.new_patients = new Patient("", "","","");
            // This code will refresh the list after successfull addition
            $http.get("/patients").then(function(response) {
                $scope.patients = response.data;
            });
        });
    };
