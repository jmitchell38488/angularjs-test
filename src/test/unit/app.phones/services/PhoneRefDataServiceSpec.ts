namespace app.phones {

    describe('app.phones.PhoneListService', () => {
        var $httpBackend;
        var $q;
        var deferred;
        var $scope;
        var phoneRefDataService: IPhoneRefDataService;

        var phonesData: IPhoneList[] = [
            {id: 0, age: 2, imageUrl: "", name: 'Nexus S',snippet: 'Fast just got faster with Nexus S.'},
            {id: 1, age: 1, imageUrl: "", name: 'Motorola XOOM™ with Wi-Fi',snippet: 'The Next, Next Generation tablet.'},
            {id: 2, age: 0, imageUrl: "", name: 'MOTOROLA XOOM™',snippet: 'The Next, Next Generation tablet.'}
        ];

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
        }

        beforeEach(() => {
            jasmine.addCustomEqualityTester(angular.equals);
            angular.mock.module('app.phones');

            inject((_$httpBackend_, _$q_, _$rootScope_, _$http_) => {
                $q = _$q_;
                deferred = _$q_.defer();
                $scope = _$rootScope_.$new();
                $httpBackend = _$httpBackend_;
                $httpBackend.when('GET', '/res/phones/phones.json').respond(phonesData);
                $httpBackend.when('GET', '/res/phones/test123.json').respond(phoneDetails);

                phoneRefDataService = new app.phones.PhoneRefDataService(_$http_, $q);
            });
        });

        afterEach(function () {
            $httpBackend.verifyNoOutstandingExpectation();
            $httpBackend.verifyNoOutstandingRequest();
        });

        describe('WHEN I request phone list data from `res/phones/phones.json`', () => {
            it('WILL return valid phone data', () => {
                var phoneList = phoneRefDataService.getPhoneList();
                expect(phoneList).not.toBeUndefined();

                var response = [];
                deferred.promise.then((data) => {
                    response = phonesData;
                });

                deferred.resolve([phonesData]);
                $scope.$apply();

                $httpBackend.flush();
                expect(response).toEqual(phonesData);
            });
        });

        describe('WHEN I request phone detail data from`res/phones/test123.json`', () => {
            it('WILL return valid phone detail data', () => {
                var phoneDetails = phoneRefDataService.getPhoneDetails({id: 'test123'});
                expect(phoneDetails).not.toBeUndefined();

                var response = [];
                deferred.promise.then((data) => {
                    response = phoneDetails;
                });

                deferred.resolve([phoneDetails]);
                $scope.$apply();

                $httpBackend.flush();
                expect(response).toEqual(phoneDetails);
            });
        });

    });

}