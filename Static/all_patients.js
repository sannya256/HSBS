"use strict";

// This code will get the PDApp
var  PDApp= angular.module("PDApp", []);

// This code will create the patient controller and request for patient data from the backend
PDApp.controller("patientController", function($scope, $http) {
    //hides the 'selected' element first of all
    document.getElementById("selected").style.display="none";

//This code will get patient data from the backend and display to the frontend 
    $http.get('/patients').then(function(response) {
        $scope.patients = response.data;
    });

//This code will select a patient
    $scope.selectPatient= function(code) {
    //get specific patient by ID
        $http.get("/patient/" + code).then(function(response){
            $scope.selectedPatient= response.data;
        //show the 'selected element'
            document.getElementById("selected").style.display="block";
            $http.get("/diagnostic/" + code).then(function(response){
                $scope.selectedDiagnostic= response.data;//
        });
        
    
        });
    };


    // This code will send a delete message to the server
    /*$scope.updatePatient = function(Patient_ID) {
    // This code will send delete message to /patients/Patient_ID endpoint
        $http.update("/patient/" + Patient_ID).then(function(response) {
      // This code will refresh the list of patients after request is completed
            $http.get("/patients").then(function(response) {
                $scope.patients = response.data;
                });
            });
        };*/

    //Inserting new patient's symptoms to the table
    //
    $scope.updatePatient = function() {
        $http.put("/patients", $scope.patient).then(function(response) {
            // Alert user
            window.alert("Entry updated.");
        });
    };

    //Sends a delete message to the server
    $scope.deletePatient = function(code) {
            //sends a delete message to /patient/code
        $http.delete('/patient/' + code).then(function(response) {
                //when request completes, refresh list of patients
            $http.get('/patients').then(function(response) {
                $scope.patients = response.data;
            });
        });
    };
        
    //Inserting a new patients medical records to the table
        // This code will send a put notification to the server
    $scope.createPatient = function() {
        // This code will send post a message the to /patients endpoint
        $http.post("/patients", $scope.new_patient).then(function(response) {
        // This will reset new_patient to empty to accept new entry 
        $scope.new_patient = new Patients ("","","","","","");
        // This code will refresh the list after successfull addition
        $http.get("/patients").then(function(response) {
            $scope.patients = response.data;
            });
        });
    };


});




