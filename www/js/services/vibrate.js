angular.module('starter')
    .service('vibrate', function () {
        scope = this;

        scope.vibration = function () {
            navigator.vibrate(1500);   
        };
});