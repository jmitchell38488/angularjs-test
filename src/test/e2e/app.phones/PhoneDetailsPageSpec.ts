describe('E2E: Phone List Page', () => {

    beforeAll(() => {
        browser.ignoreSynchronization = false;
        browser.driver.manage().window().setSize(1280, 1024);
    });

    describe('WHEN the user requests an invalid details page', () => {
        beforeEach(function () {
            browser.get('index.html#!/phones/abc123');
        });

        it('WILL redirect to the list page', () => {
            expect(browser.getLocationAbsUrl()).toBe('/phones');
        })
    });

    describe('View: Phone Details', () => {
        describe('WHEN a user clicks on the `nexus-s` phone', () => {
            beforeEach(function() {
                browser.get('index.html#!/phones/nexus-s');
            });

            it('WILL display the `nexus-s` details page', () => {
                expect(element(by.binding('phoneDetailsCtrl.phoneDetails.name')).getText()).toBe('Nexus S');
            });
        });

        describe('WHEN the `nexus-s` page is displayed', () => {
            beforeEach(function() {
                browser.get('index.html#!/phones/nexus-s');
            });

            it('WILL display the first phone image as the main image', () => {
                var mainImage = element(by.css('img.phone.selected'));

                expect(mainImage.getAttribute('src')).toMatch(/res\/img\/phones\/nexus-s.0.jpg/);
            });
        });

        describe('WHEN a user clicks on a thumbnail in the image gallery', () => {
            beforeEach(function() {
                browser.get('index.html#!/phones/nexus-s');
            });

            it('WILL swap the main image with the clicked on image', () => {
                var mainImage = element(by.css('img.phone.selected'));
                var thumbnails = element.all(by.css('.phone-thumbs img'));

                thumbnails.get(2).click();
                expect(mainImage.getAttribute('src')).toMatch(/res\/img\/phones\/nexus-s.2.jpg/);

                thumbnails.get(0).click();
                expect(mainImage.getAttribute('src')).toMatch(/res\/img\/phones\/nexus-s.0.jpg/);
            });
        });

    });

});