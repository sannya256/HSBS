"use strict";

// This code will get the PDapp
var  PDapp= angular.module("PDapp", []);

// Code here will Create the doctor controller and request for doctors data from the backend

PDapp.controller("doctorController", function($scope, $http) {
    //This code will get doctors data from the backend and display to the frontend 
    $http.get('/doctors').then(function(response) {
        $scope.doctors = response.data;
    });
    //Adding a deleteDoctor function
    // This code will send a delete notification to the server
    $scope.deleteDoctor = function(Doctor_ID) {
    // This code will send delete notification to /doctor/Doctor_ID endpoint
        $http.delete("/doctor/" + Doctor_ID).then(function(response) {
      // This code will refresh the list after successfull deletion
            $http.get("/doctors").then(function(response) {
                $scope.doctors = response.data;
                });
            });
        };
    //Inserting a new doctors availalbility to the table
    //
    $scope.updateDoctor = function() {
        $http.put("/doctors", $scope.doctor).then(function(response) {
            // Alert user of succefull update
            window.alert("Entry updated.");
        });
    };



    //$scope.new_doctor = new Doctor("", "","","");
        // This code will send a put notification to the server
    $scope.createDoctor = function() {
        // This code will send post a message the to /doctors endpoint
        $http.post("/doctors", $scope.new_doctor).then(function(response) {
            // This will reset new_doctor to empty to accept new entry 
            $scope.new_doctor = new Doctors("", "","","");
            // This code will refresh the list after successfull addition
            $http.get("/doctors").then(function(response) {
                $scope.doctors = response.data;
            });
        });
    };



    $scope.selectDoctor = function(code) {
    // Get student by id
        $http.get("/doctor/" + code).then(function(response) {
            $scope.Doctor = response.data;
      // Show the selected element
            document.getElementById("selected").style.display="block";
        });
    }

    $scope.updateDoctor = function(code) {
        $http.put('/doctor/'+ code['ID'], code).then(function(response) { 
            $scope.Doctor = new Doctors($scope.Doctor.Name,$scope.Doctor.Doctor_ID,$scope.Doctor.Gender,$scope.Doctor.Availability );
            $http.get("/Doctors").then(function(response) {
                $scope.Doctor = response.data;
            });
        });
    };
});