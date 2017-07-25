var app = angular.module("myTaskList", []); 
app.controller("myCtrl", function($scope) {
    $scope.tasks = ["Learn Angular 1.0", " Learn Node JS", "Learn Mongo DB"];
    $scope.addTask = function () {
        $scope.errortext = "";
        if (!$scope.addMe) {return;}
        if ($scope.tasks.indexOf($scope.addMe) == -1) {
            $scope.tasks.push($scope.addMe);
             $scope.addMe="";
        } else {
            $scope.errortext = "The item is already in your Task list.";
        }
    }
    $scope.removeTask = function (x) {
        alert("Wao! you have completed "+$scope.tasks[x]+" task. Currently you have only "+($scope.tasks.length - 1)+" task left in your task list" );
        $scope.errortext = "";    
        $scope.tasks.splice(x, 1);
    }

});