class loginPage{

    loginemailaddressfield = '[data-qa="login-email"]'
    loginpasswordfield = '[data-qa="login-password"]'
    loginbutton = '[data-qa="login-button"]'
    loginemail = 'seunfunmi11@gmail.com'
    loginpassword = 'Tolulope2'



    setLoginEmailAddress(){
        cy.get(this.loginemailaddressfield).type(this.loginemail)
    }

    setPassword(){
        cy.get(this.loginpasswordfield).type(this.loginpassword)
    }

    setLoginButton(){
        cy.get(this.loginbutton).click()
    }
}
export default loginPage