/// <reference path='../../../_all.ts' />

namespace app.phones {

    angular
        .module('app.phones')
        .factory('PhoneListResource', [
            '$resource',
            ($resource: ng.resource.IResourceService) : IPhoneListResource => {
                return <IPhoneListResource> $resource('/res/phones/phones.json', {}, {
                    query: {
                        method: 'GET',
                        isArray: true
                    }
                });
            }
        ])
        .factory('PhoneDetailsResource', [
            '$resource',
            ($resource: ng.resource.IResourceService) : IPhoneDetailsResource => {
                return <IPhoneDetailsResource> $resource('/res/phones/:id.json', {id: '@id'}, {
                    query: {
                        method: 'GET',
                        isArray: true
                    }
                })
            }
        ]);
}
