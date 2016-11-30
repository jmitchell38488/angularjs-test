'use strict';
var app;
(function(app) {

    var phones;
    (function(phones) {
        var module = angular.module('app.phones');

        module.controller('app.phones.PhoneListController', ['$scope',
            function($scope) {
                return new phones.PhoneListController($scope);
            }]);

        module.controller('app.phones.PhoneDetailsController', ['$scope',
            function($scope) {
                return new phones.PhoneDetailsController($scope);
            }]);

    })(phones = app.phones || (app.phones = {}));
})(app || (app = {}));