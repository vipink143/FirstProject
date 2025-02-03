
const wishlistLocators= require("../Elements/WhishlistElement.json")

class WishlistPage
{

    addProductToWishlist()
    {
        cy.get(wishlistLocators.wishlistElementLocators.itemWishlist).first().click();
        
    }
    getAlertToWishlist()
    {
        cy.get(wishlistLocators.wishlistElementLocators.alertWishlist)
        .should('contain.text','Success: You have added iPhone to your wish list!')
    }
    openWishlist()
    {
        cy.contains('wish list').click();
    }


} export default new WishlistPage