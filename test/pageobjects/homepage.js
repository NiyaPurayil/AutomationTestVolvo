const Page = require("./page");
const elementUtil = require('./elementUtil.js')

class homePage extends Page {
    //Page Locators
    get videoButton() {return $("#Video-1 button")} //"Watch the Story video button"
    get acceptButton() {return $('=Accept')} //"Accept button"
    get disclaimerExists() {return $('#Disclaimer-1')} //"Disclaimer"
    get copyrightExists() {return $('#Copyright')} //"Disclaimer
    //Page actions
    getPageURLAndTitle() {
        return {
            title: browser.getTitle(),
            url: browser.getUrl()
        }
    }
    isVideoButtonExists() {
        return elementUtil.doIsDisplayed(this.videoButton)
    }
    
    isCopyrightExists() {
        return elementUtil.doIsDisplayed(this.copyrightExists)
    }
    get menuMenu() {
        return $("//*[@id='sitenav-sidenav-toggle']");
      }
    
      get ourCarsMenu() {
        return $("//*[@id='sitenav:topbar:cars']");
      }

      
      get acceptCookies() { return $("//button[text()='Accept']")}
      async acceptAllCoockie() {
        if (this.acceptCookies.isEnabled()) await this.acceptCookies.click();
      }

      

      async getMenu() {
        await this.menuMenu.click();
      }
    
      async getCarsMenu() {
        await this.ourCarsMenu.click();
      }
    


    open() {
        return super.open("");
      }
}


module.exports = new homePage()