"use strict";

// Get the mainApp
var mainApp = angular.module("mainApp", []);

// Create the controller
//mainApp.controller("volunteerController", function($scope, $http) {   //was programmeController
//  $scope.volunteers = [                      
//    new Volunteers("002", "John", "Smith","nurse", "English", "Tropical island") // was Programme
   
 // ];
//});

mainApp.controller("volunteerController", function($scope, $http) {
    //hides the 'selected' element first of all
    document.getElementById("selected").style.display="none";

    $http.get('/volunteers').then(function(response) {  
        $scope.volunteers = response.data;
    })

    $scope.selectVolunteer = function(ID) {
        //get specific volunteer by ID
       $http.get("/volunteer/" + ID).then(function(response){
           $scope.selectVolunteer= response.data;
            //show the 'selected element'
           document.getElementById("selected").style.display="block";
       });
   }
});