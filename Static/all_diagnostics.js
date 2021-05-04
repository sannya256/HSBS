"use strict";

//const { Diagnostics } = require("../planetdoctor");

//This code will get "PDApp" from the webpage
var PDApp = angular.module("PDApp", []);

//This code creates the dignostics controller and requests diagnostics data from the backend    
PDApp.controller("diagnosticController", function($scope, $http) {
    //document.getElementById("selected").style.display = "none"

    //This coode will 
    $http.get('/diagnostics').then(function(response) {
        $scope.diagnostics = response.data; //linking the diagnostics json data
    });
    
    /*//The following codes will add user interactions
    //This code will send select request to the server
    $scope.selectDiagnostic = function(Patient_ID) {
        $http.get("/disgnostic/" + Patient_ID).then(function(response) {
            $scope.selectDiagnostic = response.data;
            //document.getElementById("selected").style.display = "block";
        });
    };*/
    //This code will send delete request to the server
    $scope.deleteDiagnostic = function(code) {
        //sending a delete request to the server using node
        $http.delete("/diagnostic/" + code).then(function(response) {
            // this code will refresh the diagnostics list
            $http.get("/diagnostics/").then(function(response) {
                $scope.diagnostics = response.data;
            });
        });
    }; 
    //this code will send create request to the server
    $scope.createDiagnostic = function() {
        $http.post("/diagnostics", $scope.new_diagnostic).then(function(response) {
            $scope.new_diagnostic = new Diagnostic("", "", "", "", "", "", "", "");
            $http.get("/diagnostics").then(function(response) { 
                $scope.diagnostics = response.data;
            });
        });
    };
});