/// <reference path='../../../_all.ts' />
var app;
(function (app) {
    var phones;
    (function (phones) {
        var PhoneDetailsController = (function () {
            function PhoneDetailsController($routeParams, IPhoneDetailsResource) {
                this.$routeParams = $routeParams;
                this.IPhoneDetailsResource = IPhoneDetailsResource;
                this.phoneId = $routeParams['phoneId'];
                this.currentImage = '';
                this.phoneDetails = null;
                this.loadPhoneDetails(IPhoneDetailsResource);
            }
            PhoneDetailsController.prototype.loadPhoneDetails = function (IPhoneDetailsResource) {
                var _this = this;
                IPhoneDetailsResource.get({ id: this.phoneId }, function (phoneDetails) {
                    _this.loadPhoneImages(phoneDetails);
                    _this.phoneDetails = phoneDetails;
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
        angular
            .module('app.phones')
            .directive('phoneDetails', function () {
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
    })(phones = app.phones || (app.phones = {}));
})(app || (app = {}));
