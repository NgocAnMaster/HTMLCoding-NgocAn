let app = angular.module("myApp",[]);
app.value("myClass","T2301E");
app.constant("myConstant", "FPT Aptech");
app.provider("myProvider", function (){
    this.$get = function (){
        return {
            testMyProvider : function (){
                return "Hello T2301E";
            }
        }
    }
})

app.service("myService", function (){
    this.myNameService = "My Service";
    this.myServiceFunc = function (a, b){
        return (a + b);
    }
})

app.factory("myFactory", function (){
    let myFactory = {};
    myFactory.myFactoryName = "My Factory";
    myFactory.myFactoryFunc = function (a, b){
        return (a + b);
    }
    return myFactory;
})

app.factory("myFactory1", function (){
    function Student(firstName, lastName, age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.changeFirstName = function (newFirstName){
            this.firstName = newFirstName;
        }
    }
    return Student;
})


app.controller("myController", function ($scope, myClass, myConstant, myProvider, myService, myFactory, myFactory1){
    $scope.myClass = myClass;
    $scope.myConstant = myConstant;
    $scope.myProvider = myProvider.testMyProvider();
    $scope.myNameService = myService.myNameService;
    $scope.total = myService.myServiceFunc(5, 10);
    $scope.myFactoryName = myFactory.myFactoryName;
    $scope.totalFactory = myFactory.myFactoryFunc(5, 20);

    let student = new myFactory1("T2301E", "FPT Aptech", 20);
    student.changeFirstName("Hello T2301E");
    $scope.student = student;

});