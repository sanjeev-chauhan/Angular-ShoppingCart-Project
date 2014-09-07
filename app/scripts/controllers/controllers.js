'use strict';

/* My Store app Controllers */
var myStoreControllersModule = angular.module('myStoreControllers', ['ui.bootstrap', 'ngAnimate']);

//Top header controller
myStoreControllersModule.controller('headerCtrl', ['$scope', '$http','$animate','$rootScope',
	function($scope, $http, $animate,$rootScope) {
		$scope.showSearchBox = false;
		$scope.toggleSearchBox = function(event, show){
			$scope.showSearchBox = show;
			event.stopPropagation();
		}
		$rootScope.showBanner = true;
		$scope.productSearchResults = ["Men", "Women", "Kid", "Shoes", "Shirt", "Tshirt", "Jeans" ,"Dresses", "Kurta","Trousers" ,"Puma","Nike",
		"Adidas", "Levi", "Indian Terrain"]
	}
]);

//Home page controller
myStoreControllersModule.controller('homePageCtrl', ['$scope', '$http','$animate','$rootScope',
	function($scope, $http, $animate,$rootScope) {
		$rootScope.showBanner = true;
		$scope.latestCollection = [] ;
		$scope.carouselInterval = appConfig.carouselSlideDuration;
		
		//Disabling angular animation on carousel as it causes isses with sliding
		$animate.enabled(false,angular.element(document.getElementsByClassName("latestCollectionCarousel")));
		
		$http({method: 'GET', url: 'static/json/latest.json'}).
		success(function(data, status, headers, config) {
			$scope.latestCollection = data;
		})
	}
]);

//Products List page controller
myStoreControllersModule.controller('productsListCtrl', ['$scope', '$http','$rootScope','Products',
	function($scope, $http, $rootScope,Products) {
		$rootScope.showBanner = false;//Hide the banner image
		$scope.category = {}, $scope.brand = {};

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
	}
]);

//Product Detail page controller
myStoreControllersModule.controller('productDetailCtrl', ['$scope','$http','$routeParams','$rootScope','Products',
	function($scope,$http,$routeParams,$rootScope,Products) {
	$scope.activeSize = "";
		if($scope.activeProduct){
			$scope.activeProduct =  $rootScope.activeProduct;//Store active product model object from Root Scope
			$scope.activeThumbnail = $scope.activeProduct.imageUrl;
		}
		else{//If active product not set then fetch products list from Products Service 
			Products.getProductsList().success(function(data, status, headers, config) {
				for(var i in data){
				//Set active product after matching productId from URL using $routeParams
					if($routeParams.productID === data[i].productId){
						$scope.activeProduct = data[i];
						$scope.activeThumbnail = $scope.activeProduct.imageUrl;
					}
				}
			});
		}
		$scope.setActiveImage = function(imageUrl){
			$scope.activeThumbnail = imageUrl;
		}
		$scope.setActiveSize = function(size){
			$scope.activeSize = size;
		}
		$scope.setActiveColor = function(color){
			$scope.activeColor = color;
		}
	}
]);