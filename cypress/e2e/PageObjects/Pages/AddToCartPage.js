const addToCartLocators= require("../Elements/AddToCartElement.json")

class addToCart
{
    itemsViewdInWishlist()
    {
        cy.get(addToCartLocators.addToCartElementLocators.viewWishlistLocator).click() 
    }
    addItemToCart()
    {
        cy.get(addToCartLocators.addToCartElementLocators.addItemToCartLocator).click();

        cy.get(addToCartLocators.addToCartElementLocators.alertItemToCartLocator)
        .should('contain','Success: You have added')

    }
    clickOnCart()
    {
        cy.get(addToCartLocators.addToCartElementLocators.clickOnCartLocator).click()
    }
    itemViewedInCart()
    {
        cy.get(addToCartLocators.addToCartElementLocators.viewCartLocator).eq(0).click()
    }

    itemVerifyInCart()
    {
        let cartItems = [];

        cy.get(addToCartLocators.addToCartElementLocators.itemVerificationInCartLocator)
        .each(($row,index,rows)=>{
            cy.wrap($row).within(()=>{
                cy.get(addToCartLocators.addToCartElementLocators.itemNameverificationLocator)
                .each(($col,index,cols)=>{
                    cy.log($col.text())
                    cartItems.push($col.text())
                })
            })
        })
    }

} export default new addToCart