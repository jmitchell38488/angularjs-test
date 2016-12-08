/// <reference path='../../../_all.ts' />
var app;
(function (app) {
    var phones;
    (function (phones) {
        var module = angular.module('app.phones');
        module.filter('checkmark', function () {
            return function (input) {
                return input ? '\u2713' : '\u2718';
            };
        });
    })(phones = app.phones || (app.phones = {}));
})(app || (app = {}));
