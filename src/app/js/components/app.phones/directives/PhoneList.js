/// <reference path='../../../_all.ts' />
var app;
(function (app) {
    var phones;
    (function (phones) {
        angular
            .module('app.phones')
            .directive('phoneList', function () {
            return {
                restrict: 'AE',
                controller: [
                    'PhoneListResource',
                    phones.PhoneListController
                ],
                controllerAs: 'phoneListCtrl',
                bindToController: {
                    phone: '='
                },
                templateUrl: 'js/components/app.phones/partials/list.html'
            };
        });
    })(phones = app.phones || (app.phones = {}));
})(app || (app = {}));
