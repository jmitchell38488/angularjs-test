/// <reference path='../../../_all.ts' />

namespace app.phones {

    var module: angular.IModule = angular.module('app.phones');

    module.factory('PhoneListResource', [
            '$resource',
            ($resource: ng.resource.IResourceService) : IPhoneListResource => {
                return <IPhoneListResource> $resource('/res/phones/phones.json', {}, {
                    get: {
                        method: 'GET',
                        isArray: true
                    },
                    query: {
                        method: 'GET',
                        isArray: true
                    }
                });
            }
        ]);

    module.factory('PhoneDetailsResource', [
            '$resource',
            ($resource: ng.resource.IResourceService) : IPhoneDetailsResource => {
                return <IPhoneDetailsResource> $resource('/res/phones/:id.json', {id: '@id'}, {
                    get: {
                        method: 'GET',
                        isArray: true
                    }
                })
            }
        ]);
}
