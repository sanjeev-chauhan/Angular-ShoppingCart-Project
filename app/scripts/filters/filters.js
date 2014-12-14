'use strict';

/* My Store app Filters */
var myStoreFiltersModule = angular.module('myStoreFilters', []);

myStoreFiltersModule.filter('productFilter', function() {
	return function (productsList, bindingObj , propertyToMatch) {
		var self = this, filteredList = [] , anyfilterSet = false ;
		self.objPropToMatch = propertyToMatch; //The object property to be used for filter match
		//If bindingObj is defined, then check if any filter has been set
		if(bindingObj){
			for(var i in bindingObj){
				if(bindingObj[i]){
					anyfilterSet = true;
				}
			}
		}
		if(anyfilterSet){
			angular.forEach(productsList, function (value, key) {
				if (bindingObj[value[self.objPropToMatch]] === true) {
					filteredList.push(value);
				}
			}, self);
		}
		else{
			filteredList = productsList;
		}
		return filteredList;
    };
});
