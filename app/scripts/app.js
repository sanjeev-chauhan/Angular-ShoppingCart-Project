'use strict';

/* App Module */

var myStoreApp = angular.module('myStoreApp', [
  'ngRoute',
  'ngResource',
  'ngAnimate',
  'ui.bootstrap',
  'myStoreControllers'
]);

myStoreApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/home', {
        templateUrl: 'views/home-page.html',
        controller: 'homePageCtrl'
      }).
      /*when('/phones/:phoneId', {
        templateUrl: 'partials/phone-detail.html',
        controller: 'PhoneDetailCtrl'
      }).*/
      otherwise({
        redirectTo: 'home'
      });
  }]);
