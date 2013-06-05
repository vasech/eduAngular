'use strict';


// Declare app level module which depends on filters, and services
angular.module('appr', ['appr.controllers', 'apprSrvc']).
  config(['$routeProvider', function($routeProvider) {
    $routeProvider.
    	when('/room0', {templateUrl: 'partials/room0.html', controller: 'roomCtrl'}).
    	when('/room1', {templateUrl: 'partials/room1.html', controller: 'roomCtrl'}).
    	when('/room2', {templateUrl: 'partials/room2.html', controller: 'roomCtrl'}).
    	when('/room3', {templateUrl: 'partials/room3.html', controller: 'roomCtrl'}).
    	otherwise({redirectTo: '/home'});
  }]);