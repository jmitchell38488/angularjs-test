/// <reference path='../../../_all.ts' />
var app;
(function (app) {
    var phones;
    (function (phones) {
        var module = angular.module('app.phones');
        module.config([
            '$locationProvider', '$routeProvider',
            function ($locationProvider, $routeProvider) {
                $locationProvider.hashPrefix('!');
                $routeProvider
                    .when('/phones', {
                    template: function () {
                        return '<phone-list></phone-list>';
                    },
                    controller: 'app.phones.PhoneListController'
                })
                    .when('/phones/:phoneId', {
                    template: function () {
                        return '<phone-details></phone-details>';
                    },
                    controller: 'app.phones.PhoneDetailsController'
                })
                    .otherwise({
                    redirectTo: '/phones'
                });
            }
        ]);
    })(phones = app.phones || (app.phones = {}));
})(app || (app = {}));
