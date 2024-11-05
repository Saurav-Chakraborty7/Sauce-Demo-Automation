class CheckoutLocators{
    get checkoutButton(){
        return $("//button[@id='checkout']");
    }
    get continueButton(){
        return $("//input[@id='continue']");
    }
    get firstName(){
        return $("//input[@id='first-name']");
    }
    get lastName(){
        return $("//input[@id='last-name']");
    }
    get zipcode(){
        return $("//input[@id='postal-code']");
    }
    get firstProductName(){
        return $("//div[text()='Sauce Labs Backpack']");
    }
    get secondProductName(){
        return $("//div[text()='Sauce Labs Bike Light']");
    }
    get thirdProductName(){
        return $("//div[text()='Sauce Labs Bolt T-Shirt']");
    }
    get firstProductPrice(){
        return $("(//div[@class='inventory_item_price'])[1]");
    }
    get secondProductPrice(){
        return $("(//div[@class='inventory_item_price'])[2]");
    }
    get thirdProductPrice(){
        return $("(//div[@class='inventory_item_price'])[3]");
    }
    get filteredProductName(){
        return $("//div[@class='inventory_item_name']");
    }
    get totalPriceFromCheckout(){
        return $("//div[@class='summary_subtotal_label']");
    }
    get finishButton(){
        return $("//button[@id='finish']");
    }
    get successMessage(){
        return $("//h2[@class='complete-header']");
    }
    get returnHome(){
        return $("//button[@id='back-to-products']");
    }
}
module.exports = new CheckoutLocators();