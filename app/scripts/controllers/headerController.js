'use strict';
//Top header controller
myStoreControllersModule.controller('headerCtrl', ['$scope', '$http','$animate','$rootScope',
	function($scope, $http, $animate,$rootScope) {
		$scope.showSearchBox = false;
		$scope.toggleSearchBox = function(event, show){
			$scope.showSearchBox = show;
			event.stopPropagation();
		}
		$rootScope.showBanner = true;
		$scope.productSearchResults = ["Men", "Women", "Kid", "Shoes", "Shirts", "Tshirts", "Jeans" ,"Dresses", "Kurta","Trousers" ,"Puma","Nike",
		"Adidas", "Levi", "Indian Terrain"]
	}
]);