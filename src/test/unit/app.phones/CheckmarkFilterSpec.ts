namespace app.phones {

    describe('app.phones.checkmark', () => {

        describe('WHEN a boolean value is filtered with the checkmark filter', () => {
            var filter;

            beforeEach(() => {
                angular.mock.module('app.phones');
                inject((checkmarkFilter) => {
                    filter = checkmarkFilter;
                });
            });

            it('WILL convert boolean values to unicode checkmark or cross', () => {
                expect(filter(true)).toBe('\u2713');
                expect(filter(false)).toBe('\u2718');
            });

        });

    });

}
