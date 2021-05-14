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
    // This code will send a update message to the server
    $scope.updateDiagnostic = function(code) {
        // This code will send update message to Diagnostics endpoint
        $http.put("/diagnostic/" + code).then(function(response) {
            $scope.diagnostic = new Diagnostics($scope.dianostic.Patient_ID, $scope.diagnostic.P_First_Name,$scope.diagnostic,P_Last_Name,$scope.diagnostic.Diagnosis, $scope.diagnostic.Drug_ID, $scope.diagnostic.Tests, $scope.diagnostic.Referal);
            // This code will refresh the list of Diagnostics after the request is completed
            $http.get("/diagnostics/").then(function(response) {
                $scope.diagnostics = response.data;
            });
        });
    };

    //This code will send delete request to the server
    $scope.deleteDiagnostic = function(code) {
        //sending a delete request to the server endpoint
        $http.delete("/diagnostic/" + code).then(function(response) {
            // this code will refresh the diagnostics list
            $http.get("/diagnostics/").then(function(response) {
                $scope.diagnostics = response.data;
            });
        });
    }; 
    //this code will send create request to the server
    $scope.createDiagnostic = function() {
        //sending a create request to the server endpoint
        $http.post("/diagnostics", $scope.new_diagnostic).then(function(response) {
            $scope.new_diagnostic = new Diagnostics("", "", "", "", "", "", "", "");
            $http.get("/diagnostics").then(function(response) { 
                $scope.diagnostics = response.data;
            });
        });
    };
});