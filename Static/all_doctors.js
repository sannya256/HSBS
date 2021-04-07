"use strict";

// This code will get the PDapp
var  PDapp= angular.module("PDapp", []);

// Code here will Create the doctor controller and request for doctors data from the backend

PDapp.controller("doctorController", function($scope, $http) {
    //This code will get doctors data from the backend and display to the frontend 
    $http.get('/doctors').then(function(response) {
        $scope.doctors = response.data;
    });

    // Sends a delete message to the server
    $scope.deleteDoctor = function(Doctor_ID) {
    // Send delete message to /module/code
        $http.delete("/doctor/" + Doctor_ID).then(function(response) {
      // When request completes, refresh list of modules
            $http.get("/doctors").then(function(response) {
                $scope.doctors = response.data;
                });
            });
        };
    });


