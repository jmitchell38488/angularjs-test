'use strict';

var app;
(function(app) {

    var phones;
    (function(phones) {
        var PhoneDetailsController = (function() {
            function PhoneDetailsController($routeParams, PhoneListService) {
                var _this = this;
                _this.currentImage = 0;
                _this.images = [];
                _this.phoneDetails = {};
                _this.phoneId = $routeParams.phoneId;

                // Load the phone details
                _this._loadPhoneDetails($routeParams, PhoneListService);
            }

            PhoneDetailsController.prototype._loadPhoneDetails = function($routeParams, PhoneListService) {
                var _this = this;
                PhoneListService.get({phoneId: $routeParams.phoneId}, function(phoneDetails) {
                    _this._loadPhoneImages(phoneDetails.images);
                    _this.phoneDetails = phoneDetails;
                });
            };

            PhoneDetailsController.prototype._loadPhoneImages = function(images/*[]*/) {
                if (angular.isArray(images)) {
                    this.images = images;
                    this.currentImage = 0;
                }
            };

            PhoneDetailsController.prototype.getPhoneDetails = function() {
                return this.phoneDetails;
            };

            PhoneDetailsController.prototype.getImageList = function() {
                return this.images;
            };

            PhoneDetailsController.prototype.getCurrentImage = function() {
                return this.images[this.currentImage];
            };

            PhoneDetailsController.prototype.getImageUrl = function(imageUri) {
                return imageUri != null && imageUri.length > 0 ? "src/app/res/" + imageUri : imageUri;
            };

            return PhoneDetailsController;
        })();

        angular.module('app.phones').directive('phoneDetails', function() {
            return {
                restrict: 'AE',
                controller: [
                    '$routeParams',
                    'PhoneListService',
                    PhoneDetailsController
                ],
                controllerAs: 'phoneDetailsCtrl',
                /*bindToController: {
                    phone: '='
                },*/
                templateUrl: 'src/app/js/components/app.phones/partials/details.html'
            };
        });

        phones.PhoneDetailsController = PhoneDetailsController;
    })(phones = app.phones || (app.phones = {}));
})(app || (app = {}));