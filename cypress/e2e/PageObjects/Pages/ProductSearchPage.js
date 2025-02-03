
const productSearchLocators= require("../Elements/ProductSearchElements.json")
//import { extractActualPrices, extractProductsName } from "../utils/ProductUtils";
import { extractActualPrices ,extractProductsName} from "../../utils/ProductUtils";




class ProductsSearchPage
{

    searchHeaderProduct()
    {
        cy.get(productSearchLocators.productSearchElementLocators.searchAll).eq(0)
        .type("iPhone")
        .type('{Enter}')
    }

    searchProductByText()
    {
        cy.get(productSearchLocators.productSearchElementLocators.searchAll).eq(1).type("iPhone");
        cy.get(productSearchLocators.productSearchElementLocators.checkbox).check();
        cy.get(productSearchLocators.productSearchElementLocators.searchButton).eq(0).click();
    }

    sortSearchResultsBy(sortingCriteria)
    {

        cy.get("[class='form-group input-group input-group-sm']>select").eq(0)
        .select(sortingCriteria)
    }

    allProductPricesSortByPriceASC()
    {
        cy.get(productSearchLocators.productSearchElementLocators.ProductPrice).should('not.be.empty')
            .then(($price)=>{
                const price=extractActualPrices($price);
                const sorted=Cypress._.sortBy(price)
                expect(sorted).to.deep.equal(price)
                
            })
        
    }

    allProductPricesSortByPriceDESC()
    {
        cy.get(productSearchLocators.productSearchElementLocators.ProductPrice).should('not.be.empty')
            .then(($price)=>{
                const price=extractActualPrices($price);
                const sorted=Cypress._.sortBy(price).reverse()
                expect(sorted).to.deep.equal(price)
                
            })
        
    }


    
    
} export default new ProductsSearchPage


    
/*
getAllProductNames()
    {
        const productNamesArr=[];
        cy.get(productSearchLocators.productSearchElementLocators.ProductName);
        ProductName.each(($productName)=>{
            productNamesArr.push($productName.text())
        })
        if(productNamesArr)
        {
            return productNamesArr;
        }
        return null
    }
*/