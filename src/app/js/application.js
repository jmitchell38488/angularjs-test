/// <reference path='_all.ts' />
angular.module('app', [
    'app.phones'
]);
/// <reference path='../../_all.ts' />
var app;
(function (app) {
    var phones;
    (function (phones) {
        var module = angular.module('app.phones', [
            'ngRoute',
            'ngAnimate'
        ]);
    })(phones = app.phones || (app.phones = {}));
})(app || (app = {}));
;
/// <reference path='../../../_all.ts' />
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
                this.orderProp = 'age';
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
/// <reference path='../../../../_all.ts' />
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
                    'app.phones.PhoneRefDataService',
                    '$location',
                    PhoneDetailsController
                ],
                controllerAs: 'phoneDetailsCtrl',
                templateUrl: 'js/components/app.phones/directives/phoneDetails/template.html'
            };
        });
        var PhoneDetailsController = (function () {
            function PhoneDetailsController($routeParams, phoneDataService, $location) {
                var _this = this;
                this.phoneId = $routeParams['phoneId'];
                phoneDataService
                    .getPhoneDetails({ id: this.phoneId })
                    .then(function (response) {
                    // Redirect if the data was invalid
                    if (!response.data || response.status >= 400) {
                        $location.url('/phones');
                    }
                    _this.imageList = response.data.images;
                    _this.currentImage = _this.imageList[0];
                    _this.phoneDetails = response.data;
                })
                    .catch(function (reason) {
                    $location.url('/phones');
                });
            }
            return PhoneDetailsController;
        }());
        phones.PhoneDetailsController = PhoneDetailsController;
    })(phones = app.phones || (app.phones = {}));
})(app || (app = {}));
/// <reference path='../../../_all.ts' />
var app;
(function (app) {
    var phones;
    (function (phones) {
        var module = angular.module('app.phones');
        module.filter('checkmark', function () {
            return function (input) {
                return input ? '\u2713' : '\u2718';
            };
        });
    })(phones = app.phones || (app.phones = {}));
})(app || (app = {}));
/// <reference path='../../../_all.ts' />
var app;
(function (app) {
    var phones;
    (function (phones) {
        var module = angular.module('app.phones');
        module.animation('.phone', function phoneAnimationFactory() {
            function animateIn(element, className, done) {
                if (className !== 'selected') {
                    return;
                }
                element.css({
                    display: 'block',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    opacity: 0
                }).animate({
                    opacity: 1
                }, 300, done);
                return function (wasCanceled) {
                    if (wasCanceled) {
                        element.stop();
                    }
                };
            }
            function animateOut(element, className, done) {
                if (className !== 'selected') {
                    return;
                }
                element.css({
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    opacity: 1
                }).animate({
                    opacity: 0
                }, 300, done);
                return function (wasCanceled) {
                    if (wasCanceled) {
                        element.stop();
                    }
                };
            }
            return {
                addClass: animateIn,
                removeClass: animateOut
            };
        });
    })(phones = app.phones || (app.phones = {}));
})(app || (app = {}));
/// <reference path='../../../_all.ts' />
var app;
(function (app) {
    var phones;
    (function (phones) {
        var module = angular.module('app.phones');
        module.config([
            '$locationProvider', '$routeProvider',
            function ($locationProvider, $routeProvider) {
                $locationProvider.hashPrefix('!');
                $routeProvider
                    .when('/phones', {
                    template: function () {
                        return '<phone-list></phone-list>';
                    },
                    controller: 'app.phones.PhoneListController'
                })
                    .when('/phones/:phoneId', {
                    template: function () {
                        return '<phone-details></phone-details>';
                    },
                    controller: 'app.phones.PhoneDetailsController'
                })
                    .otherwise({
                    redirectTo: '/phones'
                });
            }
        ]);
    })(phones = app.phones || (app.phones = {}));
})(app || (app = {}));
/// <reference path='../../_all.ts' />
var app;
(function (app) {
    var phones;
    (function (phones) {
        var module = angular.module('app.phones');
        module.service('app.phones.PhoneRefDataService', [
            '$http', '$q',
            function ($http, $q) { return new phones.PhoneRefDataService($http, $q); }
        ]);
        module.controller('app.phones.PhoneListController', [
            '$rootScope', 'app.phones.PhoneRefDataService',
            function ($rootScope, IPhoneRefDataService) { return new phones.PhoneListController($rootScope, IPhoneRefDataService); }
        ]);
        module.controller('app.phones.PhoneDetailsController', [
            '$routeParams', 'app.phones.PhoneRefDataService', '$location',
            function ($routeParams, IPhoneRefDataService, $location) {
                return new phones.PhoneDetailsController($routeParams, IPhoneRefDataService, $location);
            }
        ]);
    })(phones = app.phones || (app.phones = {}));
})(app || (app = {}));
/// <reference path='../../../typings/jquery/jquery.d.ts' />
/// <reference path='../../../typings/angularjs/angular.d.ts' />
/// <reference path='../../../typings/angularjs/angular-route.d.ts' />
/// <reference path='../../../typings/angularjs/angular-resource.d.ts' />
/// <reference path='../../../typings/angularjs/angular-animate.d.ts' />
/// <reference path='app.ts' />
/// <reference path='components/app.phones/module.ts' />
/// <reference path='components/app.phones/domain/PhoneModel.ts' />
/// <reference path='components/app.phones/services/PhoneRefDataService.ts' />
/// <reference path='components/app.phones/directives/phoneList/PhoneListController.ts' />
/// <reference path='components/app.phones/directives/phoneDetails/PhoneDetailsController.ts' />
/// <reference path='components/app.phones/filters/CheckmarkFilter.ts' />
/// <reference path='components/app.phones/animations/ImageGalleryAnimation.ts' />
/// <reference path='components/app.phones/config/Config.ts' />
/// <reference path='components/app.phones/component.ts' />
//# sourceMappingURL=application.js.map