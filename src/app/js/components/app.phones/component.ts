/// <reference path='../../_all.ts' />

namespace app.phones {

    var module = angular.module('app.phones');

    module.controller('app.phones.PhoneListController', [
        'PhoneListResource',
        (PhoneListResource) => new PhoneListController(PhoneListResource)
    ]);

    module.controller('app.phones.PhoneDetailsController', [
        '$routeParams', 'PhoneDetailsResource',
        ($routeParams, PhoneDetailsResource) => new PhoneDetailsController($routeParams, PhoneDetailsResource)
    ]);

}