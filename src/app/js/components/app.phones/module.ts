/// <reference path='../../_all.ts' />

namespace app.phones {

    var module: angular.IModule = angular.module('app.phones', [
        'ngResource',
        'ngRoute',
        'ngAnimate'
    ]);

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

    module.filter('checkmark', () => {
        return (input: string) => {
            return input ? '\u2713' : '\u2718';
        };
    });

    module.animation('.phone', function phoneAnimationFactory(): ng.animate.IAnimateCallbackObject {

        function animateIn(element: JQuery, className: string, done: Function): any {
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

            return (wasCanceled: boolean) => {
                if (wasCanceled) {
                    element.stop();
                }
            };
        }

        function animateOut(element: JQuery, className: string, done: Function): any {
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

            return (wasCanceled: boolean) => {
                if (wasCanceled) {
                    element.stop();
                }
            };
        }

        return {
            addClass: animateIn,
            removeClass: animateOut
        };

    });

};