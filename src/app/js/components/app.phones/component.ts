/// <reference path='../../_all.ts' />

namespace app.phones {

    var module: angular.IModule = angular.module('app.phones');

    module.service('app.phones.PhoneRefDataService', [
        '$rootScope','$http','$q',
        ($rootScope, $http, $q) => new PhoneRefDataService($rootScope, $http, $q)
    ]);

    module.controller('app.phones.PhoneListController', [
        '$rootScope','app.phones.PhoneRefDataService',
        ($rootScope, IPhoneRefDataService) => new PhoneListController($rootScope, IPhoneRefDataService)
    ]);

    module.controller('app.phones.PhoneDetailsController', [
        '$routeParams', 'app.phones.PhoneRefDataService', '$location',
        ($routeParams, IPhoneRefDataService, $location) =>
            new PhoneDetailsController($routeParams, IPhoneRefDataService, $location)
    ]);

}