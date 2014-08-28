'use strict';

/* Controllers */

var myStoreControllers = angular.module('myStoreControllers', ['ui.bootstrap', 'ngAnimate']);

/*myStoreControllers.controller('headerCtrl', ['$scope','$animate','$rootScope',
  function($scope, $animate, $rootScope) {
	$rootScope.showBanner = true;
}]);*/

myStoreControllers.controller('homePageCtrl', ['$scope', '$http','$animate','$rootScope',
  function($scope, $http, $animate,$rootScope) {
	$scope.latestCollection = [];
	$scope.carouselInterval = 3000;
	$rootScope.showBanner = true;
	$scope.showBanner = true;
	$animate.enabled(false,angular.element(document.getElementsByClassName("latestCollectionCarousel")));//Disabling angular animation on carousel as it causes isses with sliding
	$http({method: 'GET', url: 'static/json/latest.json'}).
	success(function(data, status, headers, config) {
		$scope.latestCollection = data;
	})
}]);

myStoreControllers.controller('productsListCtrl', ['$scope', '$http','$rootScope',
  function($scope, $http, $rootScope) {
	$rootScope.showBanner = false;//Hide the banner image
	//Fetch products list json to populate results
	$http({method: 'GET', url: 'static/json/products-list.json'}).
	success(function(data, status, headers, config) {
		$scope.productsList = data;
	})
	$scope.filterCategories = ["Shirts" , "Tshirts" ,"Trousers" ,"Jeans" , "Shoes"];
	$scope.filterBrand = ["Even" ,"Kook N Keech Marvel" ,"Breakbounce" , "White Kalia"];
	$scope.setImage = function(imageUrl) {
		$scope.mainImageUrl = imageUrl;
    }
}]);
