/// <reference path='../../../_all.ts' />

namespace app.phones {

    angular
        .module('app.phones')
        .directive('phoneList', () => {
            return {
                restrict: 'AE',
                controller: [
                    'PhoneListResource',
                    PhoneListController
                ],
                controllerAs: 'phoneListCtrl',
                bindToController: {
                    phone: '='
                },
                templateUrl: 'js/components/app.phones/partials/list.html'
            };
        });

}
