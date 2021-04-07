"use strict";

// This code will get the PDapp
var  PDapp= angular.module("PDapp", []);

// Code here will Create the doctor controller and request for doctors data from the backend

PDapp.controller("doctorController", function($scope, $http) {
    //This code will get doctors data from the backend
    $http.get('/doctors').then(function(response) {
        $scope.doctors = response.data;
    });
}); 