const inventoryLocators = require("./inventoryLocators");
class InventoryActions{
    async clickOnHamburgerMenu(){
        await inventoryLocators.hamburgerMenu.click();
        await driver.pause(2000);
    }
    async clickOnResetAppState(){
        await inventoryLocators.resetAppState.click();
        await driver.pause(2000);
    }
    async clickOnLogoutButton(){
        await inventoryLocators.logout.click();
        await driver.pause(2000);
    }
    async selectFiltering(){
        await inventoryLocators.filter.click();
        await browser.pause(2000)
    }
    async clickOnProduct(){
        await inventoryLocators.productAfterFiltering.click();
        await driver.pause(2000);
    }

}
module.exports = new InventoryActions();