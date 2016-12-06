/// <reference path='../../../_all.ts' />

namespace app.phones {

    angular
        .module('app.phones')
        .directive('phoneDetails', () => {
            return {
                restrict: 'AE',
                controller: [
                    '$routeParams',
                    'PhoneDetailsResource',
                    PhoneDetailsController
                ],
                controllerAs: 'phoneDetailsCtrl',
                templateUrl: 'js/components/app.phones/partials/details.html'
            };
        });

}