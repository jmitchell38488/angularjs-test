/// <reference path='../../../../_all.ts' />

namespace app.phones {

    angular
        .module('app.phones')
        .directive('phoneDetails', () => {
            return {
                restrict: 'AE',
                controller: [
                    '$routeParams',
                    'app.phones.PhoneRefDataService',
                    '$location',
                    PhoneDetailsController
                ],
                controllerAs: 'phoneDetailsCtrl',
                templateUrl: 'js/components/app.phones/directives/phoneDetails/template.html'
            };
        });

    export class PhoneDetailsController {

        public phoneId: string;
        public currentImage : string;
        public phoneDetails : IPhoneDetails;
        public imageList : string[];

        constructor($routeParams: ng.route.IRouteParamsService,
                    phoneDataService: IPhoneRefDataService,
                    $location: ng.ILocationService) {

            this.phoneId = $routeParams['phoneId'];

            phoneDataService
                .getPhoneDetails({id: this.phoneId})
                .then((response: any) => {
                    // Redirect if the data was invalid
                    if (!response.data || response.status >= 400) {
                        $location.url('/phones');
                    }

                    this.imageList = response.data.images;
                    this.currentImage = this.imageList[0];
                    this.phoneDetails = response.data;
                })
                .catch((reason: any) => {
                    $location.url('/phones');
                });
        }
    }

}