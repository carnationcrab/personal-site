console.log('client connected');

var myApp = angular.module('myApp', ['ngRoute']);

// routes //
myApp.config(function ($routeProvider) {
    $routeProvider
        .when('/login', {
            templateUrl: '/views/templates/login.html',
            controller: 'LoginController as lc',
        })
        .when('/register', {
            templateUrl: '/views/templates/register.html',
            controller: 'LoginController as lc'
        })
        .when('/home', {
            templateUrl: '/views/templates/home.html',
            controller: 'HomeController as hc'
        })
        .when('/user', {
            templateUrl: '/views/templates/user.html',
            controller: 'UserController as uc',
            resolve: {
                getuser: function (UserService) {
                    return UserService.getuser();
                }
            }
        })
        .otherwise({
            redirectTo: '/home'
        });
})