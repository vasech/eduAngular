'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.

var appr = angular.module('apprSrvc', []).factory('room', function(){
  console.log("he");
  return "hello";
});