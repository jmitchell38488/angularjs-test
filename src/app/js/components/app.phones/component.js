'use strict';
var app;
(function(app) {

    var phones;
    (function(phones) {
        var module = angular.module('app.phones');

        module.controller('app.phones.PhoneListController', [
            '$scope', 'PhoneListService',
            function($scope, PhoneListService) {
                return new phones.PhoneListController($scope, PhoneListService);
            }]);

        module.controller('app.phones.PhoneDetailsController', [
            '$routeParams', 'PhoneListService',
            function($routeParams, PhoneListService) {
                return new phones.PhoneDetailsController($routeParams, PhoneListService);
            }]);

    })(phones = app.phones || (app.phones = {}));
})(app || (app = {}));