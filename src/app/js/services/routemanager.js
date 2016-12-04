'use strict';

angular.module('app').service('routeManager', [function() {
    var routes = [];

    return {
        register: function(route, id) {
            routes.push({
                route: route,
                moduleId: id
            });
        },

        match: function(route) {
            console.log('match to ' + route);
            for (r in routes) {
                if (r.route == route) {
                    console.log(r);
                }
            }
        }
    };
}]);