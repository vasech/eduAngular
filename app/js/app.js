'use strict';


// Declare app level module which depends on filters, and services
angular.module('appr', ['appr.filters', 'appr.services', 'appr.directives', 'appr.controllers']).
  config(['$routeProvider', function($routeProvider) {
    $routeProvider.
    	when('/form', {templateUrl: 'partials/form.html', controller: 'formCtrl'}).
    	when('/view2', {templateUrl: 'partials/partial2.html', controller: 'MyCtrl2'}).
    	otherwise({redirectTo: '/home'});
  }]);