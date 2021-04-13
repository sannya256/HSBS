"use strict";

var PDApp = angular.module("PDApp", []);

PDApp.controller("prescriptionsController", function($scope, $http) {
    $http.get('/prescriptions').then(function(response) {
        $scope.prescriptions = response.data;
    });
});