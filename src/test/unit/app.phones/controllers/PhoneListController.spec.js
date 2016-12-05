'use strict';

describe('app.phones', function() {
    beforeEach(module('app.phones'));

    describe('app.phones.PhoneListController', function() {
        var $httpBackend;
        var $filterQuery;
        var $filterOrder;
        var ctrl;
        var scope;

        var phonesData = [];
        phonesData.push({id: 0, age: 2, name: 'Nexus S',snippet: 'Fast just got faster with Nexus S.'});
        phonesData.push({id: 1, age: 1, name: 'Motorola XOOM™ with Wi-Fi',snippet: 'The Next, Next Generation tablet.'});
        phonesData.push({id: 2, age: 0, name: 'MOTOROLA XOOM™',snippet: 'The Next, Next Generation tablet.'});

        beforeEach(function() {
            jasmine.addCustomEqualityTester(angular.equals);
        });

        beforeEach(inject(function($injector) {
            $filterQuery = $injector.get('$filter')('filter');
            $filterOrder = $injector.get('$filter')('orderBy');
        }));

        beforeEach(inject(function($rootScope, $controller, _$httpBackend_) {
            scope = $rootScope.$new();
            $httpBackend = _$httpBackend_;
            $httpBackend.when('GET', 'res/phones/phones.json').respond(phonesData);

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

        it('should set a default value for the `query` property', function() {
            $httpBackend.flush();
            expect(ctrl.query).toBe('');
        });

        it('should expect `getPhoneList()` to return 3 phones fetched with `$http`', function() {
            expect(ctrl.getPhoneList()).toEqual([]);

            $httpBackend.flush();
            expect(ctrl.getPhoneList()).toEqual(phonesData);
        });

        it('should expect `getOrderProp()` to return the value for the `orderProp` property', function() {
            $httpBackend.flush();
            expect(ctrl.getOrderProp()).toBe('age');
        });

        it('should expect `getOrderProp()` to return value of `query`', function() {
            $httpBackend.flush();

            var query = 'XOOM';
            ctrl.query = query;
            expect(ctrl.getQuery()).toBe(query);
        });

        it('should expect `query` to filter phone list, return 2', function() {
            $httpBackend.flush();

            var query = 'XOOM';
            var list = [];
            var phones = [];

            angular.copy(phonesData, list);
            angular.copy(phonesData, phones);

            phones = phones.slice(1);
            expect($filterQuery(list, query)).toEqual(phones);
        });

        it('should expect `orderProp` to order phone list', function() {
            $httpBackend.flush();
            var order = 'age';
            var list = [];
            var phones = [];

            angular.copy(phonesData, list);
            angular.copy(phonesData, phones);

            phones.reverse();

            expect($filterOrder(list, order)).toEqual(phones);
        })

    });

});
