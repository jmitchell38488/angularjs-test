/// <reference path='../../../_all.ts' />

namespace app.phones {

    export class PhoneDetailsController {

        public images: string[];
        public currentImage: string;
        public phoneDetails: IPhoneDetails;
        public phoneId: number;

        constructor(private $routeParams: ng.route.IRouteParamsService,
                    private IPhoneDetailsResource: IPhoneDetailsResource) {
            this.phoneId = $routeParams['phoneId'];
            this.currentImage = '';
            this.phoneDetails = null;

            this.loadPhoneDetails(IPhoneDetailsResource);
        }

        private loadPhoneDetails(IPhoneDetailsResource: IPhoneDetailsResource) {
            IPhoneDetailsResource.get({id: this.phoneId}, (phoneDetails) => {
                this.loadPhoneImages(phoneDetails);
                this.phoneDetails = phoneDetails;
            })
        }

        private loadPhoneImages(phoneDetails: IPhoneDetails) {
            if (angular.isArray(phoneDetails.images)) {
                this.images = phoneDetails.images;
                this.setCurrentImage(this.images[0]);
            }
        }

        public setCurrentImage(image: string) {
            this.currentImage = image;
        }

        public getPhoneDetails() : IPhoneDetails {
            return this.phoneDetails;
        }

        public getImageList() : string[] {
            return this.images;
        }

        public getCurrentImage() : string {
            return this.currentImage;
        }

    }

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