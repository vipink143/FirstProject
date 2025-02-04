
import AddToCartPage from "../PageObjects/Pages/AddToCartPage";
import ProductSearchPage from "../PageObjects/Pages/ProductSearchPage";
import WishlistPage from "../PageObjects/Pages/WishlistPage";





describe("adding products to cart",()=>{

    beforeEach(()=>{

        cy.visit(Cypress.env('loginURL'))
        cy.login();
        ProductSearchPage.searchHeaderProduct()
        WishlistPage.addProductToWishlist() 
    })


    it("should add product to the cart from products search page",()=>{

        AddToCartPage.itemsViewdInWishlist()
        AddToCartPage.addItemToCart()
        AddToCartPage.clickOnCart()
        AddToCartPage.itemViewedInCart()

    })

    it("should validate the presence of product in cart",()=>{

        AddToCartPage.itemsViewdInWishlist()
        AddToCartPage.addItemToCart()
        AddToCartPage.itemVerifyInCart()

    })
    
})