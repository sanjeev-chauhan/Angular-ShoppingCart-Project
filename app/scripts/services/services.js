'use strict';

/* My Store app  Services */
var myStoreServicesModule = angular.module('myStoreServices', ['ngResource']);

myStoreServicesModule.factory('Products', ['$http',
	function($http){
		//Service to fetch products list
		function getProductsCall(){
			var request = $http({method: 'GET', url: 'static/json/products-list.json'});
			return request;
		}
		return {
			 getProductsList: getProductsCall
		};
	}]);
