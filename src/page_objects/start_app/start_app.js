const startBtn = '//*[@text="Start the experience"]'

class start_app {
    get startBtn() {
        $(startBtn).waitForDisplayed({timeout: 5000})
        return $(startBtn)
    }
}
export default new start_app()