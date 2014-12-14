'use strict';
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
		});
	}
]);