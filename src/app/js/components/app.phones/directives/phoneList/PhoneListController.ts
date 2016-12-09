/// <reference path='../../../../_all.ts' />

namespace app.phones {

    angular
        .module('app.phones')
        .directive('phoneList', () => {
            return {
                restrict: 'AE',
                controller: [
                    '$rootScope',
                    'app.phones.PhoneRefDataService',
                    PhoneListController
                ],
                controllerAs: 'phoneListCtrl',
                bindToController: {
                    phone: '='
                },
                templateUrl: 'js/components/app.phones/directives/phoneList/template.html'
            };
        });

    import IResourceArray = angular.resource.IResourceArray;

    export class PhoneListController {

        public phoneList: IPhoneList[];
        public query : string;
        public orderProp: string;

        constructor($rootScope: ng.IRootScopeService, phoneDataService : IPhoneRefDataService) {
            this.orderProp = '';
            this.query = '';

            phoneDataService
                .getPhoneList()
                .then((response: any) => {
                    this.phoneList = response.data;
                })
                .catch((reason: any) => {
                    console.log('Not loading ... ?');
                });
        }

    }

}
