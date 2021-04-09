"use strict";

// Get the mainApp
var mainApp = angular.module("mainApp", []);

// Create the controller
mainApp.controller("volunteerController", function($scope, $http) {   //was programmeController
  $scope.volunteers = [                      
    new Volunteers("001", "John", "Smith","doctor", "English", "Tropical island") // was Programme
   
  ];
});