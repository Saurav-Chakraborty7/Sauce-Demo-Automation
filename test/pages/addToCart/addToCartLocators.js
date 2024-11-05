class AddToCartLocators{
    get firstProduct(){
        return $("//button[@id='add-to-cart-sauce-labs-backpack']");
    }
    get secondProduct(){
        return $("//button[@id='add-to-cart-sauce-labs-bike-light']");
    }
    get thirdProduct(){
        return $("//button[@id='add-to-cart-sauce-labs-bolt-t-shirt']");
    }
    get cartButton(){
        return $("//a[@class='shopping_cart_link']");
    }
}
module.exports = new AddToCartLocators();