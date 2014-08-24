'use strict';

/* Controllers */

var myStoreControllers = angular.module('myStoreControllers', ['ui.bootstrap']);

myStoreControllers.controller('homePageCtrl', ['$scope', '$http',
  function($scope, $http) {
	$scope.latestCollection = [];
	 
	$http({method: 'GET', url: 'static/json/latest.json'}).
	success(function(data, status, headers, config) {
	  $scope.latestCollection = data;
	})
		
  }]);

/*phonecatControllers.controller('PhoneDetailCtrl', ['$scope', '$routeParams', 'Phone',
  function($scope, $routeParams, Phone) {
    $scope.phone = Phone.get({phoneId: $routeParams.phoneId}, function(phone) {
      $scope.mainImageUrl = phone.images[0];
    });

    $scope.setImage = function(imageUrl) {
      $scope.mainImageUrl = imageUrl;
    }
  }]);*/
