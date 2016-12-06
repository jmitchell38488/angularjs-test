namespace app.phones {

    describe('Testing Controller: app.phones.PhoneListController', () => {

        var $httpBackend;
        var $filterQuery;
        var $filterOrder;
        var ctrl;
        var phoneListResource: IPhoneListResource;
        var phoneDetailsResource: IPhoneDetailsResource;

        var phonesData = [
            {id: 0, age: 2, imageUrl: "", name: 'Nexus S',snippet: 'Fast just got faster with Nexus S.'},
            {id: 1, age: 1, imageUrl: "", name: 'Motorola XOOM™ with Wi-Fi',snippet: 'The Next, Next Generation tablet.'},
            {id: 2, age: 0, imageUrl: "", name: 'MOTOROLA XOOM™',snippet: 'The Next, Next Generation tablet.'}
        ];

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
        }

        beforeEach(() => {
            jasmine.addCustomEqualityTester(angular.equals);
            angular.mock.module('app.phones');

            inject((_$httpBackend_, _PhoneListResource_, _PhoneDetailsResource_, $injector) => {
                $filterQuery = $injector.get('$filter')('filter');
                $filterOrder = $injector.get('$filter')('orderBy');

                $httpBackend = _$httpBackend_;
                $httpBackend.when('GET', '/res/phones/phones.json').respond(phonesData);
                $httpBackend.when('GET', '/res/phones/test123.json').respond(phoneDetails);

                phoneListResource = _PhoneListResource_;
                phoneDetailsResource = _PhoneDetailsResource_;

                ctrl = $injector.get('$controller')('app.phones.PhoneListController', {PhoneListResource: phoneListResource});
            });
        });

        afterEach(function () {
            $httpBackend.verifyNoOutstandingExpectation();
            $httpBackend.verifyNoOutstandingRequest();
        });

        it('should create a `phones` property with 3 phones fetched with `$http`', () => {
            expect(ctrl.phones).toEqual([]);

            $httpBackend.flush();
            expect(ctrl.phones).toEqual(phonesData);
        });

        it('should set a default value for the `orderProp` property', () => {
            $httpBackend.flush();
            expect(ctrl.orderProp).toBe('age');
        });

        it('should set a default value for the `query` property', () => {
            $httpBackend.flush();
            expect(ctrl.query).toBe('');
        });

        it('should expect `getPhoneList()` to return 3 phones fetched with `$http`', () => {
            expect(ctrl.getPhoneList()).toEqual([]);

            $httpBackend.flush();
            expect(ctrl.getPhoneList()).toEqual(phonesData);
        });

        it('should expect `getOrderProp()` to return the value for the `orderProp` property', () => {
            $httpBackend.flush();
            expect(ctrl.getOrderProp()).toBe('age');
        });

        it('should expect `getQuery()` to return value of `query`', () => {
            $httpBackend.flush();

            var query = 'XOOM';
            ctrl.query = query;
            expect(ctrl.getQuery()).toBe(query);
        });

        it('should expect `query` to filter phone list, return 2', () => {
            $httpBackend.flush();

            var query = 'XOOM';
            var list = [];
            var phones = [];

            angular.copy(phonesData, list);
            angular.copy(phonesData, phones);

            phones = phones.slice(1);
            expect($filterQuery(list, query)).toEqual(phones);
        });

        it('should expect `orderProp` to order phone list', () => {
            $httpBackend.flush();
            var order = 'age';
            var list = [];
            var phones = [];

            angular.copy(phonesData, list);
            angular.copy(phonesData, phones);

            phones.reverse();

            expect($filterOrder(list, order)).toEqual(phones);
        });
    });

}
