'use strict';

/* My Store app Controllers */
var myStoreControllersModule = angular.module('myStoreControllers', ['ui.bootstrap', 'ngAnimate']);

//Home page controller
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

//Products List page controller
myStoreControllersModule.controller('productsListCtrl', ['$scope', '$http','$rootScope','Products',
	function($scope, $http, $rootScope,Products) {
	$rootScope.showBanner = false;//Hide the banner image
	$scope.category = {}, $scope.brand = {};
	/*$http({method: 'GET', url: 'static/json/products-list.json'}).
	success(function(data, status, headers, config) {
		$scope.productsList = data;
	})*/
	//Fetch products list from Products Service to populate results
	Products.getProductsList().success(function(data, status, headers, config) {
		$scope.productsList = data;
	});
	
	//Function to set checkbox model property true or false in its parent obj when it is checked/unchecked, used for filtering
	$scope.setFilterBindingProp = function(event,itemObject){
		$scope[itemObject.dataBindingKey][itemObject.value] = event.target.checked;
	}
	
	$scope.filterCategories = [{dataBindingKey:"category", value:"Shirts"} , {dataBindingKey:"category", value:"Tshirts"} , 
		{dataBindingKey:"category", value:"Trousers"} ,{dataBindingKey:"category", value:"Jeans"} , {dataBindingKey:"category", value:"Shoes"}];
		
	$scope.filterBrand = [{dataBindingKey:"brand", value:"Even"} , {dataBindingKey:"brand", value:"Puma"} , 
		{dataBindingKey:"brand", value:"Breakbounce"}, {dataBindingKey:"brand", value:"Indian Terrain"},{dataBindingKey:"brand", value:"Mast & Harbour"}];
	
	//Set active product in rootScope, to be used for showing product details
	$scope.setActiveProduct = function(productObj) {
		$rootScope.activeProduct = productObj;
    }
}]);

//Product Detail page controller
myStoreControllersModule.controller('productDetailCtrl', ['$scope','$http','$routeParams','$rootScope','Products',
  function($scope,$http,$routeParams,$rootScope,Products) {
	$scope.activeProduct =  $rootScope.activeProduct;//Store active product model object from Root Scope
	
	//If active product not set then fetch products list from Products Service and set active product after matching productId from URL
	if(!$scope.activeProduct){
	Products.getProductsList().success(function(data, status, headers, config) {
		for(var i in data){
			if($routeParams.productID === data[i].productId){
				$scope.activeProduct = data[i];
			}
		}
	});
		/*$http({method: 'GET', url: 'static/json/products-list.json'}).
		success(function(data, status, headers, config) {
			for(var i in data){
				if($routeParams.productID === data[i].productId){
					$scope.activeProduct = data[i];
				}
			}
		})*/
	}
}]);