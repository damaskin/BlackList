/**
 * Created by Ivan on 03.04.2015.
 */

var BlackList = angular.module('BlackList', [
    'ngRoute'
]);

BlackList.config(['$routeProvider', '$locationProvider',
    function($routeProvider, $locationProvider) {
        $locationProvider.html5Mode({
                enabled: true,
                requirebase: false
            }
        );

        $routeProvider.
            when('/', {
                templateUrl: 'pages/home.html',
                controller: 'BlackListCtrl'
            }).
            when('/about', {
                templateUrl: 'pages/about.html',
                controller: 'AboutCtrl'
            }).
            when('/contact', {
                templateUrl: 'pages/contact.html',
                controller: 'ContactCtrl'
            }).
            otherwise({
                redirectTo: '/'
            });
    }]);

