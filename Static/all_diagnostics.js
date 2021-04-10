"use strict";

var mainApp = angular.module("PDApp", []);

PDApp.controller("diagnosticsController", function($scope, $http) {
    $http.get("/diagnostics").then(function(response) {
        $scope.diagnostics = response.data;
    });
});
