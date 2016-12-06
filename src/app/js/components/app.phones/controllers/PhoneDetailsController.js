/// <reference path='../../../_all.ts' />
var app;
(function (app) {
    var phones;
    (function (phones) {
        var PhoneDetailsController = (function () {
            function PhoneDetailsController($routeParams, IPhoneDetailsResource, $location) {
                this.$routeParams = $routeParams;
                this.IPhoneDetailsResource = IPhoneDetailsResource;
                this.$location = $location;
                this.phoneId = $routeParams['phoneId'];
                this.currentImage = '';
                this.phoneDetails = null;
                this.loadPhoneDetails(IPhoneDetailsResource, $location);
            }
            PhoneDetailsController.prototype.loadPhoneDetails = function (IPhoneDetailsResource, location) {
                var _this = this;
                IPhoneDetailsResource.get({ id: this.phoneId }, function (phoneDetails) {
                    // Redirect if the data was invalid
                    if (phoneDetails == null || phoneDetails == undefined) {
                        location.url('/phones');
                    }
                    _this.loadPhoneImages(phoneDetails);
                    _this.phoneDetails = phoneDetails;
                }, function (phoneDetails) {
                    // Any error just redirect back to the list page
                    location.url('/phones');
                });
            };
            PhoneDetailsController.prototype.loadPhoneImages = function (phoneDetails) {
                if (angular.isArray(phoneDetails.images)) {
                    this.images = phoneDetails.images;
                    this.setCurrentImage(this.images[0]);
                }
            };
            PhoneDetailsController.prototype.setCurrentImage = function (image) {
                this.currentImage = image;
            };
            PhoneDetailsController.prototype.getPhoneDetails = function () {
                return this.phoneDetails;
            };
            PhoneDetailsController.prototype.getImageList = function () {
                return this.images;
            };
            PhoneDetailsController.prototype.getCurrentImage = function () {
                return this.currentImage;
            };
            return PhoneDetailsController;
        }());
        phones.PhoneDetailsController = PhoneDetailsController;
    })(phones = app.phones || (app.phones = {}));
})(app || (app = {}));
