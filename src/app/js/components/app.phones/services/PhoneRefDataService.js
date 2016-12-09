/// <reference path='../../../_all.ts' />
var app;
(function (app) {
    var phones;
    (function (phones) {
        var PhoneRefDataService = (function () {
            function PhoneRefDataService($http, $q) {
                this.$http = $http;
                this.$q = $q;
                this.listUrl = '/res/phones/phones.json';
                this.detailsUrl = '/res/phones/{id}.json';
            }
            PhoneRefDataService.prototype.getPhoneList = function () {
                var d = this.$q.defer();
                d.resolve(this.$http.get(this.listUrl));
                return d.promise;
            };
            PhoneRefDataService.prototype.getPhoneDetails = function (config) {
                var d = this.$q.defer();
                var uri = this.detailsUrl.replace('{id}', config.id);
                d.resolve(this.$http.get(uri));
                return d.promise;
            };
            return PhoneRefDataService;
        }());
        phones.PhoneRefDataService = PhoneRefDataService;
    })(phones = app.phones || (app.phones = {}));
})(app || (app = {}));
