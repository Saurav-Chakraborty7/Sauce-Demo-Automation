class InventoryLocators{
    get hamburgerMenu(){
        return $("//button[@id='react-burger-menu-btn']");
    }
    get resetAppState(){
        return $("//a[@id='reset_sidebar_link']");
    }
    get logout(){
        return $("//a[@id='logout_sidebar_link']");
    }
    get filter(){
        return $("(//select[@class='product_sort_container']/option)[2]");
    }
    get productAfterFiltering(){
        return $("//button[@class='btn btn_primary btn_small btn_inventory '][1]");
    }
}
module.exports = new InventoryLocators();