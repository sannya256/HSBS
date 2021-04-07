"use strict";

// This code will get the PDapp
var  PDapp= angular.module("PDapp", []);

// Code here will Create the doctor controller and request for doctors data from the backend

PDapp.controller("doctorController", function($scope, $http) {
    //This code will get doctors data from the backend and display to the frontend 
    $http.get('/doctors').then(function(response) {
        $scope.doctors = response.data;
    });

    // This code will sends a delete notification to the server
    $scope.deleteDoctor = function(Doctor_ID) {
    // This code will send delete notification to /doctor/Doctor_ID endpoint
        $http.delete("/doctor/" + Doctor_ID).then(function(response) {
      // This code will refresh the list after successfull deletion
            $http.get("/doctors").then(function(response) {
                $scope.doctors = response.data;
                });
            });
        };
    });


