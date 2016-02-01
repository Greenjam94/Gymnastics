var cogss = angular.module('cogss-ng-app', ['ngRoute']);

cogss.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider
            .when("/", {
                templateUrl: "/home/home.html"
            })

            .when("/help", {
                templateUrl: "/help/help.html"
            })

            .when("/login", {
                templateUrl: "/login/login.html"
            })

            .when("/:mid", {
                templateUrl: "/meet/meet.html"
            })

            .when("/:mid/settings", {
                templateUrl: "/meet/settings.html"
            })

            .when("/:mid/:tim", {
                templateUrl: "/gymnast/gymasts.html"
            });
    }
]);

cogss.controller("MainCtrl", ["$scope", "$http", function ($scope, $http) {
    "use strict";
    var main = this;
}]);