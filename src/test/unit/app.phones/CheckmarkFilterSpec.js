var app;
(function (app) {
    var phones;
    (function (phones) {
        describe('app.phones.checkmark', function () {
            describe('WHEN a boolean value is filtered with the checkmark filter', function () {
                var filter;
                beforeEach(function () {
                    angular.mock.module('app.phones');
                    inject(function (checkmarkFilter) {
                        filter = checkmarkFilter;
                    });
                });
                it('WILL convert boolean values to unicode checkmark or cross', function () {
                    expect(filter(true)).toBe('\u2713');
                    expect(filter(false)).toBe('\u2718');
                });
            });
        });
    })(phones = app.phones || (app.phones = {}));
})(app || (app = {}));
