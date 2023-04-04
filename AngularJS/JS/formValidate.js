let app = angular.module("myApp",[]);
app.controller("formController", function ($scope){
    $scope.pattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;
    $scope.submitForm = function (){
        $scope.message = "send info success";
    }
    $scope.submitConfirmation = function (event) {
        event.preventDefault();
        // other stuff
    }
});