"use strict";

//This code will get "PDApp" from the webpage
var PDApp = angular.module("PDApp", []);

//This code creates the dignostics controller and requests diagnostics data from the backend    
PDApp.controller("diagnosticController", function($scope, $http) {
    //document.getElementById("selected").style.display = "none"

    $http.get('/diagnostics').then(function(response) {
        $scope.diagnostics = response.data; //linking the diagnostics json data
    });
});

//The following code will add user interactions

    $scope.selectDiagnostic = function(Patient_ID) {
        $http.get("/disgnostic/" + Patient_ID).then(function(response) {
            $scope.selectDiagnostic = response.data;
            document.getElementById("selected").style.display = "block";
        });
    };

    $scope.deleteDiagnostic = function(code) {
        //sending a delete request to the server using node
        $http.delete("/diagnostic/" + code).then(function(response) {
            // this code will refresh the diagnostics list
            $http.get("/diagnostics/").then(function(response) {
                $scope.Diagnostics = response.data;
            });
        });
    }; 