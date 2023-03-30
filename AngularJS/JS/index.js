
let app = angular.module("myApp",[]);
app.controller("firstController", myController);
function myController($scope){
    $scope.name = "Nguyen Van A";
    $scope.className = "T2301E";
    $scope.count = 0;
	let students = ['Nguyen Van A', 'Nguyen Van B', 'Nguyen Van C'];
	$scope.students = students;
    let productArr = [{name:"IphoneX",price:1000, createdAt: new Date('02/20/2020')},
        {name:"IphoneXS",price:5000, createdAt: new Date('03/20/2020')},
        {name:"Nokia",price:2000, createdAt: new Date('04/20/2020')},
        {name:"SamSung",price:40000, createdAt: new Date('05/20/2020')}
    ];
    $scope.products = productArr;
    let std1 = {name:"Nguyen Van A", className :"T2301E"};
    $scope.std1 = std1;
}