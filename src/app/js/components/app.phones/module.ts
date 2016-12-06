/// <reference path='../../_all.ts' />

angular.module('app.phones', ['ngResource', 'ngRoute', 'ngAnimate'])
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
    ])
    .filter('checkmark', function() {
        return function(input) {
            return input ? '\u2713' : '\u2718';
        };
    })
    .animation('.phone', function phoneAnimationFactory() {
        return {
            addClass: animateIn,
            removeClass: animateOut
        };

        function animateIn(element, className, done) {
            if (className !== 'selected') {
                return;
            }

            element.css({
                display: 'block',
                position: 'absolute',
                top: 0,
                left: 0,
                opacity: 0
            }).animate({
                opacity: 1
            }, 300, done);

            return function animateInEnd(wasCanceled) {
                if (wasCanceled) {
                    element.stop();
                }
            };
        }

        function animateOut(element, className, done) {
            if (className !== 'selected') {
                return;
            }

            element.css({
                position: 'absolute',
                top: 0,
                left: 0,
                opacity: 1
            }).animate({
                opacity: 0
            }, 300, done);

            return function animateOutEnd(wasCanceled) {
                if (wasCanceled) {
                    element.stop();
                }
            };
        }
    });
