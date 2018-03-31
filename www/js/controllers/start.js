angular.module('starter')
    .controller('StartCtrl', function ($scope, $rootScope, score) {

        $scope.reset = score.reseting;
    })