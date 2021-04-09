"use strict";

// Get the mainApp
var mainApp = angular.module("mainApp", []);

// Create the controller
//mainApp.controller("volunteerController", function($scope, $http) {   //was programmeController
//  $scope.volunteers = [                      
//    new Volunteers("002", "John", "Smith","nurse", "English", "Tropical island") // was Programme
   
 // ];
//});

mainApp.controller("volunteerController", function($scope, $http) {
    $http.get('/volunteers').then(function(response) {  
        $scope.volunteers = response.data;
    })
})