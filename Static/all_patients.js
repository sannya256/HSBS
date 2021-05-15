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

    
    $scope.selectPatient = function(patient) {
       // console.log('all_patients.js selectPatient:', patient)
        $http.get("/diagnostic/" + patient['Patient_ID']).then(function(response) {
            $scope.Patient = response.data;
           // console.log('all_patients.js, response.data:', response.data, '$scope.Patient', $scope.Patient, '$scope.atient.Patient_ID:',$scope.Patient.Patient_ID)
            document.getElementById("selected").style.display = "block";
        });
    };

    //Inserting new patient's symptoms to the table
    //
    $scope.updatePatient = function(code, codey) {
        $http.put("/patient/" + code['Patient_ID'], code).then(function(response) {
            $scope.patient = new Patients($scope.patients.Patient_ID,$scope.patients.First_Name,$scope.patients.Last_Name,$scope.patients.DOB,$scope.patients.Gender,$scope.patients.Symptoms);
            $http.get("/patient/"+code['Patient_ID']).then(function(response) {
            $scope.patient = response.data;
            });
        });
    };

    //Sends a delete message to the server
    $scope.deletePatient = function(code) {
            //sends a delete message to /patient/code
        $http.delete('/patient/' + code, code).then(function(response) {
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




