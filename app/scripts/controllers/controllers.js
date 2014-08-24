'use strict';

/* Controllers */

var myStoreControllers = angular.module('myStoreControllers', ['ui.bootstrap', 'ngAnimate']);

myStoreControllers.controller('homePageCtrl', ['$scope', '$http','$animate',
  function($scope, $http, $animate) {
	$scope.latestCollection = [];
	$scope.carouselInterval = 3000;
	$animate.enabled(false,angular.element(document.getElementsByClassName("latestCollectionCarousel")));//Disabling angular animation on carousel as it causes isses with sliding
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
