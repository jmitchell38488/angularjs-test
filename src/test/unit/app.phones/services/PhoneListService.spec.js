'use strict';

describe('PhoneListService', function() {
    var $httpBackend;
    var PhoneListService;

    var phonesData = [];
    phonesData.push({name: 'Nexus S',snippet: 'Fast just got faster with Nexus S.'});
    phonesData.push({name: 'Motorola XOOM™ with Wi-Fi',snippet: 'The Next, Next Generation tablet.'});
    phonesData.push({name: 'MOTOROLA XOOM™',snippet: 'The Next, Next Generation tablet.'});

    beforeEach(module('app.phones'));

    beforeEach(function() {
        jasmine.addCustomEqualityTester(angular.equals);
    });

    beforeEach(inject(function(_$httpBackend_, _PhoneListService_) {
        $httpBackend = _$httpBackend_;
        $httpBackend.expectGET('src/app/res/phones/phones.json').respond(phonesData);

        PhoneListService = _PhoneListService_;
    }));

    // Verify that there are no outstanding expectations or requests after each test
    afterEach(function () {
        $httpBackend.verifyNoOutstandingExpectation();
        $httpBackend.verifyNoOutstandingRequest();
    });

    it('should fetch the phones data from `/src/app/res/phones/phones.json`', function() {
        var phoneList = PhoneListService.query();

        expect(phoneList).toEqual([]);

        $httpBackend.flush();
        expect(phoneList).toEqual(phonesData);
    });
});