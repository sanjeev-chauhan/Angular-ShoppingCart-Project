var myStore = (function(ang,windowElem) {
	var _scrollTopEnablePos = appConfig.scrollTopEnablePosition;
	
	return {
		scrolltTopToggle:function() {
			if(windowElem.pageYOffset > _scrollTopEnablePos ){
				scrollTopElement.removeClass("ng-hide");
			}
			else{
				scrollTopElement.addClass("ng-hide");
			}
		} ,
		scrollWindowToTop:function(){
			windowElem.scrollTo(windowElem.pageXOffset,0);
		}
	};
}(angular,this));

//Binding events on document content load
angular.element(document).ready(function(){
	scrollTopElement =  angular.element(document.getElementById("scrollTopControl"));
	
	angular.element(window).on("scroll resize", myStore.scrolltTopToggle);
	scrollTopElement.on("click", myStore.scrollWindowToTop);
});