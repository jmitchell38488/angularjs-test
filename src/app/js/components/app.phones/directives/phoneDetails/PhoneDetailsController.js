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
                    'app.phones.PhoneRefDataService',
                    '$location',
                    PhoneDetailsController
                ],
                controllerAs: 'phoneDetailsCtrl',
                templateUrl: 'js/components/app.phones/directives/phoneDetails/template.html'
            };
        });
        var PhoneDetailsController = (function () {
            function PhoneDetailsController($routeParams, phoneDataService, $location) {
                var _this = this;
                this.phoneId = $routeParams['phoneId'];
                phoneDataService
                    .getPhoneDetails({ id: this.phoneId })
                    .then(function (response) {
                    // Redirect if the data was invalid
                    if (!response.data || response.status >= 400) {
                        $location.url('/phones');
                    }
                    _this.imageList = response.data.images;
                    _this.currentImage = _this.imageList[0];
                    _this.phoneDetails = response.data;
                })
                    .catch(function (reason) {
                    $location.url('/phones');
                });
            }
            return PhoneDetailsController;
        }());
        phones.PhoneDetailsController = PhoneDetailsController;
    })(phones = app.phones || (app.phones = {}));
})(app || (app = {}));
