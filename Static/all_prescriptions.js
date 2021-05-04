"use strict";

// This code will get the PDApp
var  PDApp= angular.module("PDApp", []);

// This code will create the prescription controller and request for prescription data from the backend
PDApp.controller("prescriptionController", function($scope, $http) {

//This code will get prescription data from the backend and display to the frontend 
    $http.get('/prescriptions').then(function(response) {
      $scope.prescriptions = response.data;
    });
  });
  
    // This code will send a delete message to the server
    $scope.deletePrescription = function(Drug_name) {
    // This code will send delete message to /prescriptions/Drug_name endpoint
        $http.delete("/prescription/" + Drug_name).then(function(response) {
      // This code will refresh the list of prescriptions after request is completed
            $http.get("/prescriptions").then(function(response) {
                $scope.prescriptions = response.data;
                });
            });
        };
        // This code will send a put notification to the server
        $scope.createPrescription = function() {
        // This code will send post a message the to prescriptions endpoint
            $http.post("/prescriptions", $scope.new_prescription).then(function(response) {
            // This will reset new_patient to empty to accept new entry 
                $scope.new_prescription = new new_prescription("", "","","");
            // This code will refresh the list after successfull addition
            $http.get("/prescriptions").then(function(response) {
                $scope.prescriptions = response.data;
            });
        });
    };
//This code will select a prescription
    $scope.selectPrescription= function(Drug_name) {
        //get specific prescription by drug name
       $http.get("/prescription/" + Drug_name).then(function(response){
           $scope.selectprescription= response.data;
            //show the 'selected element'
           document.getElementByDrug_name("selected").style.display="block";
        });
    }
  