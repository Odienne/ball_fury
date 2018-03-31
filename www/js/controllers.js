angular.module('starter.controllers', [])

  .controller('AppCtrl', function ($scope, $ionicModal, $timeout) {

    // With the new view caching in Ionic, Controllers are only called
    // when they are recreated or on app start, instead of every page change.
    // To listen for when this page is active (for example, to refresh data),
    // listen for the $ionicView.enter event:
    //$scope.$on('$ionicView.enter', function(e) {
    //});

  })

  .controller('VibrateCtrl', function ($scope, vibrate) {
    $scope.vibrer = vibrate.vibration;
  })

  .controller('ToastCtrl', function ($scope, toast) {
    $scope.toast = toast.toasting;
    
  })
  .controller('ShareCtrl', function ($scope, share) {

    $scope.share = share.sharing;

  })

  .controller('MailCtrl', function ($scope, mail) {
    $scope.mail = mail.mailing;
  })

  

  .controller('DialogCtrl', function ($scope, dialog) {
    $scope.dialog = dialog.myPrompt;
    
  })

