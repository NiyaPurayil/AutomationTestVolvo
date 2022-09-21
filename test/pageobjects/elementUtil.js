class elementUtil {
    doIsDisplayed(element) {
        element.waitForDisplayed()
        return element.isDisplayed()
    }
}
module.exports = new elementUtil()