let app = angular.module("myApp",["ngRoute"]);
app.config(function ($routeProvider){
    $routeProvider.when("/rome",{
        templateUrl:"Rome.html"
    }).when("/paris",{
        templateUrl:"Paris.html"
    }).when("/london",{
        templateUrl:"London.html"
    })
})
app.controller("romeController", function ($scope, $http){
    $http.get("ProfileData.json").then(function (response){
        $scope.romeList = response.data.rome;
    })
})
app.controller("parisController", function ($scope, $http){
    $http.get("ProfileData.json").then(function (response){
        $scope.parisList = response.data.paris;
    })
})
app.controller("londonController", function ($scope, $http){
    $http.get("ProfileData.json").then(function (response){
        $scope.londonList = response.data.london;
    })
})
app.controller("mainController", function ($scope){
    $scope.display = function (x){
        if(x=="rome"){
            return "rome";
        }else if(x=="paris"){
            return "paris";
        }else if(x=="london"){
            return "london";
        }
    }
})
app.directive("parisDirective", function (){
    return {
        restrict :'EA',
        template : 'Paris.html'
    }
})
app.controller("allController", function ($scope, $http){
    let employee;
    $http.get("ProfileData.json").then(function (response){
        employee = response.data;
        $scope.list = employee.rome;
        $scope.switch = function (list){
            if (list == "rome"){
                $scope.list = employee.rome;
            }else if (list == "paris"){
                $scope.list = employee.paris;
            }else if (list == "london"){
                $scope.list = employee.london;
            }
        }
    })
})