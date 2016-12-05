'use strict';

var app;
(function(app) {

    var phones;
    (function(phones) {
        var PhoneDetailsController = (function() {
            function PhoneDetailsController($routeParams, PhoneListService) {
                var _this = this;
                _this.currentImage = '';
                _this.images = [];
                _this.phoneDetails = {};
                _this.phoneId = $routeParams.phoneId;

                _this._loadPhoneDetails = function ($routeParams, PhoneListService) {
                    var _this = this;
                    PhoneListService.get({phoneId: $routeParams.phoneId}, function (phoneDetails) {
                        _this._loadPhoneImages(phoneDetails.images);
                        _this.phoneDetails = phoneDetails;
                    });
                };

                _this._loadPhoneImages = function (images/*[]*/) {
                    if (angular.isArray(images)) {
                        this.images = images;
                        this.setCurrentImage(images[0]);
                    }
                };

                _this.getPhoneDetails = function () {
                    return this.phoneDetails;
                };

                _this.getImageList = function () {
                    return this.images;
                };

                _this.getCurrentImage = function () {
                    return this.currentImage;
                };

                _this.getImageUrl = function (imageUri) {
                    return imageUri != null && imageUri.length > 0 ? "src/app/res/" + imageUri : imageUri;
                };

                _this.setCurrentImage = function (imageUri) {
                    this.currentImage = imageUri;
                };

                // Load the phone details
                _this._loadPhoneDetails($routeParams, PhoneListService);
            }

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
                templateUrl: 'js/components/app.phones/partials/details.html'
            };
        });

        phones.PhoneDetailsController = PhoneDetailsController;
    })(phones = app.phones || (app.phones = {}));
})(app || (app = {}));