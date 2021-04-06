"use strict";

// Get the mainApp
var mainApp = angular.module("mainApp", []);

// Create the controller
mainApp.controller("Controller", function($scope, $http) {
  $scope.Patients = new Patients("000", "Test");
});