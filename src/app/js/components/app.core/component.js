'use strict';
var app;
(function(app) {

    var core;
    (function(core) {
        var module = angular.module('app.core');

        module.controller('app.core.RouteController', [
            '$scope', 'moduleRegistry', 'routeManager',
            function($scope, moduleRegistry, routeManager) {
                return new core.RouteController($scope, moduleRegistry, routeManager);
            }
        ]);

    })(core = app.core || (app.core = {}));
})(app || (app = {}));