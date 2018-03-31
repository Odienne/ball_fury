angular.module('starter')
    .service('mail', function ($rootScope) {
        scope = this;
        
        scope.mailing = function (sujet, msg) {
            
            cordova.plugins.email.open({
                subject: 'Viens jouer !',
                body: 'Salut, viens essayer de battre mon score ('+$rootScope.points+')'
            });
        };
    });