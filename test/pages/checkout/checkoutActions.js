const checkoutLocators = require("./checkoutLocators");
const utility = require("../../utility/utility");

class CheckoutActions{
    async clickOnCheckoutButton(){
        await checkoutLocators.checkoutButton.click();
        await browser.pause(2000);
    }
    async clickOnContinueButton(){
        await checkoutLocators.continueButton.click();
        await browser.pause(2000);
    }
    async enterFirstName(firstname){
        await checkoutLocators.firstName.setValue(firstname);
    }
    async enterLastName(lastname){
        await checkoutLocators.lastName.setValue(lastname);
    }
    async enterZipcode(zip){
        await checkoutLocators.zipcode.setValue(zip);
        await driver.pause(2000);
    }
    async getFirstProductName(){
        const a = await checkoutLocators.firstProductName.getText();
        return a;
      }
      async getSecondProductName(){
        const b = await checkoutLocators.secondProductName.getText();
        return b;
      }
      async getThirdProductName(){
        const c = await checkoutLocators.thirdProductName.getText();
        return c;
      }
      async getFilteredProductName(){
        const d = await checkoutLocators.filteredProductName.getText();
        return d;
      }
    
      async totalProductsPrice(){
        const firstProductPricev = await checkoutLocators.firstProductPrice.getText();
        const firstProductPriceIntoNumber = await utility.convertTextToNumber(firstProductPricev);

        const secondProductPricev = await checkoutLocators.secondProductPrice.getText();
        const secondProductPriceIntoNumber = await utility.convertTextToNumber(secondProductPricev);
        
        const thirdProductPricev = await checkoutLocators.thirdProductPrice.getText();
        const thirdProductPriceIntoNumber = await utility.convertTextToNumber(thirdProductPricev);
        const totalAmount =(firstProductPriceIntoNumber+secondProductPriceIntoNumber+thirdProductPriceIntoNumber);
        return totalAmount;
    }
    async getTotalPriceFromCheckout() {
        const subtotalElement = await checkoutLocators.totalPriceFromCheckout.getText();
        const priceIntoNumber = subtotalElement.split(": $")[1];
        return parseFloat(priceIntoNumber);
    }
    async filteredProductPrice(){
        const firstProductPricev = await checkoutLocators.firstProductPrice.getText();
        const firstProductPriceIntoNumber = await utility.convertTextToNumber(firstProductPricev);
        return firstProductPriceIntoNumber;
    }
    async clickOnFinishButton(){
        await checkoutLocators.finishButton.click();
        await driver.pause(2000);
    }
    async getSuccessMessage(){
        const successMessage = await checkoutLocators.successMessage.getText();
        return successMessage;
    }
    async clickOnHome(){
        await checkoutLocators.returnHome.click();
        await browser.pause(2000);
    }

}
module.exports = new CheckoutActions();