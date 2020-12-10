import firstOpen from "../../page_objects/start_app/start_app"

describe('Fist time open App', () => {
    
    it('should navigate to home menu', () => {
        firstOpen.startBtn.click()
        const homeScreen = $('//android.widget.TextView[@resource-id="com.superringtone.christmas.ring_collections:id/name_title"]')
        homeScreen.waitForDisplayed()
        expect(homeScreen).toHaveText("Christmas Ringtones")
        console.log("You're in home screen")
    });
});