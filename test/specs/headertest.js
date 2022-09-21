const homePage = require('../pageobjects/homepage')

/* We create couple of test cases and the rest are the same
 * And I dont do much assertion because it takes time
 * But in real testing we will do some Assertions as well
 */

describe("Navigate to Menu and Our Cars", () => {
  it("should exist and be correct", async () => {
    await homePage.open();
    await homePage.acceptAllCoockie();
    await homePage.getCarsMenu();
    browser.pause(5000)
    await homePage.getMenu();
  });
});