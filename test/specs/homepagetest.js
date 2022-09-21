const homePage = require('../pageobjects/homepage')
const constants = require('../constants')
const elementUtil = require('../pageobjects/elementUtil.js')
var assert = require('assert')

describe('Home Page features test: ', function(){
    const start = Date.now()
    it('Check browser details', function() {
   // browser.url('https://www.whatismybrowser.com')
    const elem = $('.string-major')
    const result = elem.getText()
    })
    it('Should have the correct URL and title', function(){
        browser.url('/intl/v/car-safety/a-million-more')
        homePage.acceptAllCoockie();
        browser.maximizeWindow()
        const URLtitle = homePage.getPageURLAndTitle
        expect(browser).toHaveUrl(constants.HOME_PAGE_URL)
        expect(browser).toHaveTitle(constants.HOME_PAGE_TITLE)
       
    })

    it("should exist and be correct", async () => {
        
        const headerElem = await $("//*[@id='ModelIntro-1']/section/h2");
        expect(headerElem).toExist;
        const text = await headerElem.getText();
        expect(text).toContain("Ideas that change the world");
        
      });

    it('Video button exists', async function() {
       const btn = await $("//*[@id='Video-1']/section/div/div/div/button");
       expect(btn).toExist;
       expect(btn).toBeEnabled;
       const text = await btn.getText();
       expect(text).toContain("WATCH THE STORY");
    
    })

    it("should contain all cars and working buttons to navigate", async () => {
        
        for (let index = 1; index < 9; index++) {
          const item = await $(
            `//*[@id='ProductListCarousel-1']/*/div[1]/*/*/*/div[1]/*/*/*/*/div[${index}]`);
             await expect(item.getText()).not.toEqual("");
        }
    
        let recharge = await $(`//a[@data-autoid='ProductListCarousel:cta1']`);
        await expect(recharge).toHaveHref("/intl/v/cars/recharge");
    
        recharge = await $("//a[@data-autoid='ProductListCarousel:cta2']");
        await expect(recharge).toHaveHref("/intl/v/cars/other-powertrains");
    })
   
    it('Play Video, go to Cookies Page and check Title', function() {
        browser.url('/intl/v/car-safety/a-million-more')
        const paragraph = $("//div[2]/div/button[contains(text(),'Accept')]")
        paragraph.click()
		browser.pause(5000)
        const watchVid = $("//div/button[contains(text(),'watch the story')]")
        watchVid.click()
		browser.pause(3000)
        const cookies = $("//span[1]/a[1][contains(text(),'Cookies')]")
        cookies.click()
		browser.pause(5000)
        const cookieTitle = homePage.getUrlAndTitle
        console.log('Time taken :')
        console.log((Date.now() - start)/1000+' seconds')
    })
})