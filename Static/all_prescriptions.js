"use strict";

var mainApp = angular.module("mainApp", []);

mainApp.controller("prescriptionsController", function($scope, $http) {
    $scope.prescrtiptions = new Prescriptions("000", "Test", "random1", "random2", "random3", "random4", "random5", "random6");
});