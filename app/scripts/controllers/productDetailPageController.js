'use strict';
//Product detail page controller
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
		};
		$scope.setActiveSize = function(size){
			$scope.activeSize = size;
		};
		$scope.setActiveColor = function(color){
			$scope.activeColor = color;
		};
	}
]);