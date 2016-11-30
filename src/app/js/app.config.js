angular.module('app')
    .config(function($routeProvider) {
        'use strict';

        $routeProvider
            .when('/', {
                template: function() {
                    return '<phone-list></phone-list>'
                },
                controller: 'app.phones.PhoneListController'
            })
            .otherwise({
                redirectTo: '/'
            });
    });