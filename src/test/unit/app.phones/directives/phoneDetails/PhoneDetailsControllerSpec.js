var app;
(function (app) {
    var phones;
    (function (phones) {
        describe('app.phones.PhoneDetailsController', function () {
            var $httpBackend;
            var $q;
            var $scope;
            var deferred;
            var ctrl;
            var phoneRefDataService;
            var phoneDetails = {
                "additionalFeatures": "Sensors: proximity, ambient light, barometer, gyroscope",
                "android": {
                    "os": "Android 3.0",
                    "ui": "Honeycomb"
                },
                "availability": [
                    ""
                ],
                "battery": {
                    "standbyTime": "336 hours",
                    "talkTime": "24 hours",
                    "type": "Other ( mAH)"
                },
                "camera": {
                    "features": [
                        "Flash",
                        "Video"
                    ],
                    "primary": "5.0 megapixels"
                },
                "connectivity": {
                    "bluetooth": "Bluetooth 2.1",
                    "cell": "",
                    "gps": true,
                    "infrared": false,
                    "wifi": "802.11 b/g/n"
                },
                "description": "Motorola XOOM with Wi-Fi has a super-powerful dual-core processor and Android\u2122 3.0 (Honeycomb) \u2014 the Android platform designed specifically for tablets. With its 10.1-inch HD widescreen display, you\u2019ll enjoy HD video in a thin, light, powerful and upgradeable tablet.",
                "display": {
                    "screenResolution": "WXGA (1200 x 800)",
                    "screenSize": "10.1 inches",
                    "touchScreen": true
                },
                "hardware": {
                    "accelerometer": true,
                    "audioJack": "3.5mm",
                    "cpu": "1 GHz Dual Core Tegra 2",
                    "fmRadio": false,
                    "physicalKeyboard": false,
                    "usb": "USB 2.0"
                },
                "id": "motorola-xoom-with-wi-fi",
                "images": [
                    "res/img/phones/motorola-xoom-with-wi-fi.0.jpg",
                    "res/img/phones/motorola-xoom-with-wi-fi.1.jpg",
                    "res/img/phones/motorola-xoom-with-wi-fi.2.jpg",
                    "res/img/phones/motorola-xoom-with-wi-fi.3.jpg",
                    "res/img/phones/motorola-xoom-with-wi-fi.4.jpg",
                    "res/img/phones/motorola-xoom-with-wi-fi.5.jpg"
                ],
                "name": "Motorola XOOM\u2122 with Wi-Fi",
                "sizeAndWeight": {
                    "dimensions": [
                        "249.1 mm (w)",
                        "167.8 mm (h)",
                        "12.9 mm (d)"
                    ],
                    "weight": "708.0 grams"
                },
                "storage": {
                    "flash": "32000MB",
                    "ram": "1000MB"
                }
            };
            beforeEach(function () {
                jasmine.addCustomEqualityTester(angular.equals);
                angular.mock.module('app.phones');
                inject(function (_$httpBackend_, _$q_, $injector, $routeParams, _$rootScope_) {
                    $q = _$q_;
                    $scope = _$rootScope_.$new();
                    deferred = _$q_.defer();
                    $httpBackend = _$httpBackend_;
                    $httpBackend.when('GET', '/res/phones/test123.json').respond(phoneDetails);
                    $routeParams.phoneId = 'test123';
                    phoneRefDataService = jasmine.createSpyObj('PhoneRefDataService', ['getPhoneDetails']);
                    phoneRefDataService.getPhoneDetails.and.returnValue(deferred.promise);
                    ctrl = $injector.get('$controller')('app.phones.PhoneDetailsController', { $routeParams: $routeParams, IPhoneDetailsResource: phoneRefDataService });
                });
            });
            describe('WHEN I instantiate a new controller', function () {
                afterEach(function () {
                    $httpBackend.verifyNoOutstandingExpectation();
                    $httpBackend.verifyNoOutstandingRequest();
                });
                it('WILL fetch phone details with `$http`', function () {
                    deferred.resolve([phoneDetails]);
                    $scope.$apply();
                    $httpBackend.flush();
                    expect(ctrl.phoneDetails).toEqual(phoneDetails);
                });
                it('WILL set `imageList` to be the images fetched from `$http`', function () {
                    deferred.resolve([phoneDetails]);
                    $scope.$apply();
                    $httpBackend.flush();
                    expect(ctrl.imageList).toEqual(phoneDetails.images);
                });
                it('WILL set `currentImage` to be the first image in the imageList property', function () {
                    deferred.resolve([phoneDetails]);
                    $scope.$apply();
                    $httpBackend.flush();
                    expect(ctrl.currentImage).toBe(phoneDetails.images[0]);
                });
            });
            describe('WHEN I change the current image', function () {
                afterEach(function () {
                    $httpBackend.verifyNoOutstandingExpectation();
                    $httpBackend.verifyNoOutstandingRequest();
                });
                it('WILL update the current image to the new image', function () {
                    deferred.resolve([phoneDetails]);
                    $scope.$apply();
                    $httpBackend.flush();
                    ctrl.currentImage = phoneDetails.images[1];
                    expect(ctrl.currentImage).toBe(phoneDetails.images[1]);
                });
            });
        });
    })(phones = app.phones || (app.phones = {}));
})(app || (app = {}));
