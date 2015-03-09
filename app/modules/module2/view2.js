'use strict';

angular.module('myApp.module2', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/module2', {
    templateUrl: 'modules/module2/view2.html',
    controller: 'View2Controller'
  });
}])

.controller('View2Controller', [function() {

}]);