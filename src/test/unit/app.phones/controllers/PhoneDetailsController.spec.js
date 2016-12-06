var app;
(function (app) {
    var phones;
    (function (phones) {
        describe('Testing Controller: app.phones.PhoneDetailsController', function () {
            var $httpBackend;
            var ctrl;
            var phoneDetailsResource;
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
                inject(function (_$httpBackend_, _PhoneDetailsResource_, $injector, $routeParams) {
                    $httpBackend = _$httpBackend_;
                    $httpBackend.when('GET', '/res/phones/test123.json').respond(phoneDetails);
                    phoneDetailsResource = _PhoneDetailsResource_;
                    $routeParams.phoneId = 'test123';
                    ctrl = $injector.get('$controller')('app.phones.PhoneDetailsController', { $routeParams: $routeParams, IPhoneDetailsResource: phoneDetailsResource });
                });
            });
            afterEach(function () {
                $httpBackend.verifyNoOutstandingExpectation();
                $httpBackend.verifyNoOutstandingRequest();
            });
            it('should fetch phone details with `$http`', function () {
                // Returns a promise
                var details = phoneDetailsResource.get({ id: 'test123' });
                expect(details).toBeDefined();
                $httpBackend.flush();
                expect(ctrl.phoneDetails).toEqual(phoneDetails);
            });
            it('should fetch images in phone details with `$http`', function () {
                $httpBackend.flush();
                expect(ctrl.images).toEqual(phoneDetails.images);
            });
            it('should provide current selected image with `getCurrentImage()`', function () {
                $httpBackend.flush();
                expect(ctrl.getCurrentImage()).toBe(phoneDetails.images[0]);
            });
            it('should return full image list with `getImageList()`', function () {
                $httpBackend.flush();
                expect(ctrl.getImageList()).toEqual(phoneDetails.images);
            });
            it('should fetch phone details with `getPhoneDetails`', function () {
                $httpBackend.flush();
                expect(ctrl.getPhoneDetails()).toEqual(phoneDetails);
            });
            it('should update current image with new image', function () {
                $httpBackend.flush();
                ctrl.setCurrentImage(phoneDetails.images[1]);
                expect(ctrl.getCurrentImage()).toBe(phoneDetails.images[1]);
            });
        });
    })(phones = app.phones || (app.phones = {}));
})(app || (app = {}));
