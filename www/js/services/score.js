angular.module('starter')
    .service('score', function ($rootScope) {
        scope = this;
        
        scope.reseting = function () {
            $rootScope.points = 0;
        }
    });

