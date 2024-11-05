const loginActions = require("../pages/login/loginActions");
var username="locked_out_user";
var password="secret_sauce";
var actualError="Epic sadface: Sorry, this user has been locked out.";
describe("Question 1 = Try login with locked_out_user and verify the error message", () => {
    it("Should Show Error Message", async()=>{
        await loginActions.enterUsername(username);
        await loginActions.enterPassword(password);
        await loginActions.clickOnSubmitButton();
        const errorMessage = await loginActions.getErrorMessage();

        expect(errorMessage).toContain(actualError);
    });
});