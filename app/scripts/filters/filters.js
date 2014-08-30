'use strict';

/* Filters */

var myStoreFiltersModule = angular.module('myStoreFilters', []);

myStoreFiltersModule.filter('genderFilter', function() {
	return function (productsList, gender , propertyToMatch) {
		var self = this, filteredList = [] , anyfilterSet = false ;
		self.objPropToMatch = propertyToMatch; //The object property to be used for filter match
		//If gender is defined, then check if any filter has been set
		if(gender){
			for(var i in gender){
				if(gender[i]){
					anyfilterSet = true;
				}
			}
		}
		if(anyfilterSet){
			angular.forEach(productsList, function (value, key) {
				if (gender[value[self.objPropToMatch]] === true) {
					filteredList.push(value);
				}
			}, self)
		}
		else{
			filteredList = productsList;
		}
		return filteredList;
    };
});
