describe('E2E: Phone List Page', () => {

    beforeAll(() => {
        browser.ignoreSynchronization = false;
        browser.driver.manage().window().setSize(1280, 1024);
    });

    describe('WHEN the user requests an invalid page', () => {
        beforeEach(function() {
            browser.get('index.html');
        });

        it('WILL redirect to the list page', () => {
            expect(browser.getLocationAbsUrl()).toBe('/phones');
        })
    });

    describe('View: Phone List', () => {
        describe('WHEN the user types into the search box', () => {
            beforeEach(function() {
                browser.get('index.html#!/phones');
            });

            it('WILL filter the phone list by the users input', () => {
                var phoneList = element.all(by.repeater('phone in phoneListCtrl.phoneList'));
                var query = element(by.model('phoneListCtrl.query'));

                expect(phoneList.count()).toBe(20);

                query.sendKeys('nexus');
                expect(phoneList.count()).toBe(1);

                query.clear();
                query.sendKeys('motorola');
                expect(phoneList.count()).toBe(8);
            });
        });

        describe('WHEN the user uses the drop-down menu to change order', () => {
            beforeEach(function() {
                browser.get('index.html#!/phones');
            });

            it('WILL change the order of the items based on the users selection', () => {
                var queryField = element(by.model('phoneListCtrl.query'));
                var orderSelect = element(by.model('phoneListCtrl.orderProp'));
                var nameOption = orderSelect.element(by.css('option[value="name"]'));
                var phoneNameColumn = element.all(by.repeater('phone in phoneListCtrl.phoneList').column('phone.name'));

                function getNames() {
                    return phoneNameColumn.map(function(elem) {
                        return elem.getText();
                    });
                }

                queryField.sendKeys('tablet');   // Let's narrow the dataset to make the assertions shorter

                expect(getNames()).toEqual([
                    'Motorola XOOM\u2122 with Wi-Fi',
                    'MOTOROLA XOOM\u2122'
                ]);

                nameOption.click();

                expect(getNames()).toEqual([
                    'MOTOROLA XOOM\u2122',
                    'Motorola XOOM\u2122 with Wi-Fi'
                ]);
            });
        });

        describe('WHEN a phone in the phone list is rendered', () => {
            beforeEach(function() {
                browser.get('index.html#!/phones');
            });

            it('WILL render the phone specific detail link', () => {
                var query = element(by.model('phoneListCtrl.query'));
                query.sendKeys('nexus');

                element.all(by.css('.phones li a')).first().click();
                expect(browser.getLocationAbsUrl()).toBe('/phones/nexus-s');
            });
        });
    });

});