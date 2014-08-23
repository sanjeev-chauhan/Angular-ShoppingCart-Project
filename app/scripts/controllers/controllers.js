'use strict';

/* Controllers */

var myStoreControllers = angular.module('myStoreControllers', []);

myStoreControllers.controller('homePageCtrl', ['$scope', 
  function($scope) {
    //$scope.phones = Phone.query();
	 $scope.trendingProductsList = 'age';
    //$scope.orderProp = 'age';
  }]);

/*phonecatControllers.controller('PhoneDetailCtrl', ['$scope', '$routeParams', 'Phone',
  function($scope, $routeParams, Phone) {
    $scope.phone = Phone.get({phoneId: $routeParams.phoneId}, function(phone) {
      $scope.mainImageUrl = phone.images[0];
    });

    $scope.setImage = function(imageUrl) {
      $scope.mainImageUrl = imageUrl;
    }
  }]);*/
