class LoginLocators{
       get loginUsernameInput(){
        return $("//input[@id='user-name']");
    }
    get  loginPasswordInput(){
        return $("//input[@id='password']");
    }
   get  submitButton(){
        return $("//input[@id='login-button']");
    }
    get errorMessage(){
        return $("//h3[@data-test='error']");
    }
    
}
module.exports = new LoginLocators();