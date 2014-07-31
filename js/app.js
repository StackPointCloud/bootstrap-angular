//////////////////////////////////////
// APP Javascript  - Angular /////////
// Author: Ariel Jatib ///////////////
//////////////////////////////////////

'use strict';

// let's create the ng-app
var benben = angular.module('benben', [
  'ngRoute',
  'benbenControllers'
]);

// creating the routing
// for more info: https://code.angularjs.org/1.2.18/docs/tutorial/step_07
benben.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/theme', {
        templateUrl: 'partials/theme.html',
        controller: 'themeCtrl'
      }).
      when('/home', {
      	templateUrl: 'partials/home.html',
      	controller:  'homeCtrl' 
      }).
      when('/api', {
        templateUrl: 'partials/api.html',
        controller:  'apiSpecCtrl' 
      }).
      otherwise({
        redirectTo: '/api'
      });
  }]);