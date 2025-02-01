import { validationMessages } from "../../config/errorMessages"

const registerLocators=require("../Elements/RegistrationElements.json")

class RegistrationPage{


    
    enterFirstName(firstName)
    {
        cy.get(registerLocators.registerElementLocators.firstName).type(firstName)  
    }

    enterLastName(lastName)
    {
        cy.get(registerLocators.registerElementLocators.lastName).type(lastName)
    }

    enterEmail(email)
    {
        cy.get(registerLocators.registerElementLocators.email).type(email)
    }

    enterTelephoneNumber(telephoneNumber)
    {
        cy.get(registerLocators.registerElementLocators.telephoneNumber).type(telephoneNumber)
    
    }

    enterPassword(password)
    {
        cy.get(registerLocators.registerElementLocators.password).type(password)
    }

    enterConfirmPassword(confirmPassword)
    {
        cy.get(registerLocators.registerElementLocators.confirmPassword).type(confirmPassword)
    }

    confirmPolicy(checkBox)
    {
        if(checkBox)
        {
            cy.get(registerLocators.registerElementLocators.checkBoxForSelection).check()
        }
        else{
            cy.get(registerLocators.registerElementLocators.checkBoxForSelection).uncheck()
        }
    }

    submitRegistraion()
    {
        cy.get(registerLocators.registerElementLocators.continueBtn).click()
    }

     validationErr()

    {

        const errorMessage=[
            validationMessages.FIRSTNAME,validationMessages.LASTNAME,validationMessages.EMAIL,validationMessages.TELEPHONE,validationMessages.PASSWORD
        ]
        errorMessage.forEach((message,index)=>{
            cy.get(registerLocators.registerElementLocators.validationErr).eq(index)
            .should('be.visible')
            .and('have.text',message);
        })
    }








     
    //  {
    //     cy.get(registerLocators.registerElementLocators.validationErr).eq(0)
    //     .should('be.visible')
    //     .and('have.text',validationMessages.FIRSTNAME);

    //     cy.get(registerLocators.registerElementLocators.validationErr).eq(1)
    //     .should('be.visible')
    //     .and('have.text',validationMessages.LASTNAME);

    //     cy.get(registerLocators.registerElementLocators.validationErr).eq(2)
    //     .should('be.visible')
    //     .and('have.text',validationMessages.EMAIL);

    //     cy.get(registerLocators.registerElementLocators.validationErr).eq(3)
    //     .should('be.visible')
    //     .and('have.text',validationMessages.TELEPHONE);

    //     cy.get(registerLocators.registerElementLocators.validationErr).eq(4)
    //     .should('be.visible')
    //     .and('have.text',validationMessages.PASSWORD)
       

    //  }


} export default new RegistrationPage


