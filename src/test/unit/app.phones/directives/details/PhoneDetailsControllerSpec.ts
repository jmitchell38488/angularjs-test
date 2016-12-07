namespace app.phones {

    describe('app.phones.PhoneDetailsController', () => {

        var $httpBackend;
        var ctrl;
        var phoneDetailsResource: IPhoneDetailsResource;
        var phoneDetails: IPhoneDetails = {
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

        beforeEach(() => {
            jasmine.addCustomEqualityTester(angular.equals);
            angular.mock.module('app.phones');

            inject((_$httpBackend_, _PhoneDetailsResource_, $injector, $routeParams) => {
                $httpBackend = _$httpBackend_;
                $httpBackend.when('GET', '/res/phones/test123.json').respond(phoneDetails);

                $routeParams.phoneId = 'test123';
                phoneDetailsResource = _PhoneDetailsResource_;
                ctrl = $injector.get('$controller')('app.phones.PhoneDetailsController', {$routeParams: $routeParams, IPhoneDetailsResource: phoneDetailsResource});
            });
        });

        describe('WHEN I instantiate a new controller', () => {

            afterEach(function () {
                $httpBackend.verifyNoOutstandingExpectation();
                $httpBackend.verifyNoOutstandingRequest();
            });

            it('WILL fetch phone details with `$http`', function() {
                // Returns a promise
                var details = phoneDetailsResource.get({id: 'test123'});
                expect(details).toBeDefined();

                $httpBackend.flush();
                expect(ctrl.phoneDetails).toEqual(phoneDetails);
            });

            it('WILL set `imageList` to be the images fetched from `$http`', function() {
                $httpBackend.flush();
                expect(ctrl.imageList).toEqual(phoneDetails.images);
            });

            it('WILL set `currentImage` to be the first image in the imageList property', function() {
                $httpBackend.flush();
                expect(ctrl.currentImage).toBe(phoneDetails.images[0]);
            });

        });

        describe('WHEN I change the current image', () => {

            afterEach(function () {
                $httpBackend.verifyNoOutstandingExpectation();
                $httpBackend.verifyNoOutstandingRequest();
            });

            it('WILL update the current image to the new image', function() {
                $httpBackend.flush();
                ctrl.currentImage = phoneDetails.images[1];
                expect(ctrl.currentImage).toBe(phoneDetails.images[1]);
            });
        });
        
    });
    
}