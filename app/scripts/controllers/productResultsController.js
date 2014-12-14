'use strict';
//Products results page controller
myStoreControllersModule.controller('productsListCtrl', ['$scope', '$http','$rootScope','$routeParams','Products',
	function($scope, $http, $rootScope,$routeParams,Products) {
		$rootScope.showBanner = false;//Hide the banner image
		$scope.category = {}, $scope.brand = {};
		$scope.searchType = $routeParams.category;
		//Fetch products list from Products Service to populate results
		Products.getProductsList().success(function(data, status, headers, config) {
			$scope.productsList = data;
		});
		
		//Function to set checkbox model property true or false in its parent obj when it is checked/unchecked, used for filtering
		$scope.setFilterBindingProp = function(event,itemObject){
			$scope[itemObject.dataBindingKey][itemObject.value] = event.target.checked;
		};
		
		$scope.filterCategories = [{dataBindingKey:"category", value:"Shirts"} , {dataBindingKey:"category", value:"Tshirts"} , 
			{dataBindingKey:"category", value:"Trousers"} ,{dataBindingKey:"category", value:"Jeans"} , {dataBindingKey:"category", value:"Shoes"}];
			
		$scope.filterBrand = [{dataBindingKey:"brand", value:"Even"} , {dataBindingKey:"brand", value:"Puma"} , 
			{dataBindingKey:"brand", value:"Breakbounce"}, {dataBindingKey:"brand", value:"Indian Terrain"},{dataBindingKey:"brand", value:"Mast & Harbour"}];
		
		//Set active product in rootScope, to be used for showing product details
		$scope.setActiveProduct = function(productObj) {
			$rootScope.activeProduct = productObj;
		};
	}
]);