angular.module('starter')
    .controller('EndCtrl', function ($scope, $rootScope, share, mail, score) {

        $scope.mail = mail.mailing;
        $scope.share = share.sharing;
        $scope.reset = score.reseting;
    })