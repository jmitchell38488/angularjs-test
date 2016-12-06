/// <reference path='../../../_all.ts' />
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
                    phones.PhoneDetailsController
                ],
                controllerAs: 'phoneDetailsCtrl',
                templateUrl: 'js/components/app.phones/partials/details.html'
            };
        });
    })(phones = app.phones || (app.phones = {}));
})(app || (app = {}));
