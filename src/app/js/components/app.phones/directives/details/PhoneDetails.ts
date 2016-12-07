/// <reference path='../../../../_all.ts' />

namespace app.phones {

    angular
        .module('app.phones')
        .directive('phoneDetails', () => {
            return {
                restrict: 'AE',
                controller: [
                    '$routeParams',
                    'PhoneDetailsResource',
                    '$location',
                    PhoneDetailsController
                ],
                controllerAs: 'phoneDetailsCtrl',
                templateUrl: 'js/components/app.phones/directives/details/template.html'
            };
        });

    export class PhoneDetailsController {

        public phoneId: number;
        public currentImage : string;
        public phoneDetails : IPhoneDetails;
        public imageList : string[];

        constructor($routeParams: ng.route.IRouteParamsService,
                    phoneDetailsResource: IPhoneDetailsResource,
                    $location: ng.ILocationService) {

            this.phoneId = $routeParams['phoneId'];
            this.loadPhoneDetails(phoneDetailsResource, $location);
        }

        // TODO: Replace with promise
        private loadPhoneDetails(phoneDetailsResource: IPhoneDetailsResource,
                                 location: ng.ILocationService): void {
            // ng.resource.IResourceMethod<IPhoneDetails>
            phoneDetailsResource.get({id: this.phoneId}, (phoneDetails) => {
                // Redirect if the data was invalid
                if (phoneDetails) {
                    location.url('/phones');
                }

                this.imageList = phoneDetails.images;
                this.currentImage = this.imageList[0];
                this.phoneDetails = phoneDetails;
            }, () => {
                // Any error just redirect back to the list page
                location.url('/phones');
            });
        }


    }

}