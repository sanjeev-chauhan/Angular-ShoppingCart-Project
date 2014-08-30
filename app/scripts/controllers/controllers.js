'use strict';

/* Controllers */

var myStoreControllersModule = angular.module('myStoreControllers', ['ui.bootstrap', 'ngAnimate']);

/*myStoreControllers.controller('headerCtrl', ['$scope','$animate','$rootScope',
  function($scope, $animate, $rootScope) {
	$rootScope.showBanner = true;
}]);*/

myStoreControllersModule.controller('homePageCtrl', ['$scope', '$http','$animate','$rootScope',
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

myStoreControllersModule.controller('productsListCtrl', ['$scope', '$http','$rootScope',
  function($scope, $http, $rootScope) {
	$rootScope.showBanner = false;//Hide the banner image
	//Fetch products list json to populate results
	$http({method: 'GET', url: 'static/json/products-list.json'}).
	success(function(data, status, headers, config) {
		$scope.productsList = data;
	})
	$scope.category ={};
	$scope.filterCategories = [{dataBindingKey:"category.Shirts", value:"Shirts"} , {dataBindingKey:"category.Tshirts", value:"Tshirts"} , 
		{dataBindingKey:"category.Trousers", value:"Trousers"} ,{dataBindingKey:"category.Jeans", value:"Jeans"} , {dataBindingKey:"category.Shoes", value:"Shoes"}];
	$scope.filterBrand = ["Even" ,"Kook N Keech Marvel" ,"Breakbounce" , "White Kalia"];
	$scope.setImage = function(imageUrl) {
		$scope.mainImageUrl = imageUrl;
    }
}]);
