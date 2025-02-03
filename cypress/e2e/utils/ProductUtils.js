//It loops over the list of jQuery prices elements and return the actual prices list

export const extractActualPrices=($price)=>{
    const innerText=(el)=>el.innerText;
    const firstWord=(text)=>text.split(' ')[0];
    const justDigits=(str)=>str.replace(/[^0-9.]/g, '');

    const processedPricesList=Cypress._.map($price,(el)=>
        parseFloat(justDigits
            (firstWord(innerText(el)))
        )
    )
    return processedPricesList;
}


//It returns the text content of the list elements
export const extractProductsName = ($names) => {
    const productNamesList = Cypress._.map($names, (name) => name.innerText);
    return productNamesList;
};
