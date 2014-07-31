//////////////////////////////////////
// AngularJS - Controllers  //////////
// Author: Ariel Jatib ///////////////
//////////////////////////////////////

var benbenControllers = angular.module('benbenControllers',[]);

// spike to grab some dummy .json
benben.controller('homeCtrl', function($scope, $http){
    console.log('let\'s load some data!');
    uri = '/data/test.json';
    $http.get(uri, $scope.lorem)
    	.success(function(data){
    		console.log('grabbin some data')
    		$scope.lorem = data;
    		console.log('got the data', $scope.lorem);
    	}).
    	error(function(){
    		console.log('oops - something went wrong')
    	})
});

// spike to grab and render nested navigation, 
// beginning to lay out the document template
benben.controller('apiSpecCtrl', function($scope, $http){
    console.log('let\'s load some data!');
    uri = '/data/apispec.json';
    $http.get(uri, $scope.apiSpec)
    	.success(function(data){
    		console.log('grabbing the data')
    		$scope.apiSpec = data;
    		console.log('got the data', $scope.apiSpec);
    	}).
    	error(function(){
    		console.log('oops - something went wrong')
    	})
});

benben.controller('themeCtrl', [function(){
    console.log('theme')
}]);