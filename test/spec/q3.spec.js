const loginActions = require("../pages/login/loginActions");
const inventoryActions = require("../pages/inventory/inventoryActions");
const addToCartActions = require("../pages/addToCart/addToCartActions");
const checkoutActions = require("../pages/checkout/checkoutActions");
const utility = require("../utility/utility");

var username="performance_glitch_user";
var password="secret_sauce";
var firstname,lastname,zip="";
var expectedProductName="Test.allTheThings() T-Shirt (Red)";
var success = "Thank you for your order!";

describe("Question 3 = Filter and Verification", () => {
    it("Logging in with performance_glitch_user", async()=>{
        await loginActions.enterUsername(username);
        await loginActions.enterPassword(password);
        await loginActions.clickOnSubmitButton();
    });

    it("Resetting App State", async()=>{
        await inventoryActions.clickOnHamburgerMenu();
        await inventoryActions.clickOnResetAppState();
        await inventoryActions.selectFiltering();
    });
    it("Adding first product and completing checkout", async()=>{
       await inventoryActions.clickOnProduct();
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
    it("Name, Price, Order Message Verification", async()=>{
         var actualProductname = await checkoutActions.getFilteredProductName();
         expect(expectedProductName).toEqual(actualProductname);
         const actualProductPrice = await checkoutActions.filteredProductPrice();
         const priceFromCheckout = await checkoutActions.getTotalPriceFromCheckout();
         expect(actualProductPrice).toEqual(priceFromCheckout);
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