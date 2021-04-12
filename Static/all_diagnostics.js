"use strict";

var mainApp = angular.module("PDApp", []);

PDApp.controller("diagnosticController", function($scope, $http) {
    $http.get('/diagnostics').then(function(response) {
        $scope.diagnostics = response.data;
    });
});
