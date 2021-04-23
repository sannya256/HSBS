"use strict";

// This code will get the PDApp
var  PDApp= angular.module("PDApp", []);

// This code will create the patient controller and request for patient data from the backend
PDApp.controller("prescriptionController", function($scope, $http) {

//This code will get patient data from the backend and display to the frontend 
    $http.get('/prescriptions').then(function(response) {
      $scope.prescriptions = response.data;
    });
  });
  
    // This code will send a delete message to the server
    $scope.deleteprescription = function(Drug_name) {
    // This code will send delete message to /patients/Patient_ID endpoint
        $http.delete("/prescription/" + Drug_name).then(function(response) {
      // This code will refresh the list of patients after request is completed
            $http.get("/prescriptions").then(function(response) {
                $scope.prescriptions = response.data;
                });
            });
        };
    //Inserting a new patients medical records to the table
        // This code will send a put notification to the server
        $scope.createprescription = function() {
        // This code will send post a message the to /patients endpoint
            $http.post("/prescriptions", $scope.new_prescription).then(function(response) {
            // This will reset new_patient to empty to accept new entry 
                $scope.new_prescription = new new_prescription("", "","","");
            // This code will refresh the list after successfull addition
            $http.get("/prescriptions").then(function(response) {
                $scope.prescriptions = response.data;
            });
        });
    };
//This code will select a patient
    $scope.selectprescription= function(Drug_name) {
        //get specific patient by ID
       $http.get("/prescription/" + Drug_name).then(function(response){
           $scope.selectprescription= response.data;
            //show the 'selected element'
           document.getElementByDrug_name("selected").style.display="block";
        });
    }
  