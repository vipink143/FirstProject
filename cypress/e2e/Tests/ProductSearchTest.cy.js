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

            ProductSearchPage.sortSearchResultsBy(SORTING_CRITERIA.PRICE_ASC);

        })
        it("should check that the products are sorted by Price (Low > High)",()=>{

            ProductSearchPage.sortSearchResultsBy(SORTING_CRITERIA.PRICE_DESC);

        })
        it("should check that the products are sorted by Name (A - Z)",()=>{

            ProductSearchPage.sortSearchResultsBy(SORTING_CRITERIA.NAME_ASC);

        })
        it("should check that the products are sorted by Name (Z - A)",()=>{

            ProductSearchPage.sortSearchResultsBy(SORTING_CRITERIA.NAME_DESC);

        })
    })
})