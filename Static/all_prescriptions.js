"use strict";


// This code will get the PDApp
var  PDApp= angular.module("PDApp", []);

// This code will create the prescription controller and request for prescription data from the backend
PDApp.controller("prescriptionController", function($scope, $http) {

//This code will get prescription data from the backend and display to the frontend 
    $http.get('/prescriptions').then(function(response) {
      $scope.prescriptions = response.data;
    });
  
    // This code will send a update message to the server
    $scope.updatePrescription = function(Drug_name) {
    // This code will send update message to /prescriptions/Drug_name endpoint
        $http.update("/prescription/" + Drug_name).then(function(response) {
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
                $scope.new_prescription = new Prescriptions("", "","","");
            // This code will refresh the list after successfull addition
            $http.get("/prescriptions").then(function(response) {
                $scope.prescriptions = response.data;
            });
        });
    };
//This code will select a prescription
    $scope.selectPrescription= function(code) {
        //get specific prescription by drug name
       $http.get("/prescription/" + code).then(function(response){
           $scope.selectprescription= response.data;
            //show the 'selected element'
           document.getElementBycode("selected").style.display="block";
        });
    }; 
});

  