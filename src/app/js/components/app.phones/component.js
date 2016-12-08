/// <reference path='../../_all.ts' />
var app;
(function (app) {
    var phones;
    (function (phones) {
        var module = angular.module('app.phones');
        module.service('app.phones.PhoneRefDataService', [
            '$rootScope', '$http', '$q',
            function ($rootScope, $http, $q) { return new phones.PhoneRefDataService($rootScope, $http, $q); }
        ]);
        module.controller('app.phones.PhoneListController', [
            '$rootScope', 'app.phones.PhoneRefDataService',
            function ($rootScope, IPhoneRefDataService) { return new phones.PhoneListController($rootScope, IPhoneRefDataService); }
        ]);
        module.controller('app.phones.PhoneDetailsController', [
            '$routeParams', 'app.phones.PhoneRefDataService', '$location',
            function ($routeParams, IPhoneRefDataService, $location) {
                return new phones.PhoneDetailsController($routeParams, IPhoneRefDataService, $location);
            }
        ]);
    })(phones = app.phones || (app.phones = {}));
})(app || (app = {}));
