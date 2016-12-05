'use strict';

describe('PhoneListService', function() {
    var $httpBackend;
    var PhoneListService;

    var phonesData = [];
    phonesData.push({id: 0, age: 2, name: 'Nexus S',snippet: 'Fast just got faster with Nexus S.'});
    phonesData.push({id: 1, age: 1, name: 'Motorola XOOM™ with Wi-Fi',snippet: 'The Next, Next Generation tablet.'});
    phonesData.push({id: 2, age: 0, name: 'MOTOROLA XOOM™',snippet: 'The Next, Next Generation tablet.'});

    var phoneDetails = phonesData[1];

    beforeEach(module('app.phones'));

    beforeEach(function() {
        jasmine.addCustomEqualityTester(angular.equals);
    });

    beforeEach(inject(function(_$httpBackend_, _PhoneListService_) {
        $httpBackend = _$httpBackend_;
        $httpBackend.when('GET', 'res/phones/phones.json').respond(phonesData);
        $httpBackend.when('GET', 'res/phones/1.json').respond(phoneDetails);

        PhoneListService = _PhoneListService_;
    }));

    // Verify that there are no outstanding expectations or requests after each test
    afterEach(function () {
        $httpBackend.verifyNoOutstandingExpectation();
        $httpBackend.verifyNoOutstandingRequest();
    });

    it('should fetch the phones data from `res/phones/phones.json`', function() {
        var phoneList = PhoneListService.query();

        expect(phoneList).toEqual([]);

        $httpBackend.flush();
        expect(phoneList).toEqual(phonesData);
    });

    it('should fetch single phone data from `res/phones/1.json`', function() {
        var details = PhoneListService.get({phoneId: '1'});

        expect(details).not.toBe(undefined);

        $httpBackend.flush();

        expect(details).toEqual(phoneDetails);
    });
});