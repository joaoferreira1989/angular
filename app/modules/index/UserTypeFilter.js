'use strict';

angular.module('myApp.index').filter('userType', function() {
    return function (typeId) {
         switch (typeId){
             case 1:
                return "Administrador";
             case 2:
                 return "Visitante";
             default :
                 return "unknown user type";
         }
    };
});