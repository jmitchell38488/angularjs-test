/// <reference path='../../../_all.ts' />

namespace app.phones {

    var module: angular.IModule = angular.module('app.phones');

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

}