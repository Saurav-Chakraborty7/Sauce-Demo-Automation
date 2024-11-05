const loginLocators = require("./loginLocators");

class LoginActions{
    async enterUsername(username){
        await loginLocators.loginUsernameInput.setValue(username);
        await browser.pause(1500);
    }
    
    async enterPassword(password){
        await loginLocators.loginPasswordInput.setValue(password);
        await browser.pause(1500);
    }
    
    async clickOnSubmitButton(){
        await loginLocators.submitButton.click();
        await browser.pause(1500);
    }
    async getErrorMessage() {
        return await loginLocators.errorMessage.getText();
    }
    
    
}
module.exports = new LoginActions();