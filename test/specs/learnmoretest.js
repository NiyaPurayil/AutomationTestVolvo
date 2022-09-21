const homepage = require("../pageobjects/homepage");


describe("Learn More Section", () => {
  it("should exist and navigate to url", async () => {
    await homepage.open();
    await homepage.acceptAllCoockie();
    browser.pause(5000)
    const learnMorebtn = await $(
      "//a[@href='/intl/v/car-safety/safety-heritage']"
    ).click();
    
    expect(learnMorebtn).toExist;
    expect(learnMorebtn).toBeEnabled;

    var url = browser.getUrl();

    await expect(browser).toHaveUrl("https://www.volvocars.com/intl/v/car-safety/safety-heritage");

  });
});