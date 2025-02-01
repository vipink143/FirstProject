// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

import LoginPage from "../e2e/PageObjects/Pages/LoginPage";
import RegistrationPage from "../e2e/PageObjects/Pages/RegistrationPage";

Cypress.Commands.add('login',()=>{
    cy.fixture('users.json').then((users)=>{
        LoginPage.userLogin(users.validUser.email,users.validUser.password);
    })
})


// Cypress.Commands.add('validateFormField',(inputField,message)=>{
//     return inputField.then(($input)=>{
//         RegistrationPage.validationErr($input)
//     })
//     .should('be.visible')
//     .and('have.text',message)
// })

Cypress.Commands.add('validateFormField', (inputField, message) => {
    return inputField.then(($input) => RegistrationPage.validationErr($input))
            .should('be.visible')
            .and('have.text', message)
})

