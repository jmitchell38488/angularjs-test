namespace app.phones {

    describe ('Testing Filter: app.phones.checkmark', () => {

        var filter;

        beforeEach(() => {
            angular.mock.module('app.phones');

            inject((checkmarkFilter) => {
                filter = checkmarkFilter;
            });
        });

        it ('should convert boolean values to unicode checkmark or cross', () => {
            expect(filter(true)).toBe('\u2713');
            expect(filter(false)).toBe('\u2718');
        });

    });

}
