describe('Account Login', () => {
    it('should navigate to login', () => {
        const start = '//*[@text="Start the experience"]'
        $(start).waitForDisplayed({timeout: 5000})
        $(start).click()
        const search = '~searchbtn'
        $(search).waitForDisplayed({timeout: 5000})
        $(search).click()
        const login = '~viewtest'
        $(login).waitForDisplayed({timeout: 5000})
        $(login).click()
        browser.pause(50000)
    });
});
