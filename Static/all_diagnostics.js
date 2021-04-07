"use strict";

var mainApp = angular.module("mainApp", []);

mainApp.controller("diagnosticsController", function($scope, $http) {
    $scope.diagnostic = new Diagnostics("000", "Test", "random1", "random2", "random3", "random4", "random5", "random6");
});
