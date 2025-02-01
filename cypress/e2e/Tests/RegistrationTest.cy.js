import { fakerDE as faker } from '@faker-js/faker';
import LoginPage from '../PageObjects/Pages/LoginPage';
import RegistrationPage from '../PageObjects/Pages/RegistrationPage';
import {validationMessages} from "../config/errorMessages"


describe("Account Registration",()=>{
    beforeEach(()=>{
        cy.visit(Cypress.env('URL'));
      
       LoginPage.RegistrationPage();
    })


    it("should register the new user",()=>{

        let password=faker.internet.password()

        RegistrationPage.enterFirstName(faker.person.firstName())
        RegistrationPage.enterLastName(faker.person.lastName())
        RegistrationPage.enterEmail(faker.internet.email())
        RegistrationPage.enterTelephoneNumber(faker.phone.number())
        RegistrationPage.enterPassword(password) // if use this (faker.internet.password())-->it's generating new password 
        RegistrationPage.enterConfirmPassword(password) // if use this (faker.internet.password())-->it's generating new password again which is not matching with above 
        RegistrationPage.confirmPolicy(true)
        RegistrationPage.submitRegistraion()
        

    })

    it("should validate the error messages for missing input fields",()=>{


        RegistrationPage.submitRegistraion();
        RegistrationPage.validationErr()   

    })
})



