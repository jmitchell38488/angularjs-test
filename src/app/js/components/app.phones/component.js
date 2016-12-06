/// <reference path='../../_all.ts' />
var app;
(function (app) {
    var phones;
    (function (phones) {
        var module = angular.module('app.phones');
        module.controller('app.phones.PhoneListController', [
            'PhoneListResource',
            function (PhoneListResource) { return new phones.PhoneListController(PhoneListResource); }
        ]);
        module.controller('app.phones.PhoneDetailsController', [
            '$routeParams', 'PhoneDetailsResource', '$location',
            function ($routeParams, PhoneDetailsResource, $location) {
                return new phones.PhoneDetailsController($routeParams, PhoneDetailsResource, $location);
            }
        ]);
    })(phones = app.phones || (app.phones = {}));
})(app || (app = {}));
