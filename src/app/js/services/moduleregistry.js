'use strict';

angular.module('app').service('moduleRegistry', [
    '$http', 'routeManager',
    function($http, routeManager) {
        var registry = [];
        var manifest = {};

        return {
            register: function(namespace, module) {
                registry.push({namespace: namespace, instance: module});
            },

            loaded: function(namespace) {
                for (module in registry) {
                    if (module.namespace == namespace) {
                        return true;
                    }
                }

                return false;
            },

            loadManifest: function() {
                $http.get('/src/app/js/manifest.json')
                    .then(function(data) {
                        manifest = data.data;

                        // There are modules, load the routes
                        if (manifest.modules.length > 0) {
                            for (var i in manifest.modules) {
                                var module = manifest.modules[i];

                                if (module.hasOwnProperty('config') && module.config.hasOwnProperty('routes')) {
                                    for (var n in module.config.routes) {
                                        routeManager.register(module.config.routes[n], module.id);
                                    }
                                }
                            }
                        }
                    });
            },

            loadModule: function(name) {

            }
        };
    }
]);