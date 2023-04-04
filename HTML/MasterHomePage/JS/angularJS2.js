let app = angular.module("myApp",[]);
app.controller("formController", function ($scope){
    let name = "";
    let email = "";
    let phone = "";
    let age = "";
    $scope.name = name;
    $scope.email = email;
    $scope.phone = phone;
    $scope.age = age;
    $scope.pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    $scope.patternNumber = /^\d*$/;

    $scope.submitForm = function (){
        name = $scope.name;
        email = $scope.email;
        phone = $scope.phone;
        age = $scope.age;
        $scope.message = "Info submitted:";
    }
    // $scope.submitConfirmation = function (event) {
    //     event.preventDefault();
    //     // other stuff
    // }
});