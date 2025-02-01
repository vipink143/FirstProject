const loginLocators=require("../Elements/LoginElements")




class LoginPage
{

    userLogin(email,password)
    {
    cy.get(loginLocators.loginElementLocators.emailId).type(email);
    cy.get(loginLocators.loginElementLocators.password).type(password);
    cy.get(loginLocators.loginElementLocators.submitBtn).click();
    }

    RegistrationPage()
    {
        cy.get(loginLocators.loginElementLocators.registerPage).eq(0).click();
    }


} export default new LoginPage