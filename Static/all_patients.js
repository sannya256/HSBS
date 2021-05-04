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
    //$scope.deletePatient = function(Patient_ID) {
    // This code will send delete message to /patients/Patient_ID endpoint
        //$http.delete("/patient/" + Patient_ID).then(function(response) {
      // This code will refresh the list of patients after request is completed
            //$http.get("/patients").then(function(response) {
                //$scope.patients = response.data;
                //});
            //});
        //};

<<<<<<< HEAD
    //$scope.new_patient = new Module("", "");
=======
    //$scope.new_patient = new Module("","","","","","");
>>>>>>> 1d972331a2f49dc963087405b2e85f6649bdb263
        
    //Inserting a new patients medical records to the table
        // This code will send a put notification to the server
    $scope.createPatient = function() {
        // This code will send post a message the to /patients endpoint
        $http.post("/patients", $scope.new_patient).then(function(response) {
        // This will reset new_patient to empty to accept new entry 
        $scope.new_patient = new Patient("","","","","","");
        // This code will refresh the list after successfull addition
        $http.get("/patients").then(function(response) {
            $scope.patients = response.data;
            });
        });
    };
;
//This code will select a patient
    $scope.selectPatient= function(Patient_ID) {
        //get specific patient by ID
        $http.get("/patient/" + Patient_ID).then(function(response){
        $scope.selectpatient= response.data;
            //show the 'selected element'
        document.getElementByPatient_ID("selected").style.display="block";
        });
    }
