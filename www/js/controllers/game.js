angular.module('starter')
    .controller('GameCtrl', function ($scope, $timeout, $location, $rootScope, vibrate) {

        $rootScope.points = 0;

        $scope.addpoints = function (number) {
            $rootScope.points += number;
        }

        $scope.maluspoints = function (number) {
            $rootScope.points -= number;
        }

        $scope.init = function () {
            $scope.currentTime = 8;
            $rootScope.points = 0;
        }

        $scope.$on('$stateChangeSuccess', function (event, toState, toParams, fromState, fromParams) {
            if (toState.name == "app.game") {
                $scope.init();
            }
        });

        $scope.loop = function () {
            
            $timeout(function () { $scope.loop() }, 1000);
            $scope.currentTime -= 1;

            if ($scope.currentTime == 0) {
                vibrate.vibration();
                window.location.href = '#/app/end';
            }
        }

        $scope.loop();

    })