/// <reference path='../../../../_all.ts' />
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
                    PhoneListController
                ],
                controllerAs: 'phoneListCtrl',
                bindToController: {
                    phone: '='
                },
                templateUrl: 'js/components/app.phones/directives/list/template.html'
            };
        });
        var PhoneListController = (function () {
            function PhoneListController(phoneListResource) {
                var _this = this;
                this.orderProp = 'age';
                this.query = '';
                var resp = this.getPhonesList(phoneListResource);
                resp.$promise.then(function (resp) {
                    _this.phoneList = resp;
                });
            }
            PhoneListController.prototype.getPhonesList = function (phoneListResource) {
                return phoneListResource.query();
            };
            return PhoneListController;
        }());
        phones.PhoneListController = PhoneListController;
    })(phones = app.phones || (app.phones = {}));
})(app || (app = {}));
