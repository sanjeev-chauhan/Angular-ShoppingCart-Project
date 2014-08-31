'use strict';

/* App Module */
var myStoreApp = angular.module('myStoreApp', [
	'ngRoute',
	'ngResource',
	'ngAnimate',
	'myStoreControllers',
	'myStoreFilters',
	'myStoreServices'
]);

//My Store app Routing for showing different views
myStoreApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/home', {
        templateUrl: 'views/home-page.html',
        controller: 'homePageCtrl'
      }).
      when('/products/:category', {
        templateUrl: 'views/products-list.html',
        controller: 'productsListCtrl'
      }).
	 when('/product/detail/:productID', {
        templateUrl: 'views/product-detail.html',
        controller: 'productDetailCtrl'
      }).
	   otherwise({
        redirectTo: 'home'
      });
  }]);
