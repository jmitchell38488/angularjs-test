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
                    '$rootScope',
                    'app.phones.PhoneRefDataService',
                    PhoneListController
                ],
                controllerAs: 'phoneListCtrl',
                bindToController: {
                    phone: '='
                },
                templateUrl: 'js/components/app.phones/directives/phoneList/template.html'
            };
        });
        var PhoneListController = (function () {
            function PhoneListController($rootScope, phoneDataService) {
                var _this = this;
                this.orderProp = '';
                this.query = '';
                phoneDataService
                    .getPhoneList()
                    .then(function (response) {
                    _this.phoneList = response.data;
                })
                    .catch(function (reason) {
                    console.log('Not loading ... ?');
                });
            }
            return PhoneListController;
        }());
        phones.PhoneListController = PhoneListController;
    })(phones = app.phones || (app.phones = {}));
})(app || (app = {}));
