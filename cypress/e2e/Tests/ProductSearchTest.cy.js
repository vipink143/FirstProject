import ProductSearchPage from "../PageObjects/Pages/ProductSearchPage";
import { SORTING_CRITERIA } from "../config/CONSTANTS";


describe("Products meets the search criteria",()=>{

    beforeEach(()=>{

        cy.visit(Cypress.env('productSearchURL'))
    })


    it("should search the product from header",()=>{

        ProductSearchPage.searchHeaderProduct();

    })

    context("Sorting the data",()=>{

        it("should check that the products are sorted by Price (Low > High)",()=>{

            ProductSearchPage.searchProductByText();
            ProductSearchPage.sortSearchResultsBy(SORTING_CRITERIA.PRICE_ASC);
            ProductSearchPage.allProductPricesSortByPriceASC()

        })
        it("should check that the products are sorted by Price (Low > High)",()=>{

            ProductSearchPage.searchProductByText();
            ProductSearchPage.sortSearchResultsBy(SORTING_CRITERIA.PRICE_DESC);
            ProductSearchPage.allProductPricesSortByPriceDESC();

        })

        it("should check that the products are sorted by Name (A - Z)",()=>{

            ProductSearchPage.searchProductByText();
            ProductSearchPage.sortSearchResultsBy(SORTING_CRITERIA.NAME_ASC)
            

        })
        it("should check that the products are sorted by Name (Z - A)",()=>{

            ProductSearchPage.searchProductByText();
            ProductSearchPage.sortSearchResultsBy(SORTING_CRITERIA.NAME_DESC);
            

        })
    })
})