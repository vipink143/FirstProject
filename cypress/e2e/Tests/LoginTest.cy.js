import LoginPage from "../PageObjects/Pages/LoginPage"

describe("Success and Fail login flow",function()
{

    beforeEach(()=>{
        cy.visit(Cypress.env('loginURL'));
       // cy.fixture('users.json').as('users');
    })
    
    // beforeEach(()=>{
    //     cy.fixture('users.json').as('users')
        
    // })

    it("Check the registration page",()=>{
        LoginPage.RegistrationPage();
 
         })

    it("should login successfully with valid credentials",()=>{
        // eithor use this or below commands
       // cy.login(); //login via custom command
        cy.fixture('users.json').then((users)=>{
            LoginPage.userLogin(users.validUser.email,users.validUser.password);

        })
    })
    it("should login unsuccessfully with invalid credentials",()=>{
        // eithor use this or below commands
       // cy.login(); //login via custom command
        cy.fixture('users.json').then((users)=>{
            LoginPage.userLogin(users.invalidUser.email,users.invalidUser.password);


        })
    
    })
})

