'use strict';

/* Controllers */

<<<<<<< HEAD
var appr = angular.module('appr.controllers', []);
=======
angular.module('appr.controllers', []).
  controller('formCtrl', [function() {
<<<<<<< HEAD
=======

  }])
  .controller('MyCtrl2', [function() {
>>>>>>> parent of 25d8c50... add content

  }])
  .controller('MyCtrl2', [function() {
>>>>>>> parent of 25d8c50... add content

appr.controller('roomCtrl', function($scope, $location, $timeout){
	$scope.alert = function(){
		alert('hello');
	};
	$scope.startTime;
	$scope.endTime;
	$scope.duringTime;
	function getDate(){
		var time = new Date();
		var dd = time.getDate();
		var mm = time.getMonth()+1; //January is 0!
		var yyyy = time.getFullYear();
		if(mm<10){mm='0'+mm};
		if(dd<10){dd='0'+dd};
		var today = dd+'.'+mm+'.'+yyyy;
		return today;
	};
	function getRoom(){
		var string = $location.path();
		string = string.replace('/','');
		return string;
	};
	function getTopic(){
		return "Eating peanuts";
	};
	function getStart(inte){
		$scope.startTime = inte;
		return 17+':00';
	};
	function getEnd(inte){
		$scope.endTime = inte;
		return 18+':00';
	};
	function getDuring(){
		$scope.duringTime = Math.abs($scope.startTime - $scope.endTime)+'h';
		return $scope.duringTime;
	};
	$scope.currTime = "";
	var getCurrTime = function(){
		var time = new Date();
		var hours = time.getHours();
		var minutes = time.getMinutes();
		var seconds = time.getSeconds();
		if(hours<10){hours='0'+hours};
		if(minutes<10){minutes='0'+minutes};
		if(seconds<10){seconds='0'+seconds};
		$scope.currTime = hours+':'+minutes+':'+seconds;
		$timeout(getCurrTime, 1000);
	};
	$scope.employees = [{name:'Max Havelaar'}, 
						{name:'Gertrud Rüdiger'},
						{name:'Fritz Vonstutz'}
						];

	function initData(){
		$scope.data = {
			date: getDate(),
			room: getRoom(),
			topic: getTopic(),
			start: getStart(17),
			end: getEnd(18),
			during: getDuring(),
			currTime: getCurrTime(),
		}
	};
	function __init(){
		initData();
	};

	__init();

});
