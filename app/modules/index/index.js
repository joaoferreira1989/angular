'use strict';

angular.module('myApp.index', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/index', {
    templateUrl: 'modules/index/index.html',
    controller: 'IndexController'
  });
}])

.controller('IndexController', function IndexController($scope) {
    $scope.landingData = {
        name: 'Angular Application Prototype',
        date: new Date()
    };
});