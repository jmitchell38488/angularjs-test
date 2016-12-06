var app;
(function (app) {
    var phones;
    (function (phones) {
        describe('Testing Filter: app.phones.checkmark', function () {
            var filter;
            beforeEach(function () {
                angular.mock.module('app.phones');
                inject(function (checkmarkFilter) {
                    filter = checkmarkFilter;
                });
            });
            it('should convert boolean values to unicode checkmark or cross', function () {
                expect(filter(true)).toBe('\u2713');
                expect(filter(false)).toBe('\u2718');
            });
        });
    })(phones = app.phones || (app.phones = {}));
})(app || (app = {}));
