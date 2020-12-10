const {config} = require('./main')

config.capabilities = [{
    "deviceName": "API29",
    "platformName": "Android",
    "automationName": "UiAutomator2",
    "udid": "emulator-5554",
    "appPackage": "com.superringtone.christmas.ring_collections",
    "appActivity": ".StartActivity"
}]

exports.config = config