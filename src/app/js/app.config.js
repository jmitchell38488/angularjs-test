angular.module('app')
    .config(function($routeProvider) {
        'use strict';

        $routeProvider
            .when('/', {
                templateUrl: 'src/app/js/components/app.phones/partials/list.html',
                controller: 'app.phones.PhoneListController'
            })
            .otherwise({
                redirectTo: '/'
            });
    });