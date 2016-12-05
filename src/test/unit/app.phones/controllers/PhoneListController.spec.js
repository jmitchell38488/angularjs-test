'use strict';

describe('app.phones', function() {
    beforeEach(module('app.phones'));

    describe('app.phones.PhoneListController', function() {
        var $httpBackend;
        var ctrl;
        var scope;

        var phonesData = [];
        phonesData.push({name: 'Nexus S',snippet: 'Fast just got faster with Nexus S.'});
        phonesData.push({name: 'Motorola XOOM™ with Wi-Fi',snippet: 'The Next, Next Generation tablet.'});
        phonesData.push({name: 'MOTOROLA XOOM™',snippet: 'The Next, Next Generation tablet.'});

        beforeEach(function() {
            jasmine.addCustomEqualityTester(angular.equals);
        });

        beforeEach(inject(function($rootScope, $controller, _$httpBackend_) {
            scope = $rootScope.$new();
            $httpBackend = _$httpBackend_;
            $httpBackend.expectGET('src/app/res/phones/phones.json').respond(phonesData);

            ctrl = $controller('app.phones.PhoneListController', {$scope: scope});
        }));

        afterEach(function () {
            $httpBackend.verifyNoOutstandingExpectation();
            $httpBackend.verifyNoOutstandingRequest();
        });

        it('should create a `phones` property with 3 phones fetched with `$http`', function() {
            expect(ctrl.phones).toEqual([]);

            $httpBackend.flush();
            expect(ctrl.phones).toEqual(phonesData);
        });

        it('should set a default value for the `orderProp` property', function() {
            $httpBackend.flush();
            expect(ctrl.orderProp).toBe('age');
        });

        it('should expect `getPhoneList()` to return 3 phones fetched with `$http`', function() {
            expect(ctrl.getPhoneList()).toEqual([]);

            $httpBackend.flush();
            expect(ctrl.getPhoneList()).toEqual(phonesData);
        })

        it('should expect `getOrderProp()` to return the value for the `orderProp` property', function() {
            $httpBackend.flush();
            expect(ctrl.getOrderProp()).toBe('age');
        })

    });

});
