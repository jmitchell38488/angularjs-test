namespace app.phones {

    describe('app.phones.PhoneListController', () => {

        var $httpBackend;
        var ctrl;
        var phoneListResource: IPhoneListResource;
        var phonesData: IPhoneList[] = [
            {id: 0, age: 2, imageUrl: "", name: 'Nexus S',snippet: 'Fast just got faster with Nexus S.'},
            {id: 1, age: 1, imageUrl: "", name: 'Motorola XOOM™ with Wi-Fi',snippet: 'The Next, Next Generation tablet.'},
            {id: 2, age: 0, imageUrl: "", name: 'MOTOROLA XOOM™',snippet: 'The Next, Next Generation tablet.'}
        ];

        beforeEach(() => {
            jasmine.addCustomEqualityTester(angular.equals);
            angular.mock.module('app.phones');

            inject((_$httpBackend_, _PhoneListResource_, _PhoneDetailsResource_, $injector) => {
                $httpBackend = _$httpBackend_;
                $httpBackend.when('GET', '/res/phones/phones.json').respond(phonesData);

                phoneListResource = _PhoneListResource_;

                ctrl = $injector.get('$controller')('app.phones.PhoneListController', {PhoneListResource: phoneListResource});
            });
        });

        describe('WHEN I instantiate a new controller', () => {

            afterEach(function () {
                $httpBackend.verifyNoOutstandingExpectation();
                $httpBackend.verifyNoOutstandingRequest();
            });

            it('WILL create a `phoneList` property with 3 phones fetched with `$http`', () => {
                expect(ctrl.phoneList).toBeUndefined();

                $httpBackend.flush();
                expect(ctrl.phoneList).toEqual(phonesData);
            });

            it('WILL set a default value for the `orderProp` property', () => {
                $httpBackend.flush();
                expect(ctrl.orderProp).toBe('age');
            });

            it('WILL set a default value for the `query` property', () => {
                $httpBackend.flush();
                expect(ctrl.query).toBe('');
            });

        });

    });

}
