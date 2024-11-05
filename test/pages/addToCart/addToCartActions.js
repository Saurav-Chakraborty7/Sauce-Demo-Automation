const addToCartLocators = require("./addToCartLocators");
class AddToCartActions {
  async selectProducts() {
    await addToCartLocators.firstProduct.click();
    await addToCartLocators.secondProduct.click();
    await addToCartLocators.thirdProduct.click();
    await browser.pause(3000);
  }
  async clickOnCartButton(){
    await addToCartLocators.cartButton.click();
    await browser.pause(2000);
  }
}
module.exports = new AddToCartActions();
