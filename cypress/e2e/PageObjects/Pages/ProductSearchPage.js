
const productSearchLocators= require("../Elements/ProductSearchElements.json")




class ProductsSearchPage
{

    searchHeaderProduct()
    {
        cy.get(productSearchLocators.productSearchElementLocators.searchAll).eq(0)
        .type("iPhone")
        .type('{Enter}')
    }

    sortSearchResultsBy(sortingCriteria)
    {
        cy.get(productSearchLocators.productSearchElementLocators.searchAll).eq(1).type("iPhone");
        cy.get(productSearchLocators.productSearchElementLocators.checkbox).check();
        cy.get(productSearchLocators.productSearchElementLocators.searchButton).eq(0).click();

        cy.get("[class='form-group input-group input-group-sm']>select").eq(0)
        .select(sortingCriteria)
    }
    
} export default new ProductsSearchPage


