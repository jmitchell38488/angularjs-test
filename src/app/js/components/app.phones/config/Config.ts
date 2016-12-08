/// <reference path='../../../_all.ts' />

namespace app.phones {

    var module: angular.IModule = angular.module('app.phones');

    module.config([
        '$locationProvider', '$routeProvider',
        ($locationProvider: ng.ILocationProvider, $routeProvider: ng.route.IRouteProvider) => {
            $locationProvider.hashPrefix('!');

            $routeProvider
                .when('/phones', {
                    template: () => {
                        return '<phone-list></phone-list>'
                    },
                    controller: 'app.phones.PhoneListController'
                })
                .when('/phones/:phoneId', {
                    template: () => {
                        return '<phone-details></phone-details>'
                    },
                    controller: 'app.phones.PhoneDetailsController'
                })
                .otherwise({
                    redirectTo: '/phones'
                });
        }
    ]);
}


