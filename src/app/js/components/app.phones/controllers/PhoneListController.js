/// <reference path='../../../_all.ts' />
var app;
(function (app) {
    var phones;
    (function (phones) {
        var PhoneListController = (function () {
            function PhoneListController(PhoneListResource) {
                this.PhoneListResource = PhoneListResource;
                this.orderProp = 'age';
                this.query = '';
                this.createPhonesList(PhoneListResource);
            }
            PhoneListController.prototype.createPhonesList = function (PhoneListResource) {
                this.phones = PhoneListResource.query();
            };
            PhoneListController.prototype.getPhoneList = function () {
                return this.phones;
            };
            PhoneListController.prototype.getOrderProp = function () {
                return this.orderProp;
            };
            PhoneListController.prototype.getQuery = function () {
                return this.query;
            };
            return PhoneListController;
        }());
        phones.PhoneListController = PhoneListController;
    })(phones = app.phones || (app.phones = {}));
})(app || (app = {}));
