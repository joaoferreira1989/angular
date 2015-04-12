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

    $scope.users = [
        {
            id: 1,
            type: 1,
            name: "name1"
        },
        {
            id: 2,
            type: 2,
            name: "name2"
        },
        {
            id: 3,
            type: 2,
            name: "name3"
        }
    ];
});