/// <reference path='../../../../_all.ts' />

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
                templateUrl: 'js/components/app.phones/directives/list/template.html'
            };
        });

    import IResourceArray = angular.resource.IResourceArray;

    export class PhoneListController {

        public phoneList : IResourceArray<IPhoneListDef>;
        public query : string;
        public orderProp: string;

        constructor(phoneListResource : IPhoneListResource) {
            this.orderProp = 'age';
            this.query = '';

            var resp = this.getPhonesList(phoneListResource);
            resp.$promise.then((resp: IResourceArray<IPhoneListDef>) => {
                this.phoneList = resp;
            });
        }

        private getPhonesList(phoneListResource: IPhoneListResource): IResourceArray<IPhoneListDef> {
            return phoneListResource.query();
        }

    }

}
