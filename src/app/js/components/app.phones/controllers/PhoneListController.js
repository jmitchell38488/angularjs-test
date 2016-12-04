var app;
(function(app) {

    var phones;
    (function(phones) {
        var PhoneListController = (function() {
            function PhoneListController($scope, PhoneListService) {
                var _this = this;
                _this.$scope = $scope;
                _this.phones = [];

                $scope.$on('$destroy', function () {
                    return _this._onDestroy();
                });

                _this._createPhonesList(PhoneListService);
            }

            PhoneListController.prototype._createPhonesList = function(PhoneListService) {
                this.phones = PhoneListService.query();
                /*this.phones.push({name: 'Nexus S',snippet: 'Fast just got faster with Nexus S.'});
                this.phones.push({name: 'Motorola XOOM™ with Wi-Fi',snippet: 'The Next, Next Generation tablet.'});
                this.phones.push({name: 'MOTOROLA XOOM™',snippet: 'The Next, Next Generation tablet.'});*/
            };

            PhoneListController.prototype._onDestroy = function() {
                _this.phones = [];
            };

            PhoneListController.prototype.getPhoneList = function() {
                return this.phones;
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