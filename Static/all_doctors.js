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
    $scope.updateDoctor = function(code) {
        console.log('$scope:', $scope.doctors, 'code:',code)
        $http.put("/doctor/" + code['Doctor_ID'], code).then(function(response) {
            $scope.doctor = new Doctors ($scope.doctors.Name,$scope.doctors.Doctor_ID,$scope.doctors.Gender ,$scope.doctors.Availability);
            console.log('what now', $scope.doctor)
            console.log('$scope1:', $scope.doctor, 'code1:',code['Doctor_ID'])
            $http.get("/doctor/"+code['Doctor_ID']).then(function(response) {
            $scope.doctor = response.data;
            });
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
});
