
let app = angular.module("myApp",[]);
app.controller("firstController", myController);
function myController($scope, $http){
    $scope.name = "";
    $scope.className = "";
    $scope.count = 0;
    let students = ['Michael Jackson', 'Lady Gaga', 'Britney Spears', 'Taylor Swift'];
    $scope.students = students;
    let productArr = [{name:"IphoneX",price:1000, createdAt: new Date('02/20/2020')},
        {name:"IphoneXS",price:5000, createdAt: new Date('09/10/2021')},
        {name:"Iphone12",price:14000, createdAt: new Date('03/20/2020')},
        {name:"Iphone13",price:70000, createdAt: new Date('04/01/2017')},
        {name:"Iphone14ProMax",price:120000, createdAt: new Date('01/05/2019')},
        {name:"SamsungGalaxyS20",price:5000, createdAt: new Date('01/15/2020')},
        {name:"IphoneXS",price:5000, createdAt: new Date('06/25/2018')},
        {name:"Nokia",price:2000, createdAt: new Date('04/20/2020')},
        {name:"LG",price:40000, createdAt: new Date('05/20/2020')}
    ];
    $scope.length = productArr.length;
    $scope.products = productArr;
    let limit = 5;
    let offset = 0;
    if(offset>productArr.length){
        offset = 0;
    }else if(offset<0){
        offset=productArr.length;
    }
    $scope.limit = limit;
    $scope.offset = offset;
    let std1 = {name:"Le Ngoc An", className :"T2301E"};
    $scope.std1 = std1;

    let data;
    $http.get("JSON/studentData.json").then(function (response){
        data = response.data;
        $scope.studentListNames = data.T2301E1;
        $scope.changeList = function (list){
            if (list == "T2301E1"){
                $scope.studentListNames = data.T2301E1;
            }else if (list == "T2301E2"){
                $scope.studentListNames = data.T2301E2;
            }
        }
    })
}
