'use strict';

describe('app.phones', function() {
    beforeEach(module('app.phones'));

    describe('app.phones.PhoneDetailsController', function() {
        var $httpBackend;
        var $q;
        var $rootScope;
        var ctrl;
        var PhoneListService;

        var phoneData = {
            id: 1, age: 2, name: 'Nexus S',
            description: 'Fast just got faster with Nexus S.',
            images: [
                "res/img/phones/image.0.jpg",
                "res/img/phones/image.1.jpg"
            ]
        };

        beforeEach(function() {
            jasmine.addCustomEqualityTester(angular.equals);
        });

        beforeEach(inject(function($controller, _$httpBackend_, $routeParams, _PhoneListService_, _$q_, _$rootScope_) {
            $q = _$q_;
            $rootScope = _$rootScope_;
            $httpBackend = _$httpBackend_;
            $httpBackend.when('GET', 'src/app/res/phones/1.json').respond(phoneData);

            $routeParams.phoneId = 1;
            PhoneListService = _PhoneListService_;

            ctrl = $controller('app.phones.PhoneDetailsController', {$routeParams: $routeParams, PhoneListService: PhoneListService});
        }));

        afterEach(function () {
            $httpBackend.verifyNoOutstandingExpectation();
            $httpBackend.verifyNoOutstandingRequest();
        });

        it('should fetch phone details with `$http`', function() {
            // Returns a promise
            var details = PhoneListService.get({phoneId: '1'});
            expect(details).toBeDefined();

            $httpBackend.flush();
            expect(ctrl.phoneDetails).toEqual(phoneData);
        });

        it('should fetch images in phone details with `$http`', function() {
            $httpBackend.flush();
            expect(ctrl.images).toEqual(phoneData.images);
        });

        it('should provide full uri for image path with `getImageUrl()`', function() {
            $httpBackend.flush();
            expect(ctrl.getImageUrl(phoneData.images[0])).toBe("src/app/res/" + phoneData.images[0]);
        });

        it('should provide current selected image with `getCurrentImage()`', function() {
            $httpBackend.flush();
            expect(ctrl.getCurrentImage()).toBe(phoneData.images[0]);
        });

        it('should return full image list with `getImageList()`', function() {
            $httpBackend.flush();
            expect(ctrl.getImageList()).toEqual(phoneData.images);
        });

        it('should fetch phone details with `getPhoneDetails`', function() {
            $httpBackend.flush();
            expect(ctrl.getPhoneDetails()).toEqual(phoneData);
        });

        it('should update current image with new image', function() {
            $httpBackend.flush();
            ctrl.setCurrentImage(phoneData.images[1]);
            expect(ctrl.getCurrentImage()).toBe(phoneData.images[1]);
        });

    });

});
