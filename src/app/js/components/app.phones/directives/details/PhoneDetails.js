/// <reference path='../../../../_all.ts' />
var app;
(function (app) {
    var phones;
    (function (phones) {
        angular
            .module('app.phones')
            .directive('phoneDetails', function () {
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
        var PhoneDetailsController = (function () {
            function PhoneDetailsController($routeParams, phoneDetailsResource, $location) {
                this.phoneId = $routeParams['phoneId'];
                this.loadPhoneDetails(phoneDetailsResource, $location);
            }
            // TODO: Replace with promise
            PhoneDetailsController.prototype.loadPhoneDetails = function (phoneDetailsResource, location) {
                var _this = this;
                // ng.resource.IResourceMethod<IPhoneDetails>
                phoneDetailsResource.get({ id: this.phoneId }, function (phoneDetails) {
                    // Redirect if the data was invalid
                    if (phoneDetails) {
                        location.url('/phones');
                    }
                    _this.imageList = phoneDetails.images;
                    _this.currentImage = _this.imageList[0];
                    _this.phoneDetails = phoneDetails;
                }, function () {
                    // Any error just redirect back to the list page
                    location.url('/phones');
                });
            };
            return PhoneDetailsController;
        }());
        phones.PhoneDetailsController = PhoneDetailsController;
    })(phones = app.phones || (app.phones = {}));
})(app || (app = {}));
