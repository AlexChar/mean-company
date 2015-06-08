'use strict';

describe('TestCtrl', function(){
	var $ctrl, $scope ={}, UserModel;
	
	beforeEach(module('myApp'));
	
	beforeEach(inject(function(_$rootScope_, _$controller_, _UserModel_) {
		$scope = _$rootScope_.$new();
		$ctrl = _$controller_('TestCtrl', {$scope: $scope});
		UserModel = _UserModel_;
	}));

	function setUser (params) {
		var user = {
			_id: 'userid11'
		};
		UserModel.save(user);
		return user;
	}
	
	it('should have no user if not saved', function() {
		expect($scope.user._id).toBe(false);
	});

	it('should have a valid user if saved', function () {
		var user = setUser({});
		expect($scope.user._id).toBe(user._id);
	});
});