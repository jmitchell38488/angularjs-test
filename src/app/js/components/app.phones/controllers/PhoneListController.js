'use strict';

var app;
(function(app) {

    var phones;
    (function(phones) {
        var PhoneListController = (function() {
            function PhoneListController($scope, PhoneListService) {
                var _this = this;
                _this.phones = [];
                _this.orderProp = 'age';
                _this.query = "";

                $scope.$on('$destroy', function () {
                    return _this._onDestroy();
                });

                _this._createPhonesList(PhoneListService);
            }

            PhoneListController.prototype._createPhonesList = function(PhoneListService) {
                this.phones = PhoneListService.query();
            };

            PhoneListController.prototype._onDestroy = function() {
                this.phones = [];
            };

            PhoneListController.prototype.getPhoneList = function() {
                return this.phones;
            };

            PhoneListController.prototype.getOrderProp = function() {
                return this.orderProp;
            };

            PhoneListController.prototype.getQuery = function() {
                return this.query;
            };

            PhoneListController.prototype.setQuery = function(query) {
                this.query = query;
            };

            PhoneListController.prototype.getImageUrl = function(imageUri) {
                return imageUri != null && imageUri.length > 0 ? "src/app/res/" + imageUri : imageUri;
            };

            return PhoneListController;
        })();

        angular.module('app.phones').directive('phoneList', function() {
            return {
                restrict: 'AE',
                controller: [
                    '$scope',
                    'PhoneListService',
                    PhoneListController
                ],
                controllerAs: 'phoneListCtrl',
                bindToController: {
                    phone: '='
                },
                templateUrl: 'src/app/js/components/app.phones/partials/list.html'
            };
        });

        phones.PhoneListController = PhoneListController;
    })(phones = app.phones || (app.phones = {}));
})(app || (app = {}));