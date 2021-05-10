"use strict";
// Get the mainApp
var mainApp = angular.module("mainApp", []);

mainApp.controller("volunteerController", function($scope, $http) {
    //hides the 'selected' element first of all
    document.getElementById("selected").style.display="none";

    $http.get('/volunteers').then(function(response) {  
        $scope.volunteers = response.data;
    });

    //Sends a delete message to the server
    $scope.deleteVolunteer = function(code) {
       //sends a delete message to /module/code
    $http.delete('/volunteer/' + code).then(function(response) {
           //when request completes, refresh list of modules
        $http.get('/volunteers').then(function(response) {
            $scope.volunteers = response.data;
            });
        });
    };

    //$scope.new_volunteer = new Volunteers("", "","","","","");

   // Sends a post message to the server
    $scope.createVolunteer= function() {
     // Send post message to /volunteers
        $http.post("/volunteers", $scope.new_volunteer).then(function(response) {
       // When request completes, reset new_volunteer
        $scope.new_volunteer = new Volunteers("", "","","", "", "");
       // Then refresh list of volunteers
        $http.get("/volunteers").then(function(response) {
            $scope.volunteers = response.data;
            });
        });
    };
    $scope.selectVolunteer = function(code) {
        // Get student by id
        $http.get("/volunteer/" + code).then(function(response) {
        $scope.Volunteer = response.data;
          // Show the selected element
        document.getElementById("selected").style.display="block";
        });
    }

     //Sends an update message to the server
   // $scope.updateVolunteer = function() {
        //sends a delete message to /module/code
   // $http.put('/volunteers', $scope.ud_volunteer).then(function(response) {
            //when request completes, refresh list of modules
    //$http.get('/volunteers').then(function(response) 
    //.then(function(response){
   // $scope.volunteers = response.data;
         //       });
     //       });
     //   };
    });







