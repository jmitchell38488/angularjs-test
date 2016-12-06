/// <reference path='../../../_all.ts' />

namespace app.phones {

    export class PhoneDetailsController {

        public images: string[];
        public currentImage: string;
        public phoneDetails: IPhoneDetails;
        public phoneId: number;

        constructor(private $routeParams: ng.route.IRouteParamsService,
                    private IPhoneDetailsResource: IPhoneDetailsResource,
                    private $location: ng.ILocationService) {
            this.phoneId = $routeParams['phoneId'];
            this.currentImage = '';
            this.phoneDetails = null;

            this.loadPhoneDetails(IPhoneDetailsResource, $location);
        }

        private loadPhoneDetails(IPhoneDetailsResource: IPhoneDetailsResource, location: ng.ILocationService) {
            IPhoneDetailsResource.get({id: this.phoneId}, (phoneDetails) => {
                // Redirect if the data was invalid
                if (phoneDetails == null || phoneDetails == undefined) {
                    location.url('/phones');
                }

                this.loadPhoneImages(phoneDetails);
                this.phoneDetails = phoneDetails;
            }, (phoneDetails) => {
                // Any error just redirect back to the list page
                location.url('/phones');
            });
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

}