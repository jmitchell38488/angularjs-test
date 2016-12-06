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
            '$routeParams', 'PhoneDetailsResource',
            function ($routeParams, PhoneDetailsResource) { return new phones.PhoneDetailsController($routeParams, PhoneDetailsResource); }
        ]);
    })(phones = app.phones || (app.phones = {}));
})(app || (app = {}));
