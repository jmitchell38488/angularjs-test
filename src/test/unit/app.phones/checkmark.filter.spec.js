'use strict';

describe('app.phones.checkmark', function() {

    beforeEach(module('app.phones'));

    it('should convert boolean values to unicode checkmark or cross',
        inject(function(checkmarkFilter) {
            expect(checkmarkFilter(true)).toBe('\u2713');
            expect(checkmarkFilter(false)).toBe('\u2718');
        })
    );

});
