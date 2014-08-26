'use strict';

/* App Module */

var myStoreApp = angular.module('myStoreApp', [
  'ngRoute',
  'ngResource',
  'ngAnimate',
  'myStoreControllers'
]);

myStoreApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/home', {
        templateUrl: 'views/home-page.html',
        controller: 'homePageCtrl'
      }).
      when('/products/:category', {
        templateUrl: 'views/products-list.html',
        controller: 'homePageCtrl'
      }).
      otherwise({
        redirectTo: 'home'
      });
  }]);
