import WishlistPage from "../PageObjects/Pages/WishlistPage"
import LoginPage from "../PageObjects/Pages/LoginPage"
import ProductSearchPage from "../PageObjects/Pages/ProductSearchPage";


describe("adding and removing products from wishlist",()=>{


    beforeEach(()=>{

        
        cy.visit(Cypress.env('loginURL'));
        cy.login();
        ProductSearchPage.searchHeaderProduct()
       
        WishlistPage.addProductToWishlist();
       
        
    })


    it("should validate the success message for product added to wishlist",()=>{
        WishlistPage.getAlertToWishlist();

    })

    it("should validate the presence of product in wishlist",()=>{
        WishlistPage.openWishlist();


    })



})