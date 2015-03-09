'use strict';

angular.module('myApp.module1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/module1', {
    templateUrl: 'modules/module1/view1.html',
    controller: 'View1Controller'
  });
}])

.controller('View1Controller', [function() {

}]);