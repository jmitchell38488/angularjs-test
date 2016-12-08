/// <reference path='../../../_all.ts' />
var app;
(function (app) {
    var phones;
    (function (phones) {
        var module = angular.module('app.phones');
        module.animation('.phone', function phoneAnimationFactory() {
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
                return function (wasCanceled) {
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
                return function (wasCanceled) {
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
    })(phones = app.phones || (app.phones = {}));
})(app || (app = {}));
