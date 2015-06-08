'use strict';

angular.module('myApp').controller('TestCtrl', ['$scope', '$timeout', 'appHttp', 'UserModel', '$location', function($scope, $timeout, appHttp, UserModel, $location) {

	$scope.myImage='';

	//start crop image code
	$scope.myCroppedImage='';

	var handleFileSelect=function(evt) {
		var file=evt.currentTarget.files[0];
		var reader = new FileReader();
		reader.onload = function (evt) {
			$scope.$apply(function($scope){
				$scope.myImage=evt.target.result;
			});
		};
		reader.readAsDataURL(file);
	};
	angular.element(document.querySelector('#fileInput')).on('change',handleFileSelect);
	//end crop image code
	$scope.log = [];

	function logIt (text, params) {
		console.log('logIt: ' + text);
		$scope.log.push(text);
	}

	$scope.scopeOne = 'scope one';
	$scope.user = UserModel.load();
	
	$scope.swipeIt =function(evt, direction, params) {
		logIt('swipe: '+direction);
	};
	
	$scope.tapIt =function(evt, params) {
		logIt('tap');
	};

}]);