const loginActions = require("../pages/login/loginActions");
const inventoryActions = require("../pages/inventory/inventoryActions");
const addToCartActions = require("../pages/addToCart/addToCartActions");
const checkoutActions = require("../pages/checkout/checkoutActions");
const utility = require("../utility/utility");
var firstname,lastname,zip="";
var username="standard_user";
var password="secret_sauce";
var firstProductName="Sauce Labs Backpack";
var secondProductName="Sauce Labs Bike Light";
var thirdProductName="Sauce Labs Bolt T-Shirt";
var success = "Thank you for your order!";

describe("Question 2 = Purchase journey verification", () => {
    it("Logging in with standard_user ", async()=>{
        await loginActions.enterUsername(username);
        await loginActions.enterPassword(password);
        await loginActions.clickOnSubmitButton();
    });

    it("Resetting App State ", async()=>{
        await inventoryActions.clickOnHamburgerMenu();
        await inventoryActions.clickOnResetAppState();
    });
    it("Adding three products to Cart and Checkout ", async()=>{
        await addToCartActions.selectProducts();
        await addToCartActions.clickOnCartButton();
        await checkoutActions.clickOnCheckoutButton();
        firstname = await utility.generateString(4);
        await checkoutActions.enterFirstName(firstname);
        lastname = await utility.generateString(4);
        await checkoutActions.enterLastName(lastname);
        zip = await utility.randomNumber(2000,1000);
        await checkoutActions.enterZipcode(zip);
        await checkoutActions.clickOnContinueButton();
    });
    it("Name Verfication", async()=>{
        const actualFirstProductName= await checkoutActions.getFirstProductName();
        expect(firstProductName).toEqual(actualFirstProductName);
        const actualSecondProductName= await checkoutActions.getSecondProductName();
        expect(secondProductName).toEqual(actualSecondProductName);
        const actualThirdProductName= await checkoutActions.getThirdProductName();
        expect(thirdProductName).toEqual(actualThirdProductName);

        
    });
    it("Price and Success Message Verfication", async()=>{
          const actualTotalPrice = await checkoutActions.totalProductsPrice();
          const priceFromCheckout = await checkoutActions.getTotalPriceFromCheckout();
          expect(actualTotalPrice).toEqual(priceFromCheckout);
          await checkoutActions.clickOnFinishButton();
          const actualSuccessMessage = await checkoutActions.getSuccessMessage();
          expect(actualSuccessMessage).toEqual(success);
    });

    it("Coming to Home, Resetting App State and Logging Out ", async()=>{
        await checkoutActions.clickOnHome();
        await inventoryActions.clickOnHamburgerMenu();
        await inventoryActions.clickOnResetAppState();
        await inventoryActions.clickOnLogoutButton();
    });
});