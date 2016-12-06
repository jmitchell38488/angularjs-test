/// <reference path='../../../_all.ts' />
var app;
(function (app) {
    var phones;
    (function (phones) {
        var module = angular.module('app.phones');
        module.factory('PhoneListResource', [
            '$resource',
            function ($resource) {
                return $resource('/res/phones/phones.json', {}, {
                    query: {
                        method: 'GET',
                        isArray: true
                    }
                });
            }
        ]);
        module.factory('PhoneDetailsResource', [
            '$resource',
            function ($resource) {
                return $resource('/res/phones/:id.json', { id: '@id' }, {
                    query: {
                        method: 'GET',
                        isArray: true
                    }
                });
            }
        ]);
    })(phones = app.phones || (app.phones = {}));
})(app || (app = {}));
