var app;
(function(app) {

    var phones;
    (function(phones) {
        'use strict';

        var PhoneDetailsController = (function() {
            function PhoneDetailsController($scope) {
                var _this = this;
                this.$scope = $scope;

                $scope.$on('$destroy', function () {
                    return _this._onDestroy();
                });
            }

            PhoneDetailsController.prototype._onDestroy = function() {
                // Do nothing for now
            };

            return PhoneDetailsController;
        })();

        phones.PhoneDetailsController = PhoneDetailsController;
    })(phones = app.phones || (app.phones = {}));
})(app || (app = {}));