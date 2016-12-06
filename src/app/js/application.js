/// <reference path='_all.ts' />
angular.module('app', [
    'ngRoute',
    'ngResource',
    'app.phones'
]);
/// <reference path='_all.ts' />
angular.module('app')
    .config(function ($routeProvider) {
});
/// <reference path='../../_all.ts' />
var app;
(function (app) {
    var phones;
    (function (phones) {
        var module = angular.module('app.phones', [
            'ngResource',
            'ngRoute',
            'ngAnimate'
        ]);
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
        module.filter('checkmark', function () {
            return function (input) {
                return input ? '\u2713' : '\u2718';
            };
        });
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
;
/// <reference path='../../_all.ts' />
var app;
(function (app) {
    var phones;
    (function (phones) {
        var module = angular.module('app.phones');
        module.controller('app.phones.PhoneListController', [
            'PhoneListResource',
            function (PhoneListResource) { return new phones.PhoneListController(PhoneListResource); }
        ]);
        module.controller('app.phones.PhoneDetailsController', [
            '$routeParams', 'PhoneDetailsResource', '$location',
            function ($routeParams, PhoneDetailsResource, $location) {
                return new phones.PhoneDetailsController($routeParams, PhoneDetailsResource, $location);
            }
        ]);
    })(phones = app.phones || (app.phones = {}));
})(app || (app = {}));
/// <reference path='../../../_all.ts' />
/// <reference path='../../../_all.ts' />
var app;
(function (app) {
    var phones;
    (function (phones) {
        var module = angular.module('app.phones');
        module.factory('PhoneListResource', [
            '$resource',
            function ($resource) {
                return $resource('/res/phones/phones.json', {}, {
                    query: {
                        method: 'GET',
                        isArray: true
                    }
                });
            }
        ]);
        module.factory('PhoneDetailsResource', [
            '$resource',
            function ($resource) {
                return $resource('/res/phones/:id.json', { id: '@id' }, {
                    get: {
                        method: 'GET'
                    }
                });
            }
        ]);
    })(phones = app.phones || (app.phones = {}));
})(app || (app = {}));
/// <reference path='../../../_all.ts' />
var app;
(function (app) {
    var phones;
    (function (phones) {
        var PhoneDetailsController = (function () {
            function PhoneDetailsController($routeParams, IPhoneDetailsResource, $location) {
                this.$routeParams = $routeParams;
                this.IPhoneDetailsResource = IPhoneDetailsResource;
                this.$location = $location;
                this.phoneId = $routeParams['phoneId'];
                this.currentImage = '';
                this.phoneDetails = null;
                this.loadPhoneDetails(IPhoneDetailsResource, $location);
            }
            PhoneDetailsController.prototype.loadPhoneDetails = function (IPhoneDetailsResource, location) {
                var _this = this;
                IPhoneDetailsResource.get({ id: this.phoneId }, function (phoneDetails) {
                    // Redirect if the data was invalid
                    if (phoneDetails == null || phoneDetails == undefined) {
                        location.url('/phones');
                    }
                    _this.loadPhoneImages(phoneDetails);
                    _this.phoneDetails = phoneDetails;
                }, function (phoneDetails) {
                    // Any error just redirect back to the list page
                    location.url('/phones');
                });
            };
            PhoneDetailsController.prototype.loadPhoneImages = function (phoneDetails) {
                if (angular.isArray(phoneDetails.images)) {
                    this.images = phoneDetails.images;
                    this.setCurrentImage(this.images[0]);
                }
            };
            PhoneDetailsController.prototype.setCurrentImage = function (image) {
                this.currentImage = image;
            };
            PhoneDetailsController.prototype.getPhoneDetails = function () {
                return this.phoneDetails;
            };
            PhoneDetailsController.prototype.getImageList = function () {
                return this.images;
            };
            PhoneDetailsController.prototype.getCurrentImage = function () {
                return this.currentImage;
            };
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
/// <reference path='../../../_all.ts' />
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
                    'PhoneDetailsResource',
                    '$location',
                    phones.PhoneDetailsController
                ],
                controllerAs: 'phoneDetailsCtrl',
                templateUrl: 'js/components/app.phones/partials/details.html'
            };
        });
    })(phones = app.phones || (app.phones = {}));
})(app || (app = {}));
/// <reference path='../../../typings/jquery/jquery.d.ts' />
/// <reference path='../../../typings/angularjs/angular.d.ts' />
/// <reference path='../../../typings/angularjs/angular-route.d.ts' />
/// <reference path='../../../typings/angularjs/angular-resource.d.ts' />
/// <reference path='../../../typings/angularjs/angular-animate.d.ts' />
/// <reference path='app.ts' />
/// <reference path='app.config.ts' />
/// <reference path='components/app.phones/module.ts' />
/// <reference path='components/app.phones/component.ts' />
/// <reference path='components/app.phones/domain/PhoneModel.ts' />
/// <reference path='components/app.phones/services/PhoneListService.ts' />
/// <reference path='components/app.phones/controllers/PhoneDetailsController.ts' />
/// <reference path='components/app.phones/controllers/PhoneListController.ts' />
/// <reference path='components/app.phones/directives/PhoneList.ts' />
/// <reference path='components/app.phones/directives/PhoneDetails.ts' />
//# sourceMappingURL=application.js.map