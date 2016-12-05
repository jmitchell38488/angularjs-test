'use strict';

angular.module('app.phones', ['ngResource', 'ngRoute'])
       .config([
           '$locationProvider', '$routeProvider',
           function ($locationProvider, $routeProvider) {
               $locationProvider.hashPrefix('!');

               $routeProvider
                   .when('/phones', {
                       template: function() {
                           return '<phone-list></phone-list>'
                       },
                       controller: 'app.phones.PhoneListController'
                   })
                   .when('/phones/:phoneId', {
                       template: function() {
                           return '<phone-details></phone-details>'
                       },
                       controller: 'app.phones.PhoneDetailsController'
                   })
                   .otherwise({
                       redirectTo: '/phones'
                   });
           }
       ]);