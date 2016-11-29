var app;
(function(app) {

    var phones;
    (function(phones) {
        'use strict';

        var PhoneListController = (function() {
            function PhoneListController($scope) {
                var _this = this;
                _this.$scope = $scope;
                _this.phones = [];

                $scope.$on('$destroy', function () {
                    return _this._onDestroy();
                });

                _this._createPhonesList();
            }

            PhoneListController.prototype._createPhonesList = function() {
                this.phones.push({name: 'Nexus S',snippet: 'Fast just got faster with Nexus S.'});
                this.phones.push({name: 'Motorola XOOM™ with Wi-Fi',snippet: 'The Next, Next Generation tablet.'});
                this.phones.push({name: 'MOTOROLA XOOM™',snippet: 'The Next, Next Generation tablet.'});
            };

            PhoneListController.prototype._onDestroy = function() {
                // Do nothing for now
            };

            PhoneListController.prototype.getPhoneList = function() {
                return this.phones;
            };

            return PhoneListController;
        })();

        phones.PhoneListController = PhoneListController;
    })(phones = app.phones || (app.phones = {}));
})(app || (app = {}));