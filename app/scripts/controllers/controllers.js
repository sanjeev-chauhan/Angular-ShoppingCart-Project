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
	$scope.category = {};
	$scope.brand = {};
	
	//Function to set checkbox model property true or false in its parent obj when it is checked/unchecked
	$scope.setFilterBindingProp = function(event,itemObject){
		$scope[itemObject.dataBindingKey][itemObject.value] = event.target.checked;
	}
	
	$scope.filterCategories = [{dataBindingKey:"category", value:"Shirts"} , {dataBindingKey:"category", value:"Tshirts"} , 
		{dataBindingKey:"category", value:"Trousers"} ,{dataBindingKey:"category", value:"Jeans"} , {dataBindingKey:"category", value:"Shoes"}];
		
	$scope.filterBrand = [{dataBindingKey:"brand", value:"Even"} , {dataBindingKey:"brand", value:"Puma"} , 
		{dataBindingKey:"brand", value:"Breakbounce"}, {dataBindingKey:"brand", value:"Indian Terrain"}];
	
	$scope.setImage = function(imageUrl) {
		$scope.mainImageUrl = imageUrl;
    }
}]);
