"use strict";
// Get the mainApp
var mainApp = angular.module("mainApp", []);

mainApp.controller("volunteerController", function($scope, $http) {
    //hides the 'selected' element first of all
    document.getElementById("selected").style.display="none";

    $http.get('/volunteers').then(function(response) { 
        console.log('after initial get from loading page - response paramter:', response, 'response.dat:',response.data)
        $scope.volunteers = response.data;
    });

    //Sends a delete message to the server
    $scope.deleteVolunteer = function(code) {
        console.log('av.js  deleteVolunteer function parameter', code)
       //sends a delete message to /module/code
    $http.delete('/volunteer/' + code).then(function(response) {
        console.log( 'av.js del respsonse after delete',response, 'response.data:', response.data)
           //when request completes, refresh list of modules
        $http.get('/volunteers').then(function(response) {
            console.log( 'av.js get after del respsonse',response,'repsonse.data:' ,response.data)

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
        console.log('av.js  selectVolunteer function parameter', code)
        // Get student by id
        $http.get("/volunteer/" + code).then(function(response) {
        $scope.Volunteer = response.data;
        console.log( 'av.js get after select respsonse',response)
          // Show the selected element
       document.getElementById("selected").style.display="block";
        });
    }

     $scope.updateVolunteer = function(code) {
        //var codey = new Volunteers($scope.Volunteer.ID, $scope.Volunteer.First_Name,$scope.Volunteer.Last_Name,$scope.Volunteer.Nationality, $scope.Volunteer.Profession, $scope.Volunteer.camp_loc);
     $http.put('/volunteer/3', code).then(function(response) { 
      //  var codey = new Volunteers($scope.Volunteer.ID, $scope.Volunteer.First_Name,$scope.Volunteer.Last_Name,$scope.Volunteer.Nationality, $scope.Volunteer.Profession, $scope.Volunteer.camp_loc);
        $scope.Volunteer = new Volunteers($scope.Volunteer.ID, $scope.Volunteer.First_Name,$scope.Volunteer.Last_Name,$scope.Volunteer.Nationality, $scope.Volunteer.Profession, $scope.Volunteer.camp_loc);
        $http.get("/volunteer/3").then(function(response) {
        $scope.Volunteer = response.data;
        });
    });
     };
    });







