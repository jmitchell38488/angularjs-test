var app;
(function(app) {

    var core;
    (function(core) {
        'use strict';

        var RouteController = (function() {
            function RouteController($scope, moduleRegistry, routeManager) {
                var _this = this;
                this.$scope = $scope;

                $scope.$on('$destroy', function () {
                    return _this._onDestroy();
                });

                console.log('RouteController');
            }

            RouteController.prototype._onDestroy = function() {
                // Do nothing for now
            };

            return RouteController;
        })();

        core.RouteController = RouteController;
    })(core = app.core || (app.core = {}));
})(app || (app = {}));