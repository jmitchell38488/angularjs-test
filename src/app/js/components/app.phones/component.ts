/// <reference path='../../_all.ts' />

namespace app.phones {

    var module = angular.module('app.phones');

    module.controller('app.phones.PhoneListController', [
        'PhoneListResource',
        (PhoneListResource) => new PhoneListController(PhoneListResource)
    ]);

    module.controller('app.phones.PhoneDetailsController', [
        '$routeParams', 'PhoneDetailsResource', '$location',
        ($routeParams, PhoneDetailsResource, $location) =>
            new PhoneDetailsController($routeParams, PhoneDetailsResource, $location)
    ]);

}