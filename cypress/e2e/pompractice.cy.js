import {elements} from '../fixtures/pomelements'

describe('POM', () => {
  beforeEach(()=>{
    cy.visit('https://parabank.parasoft.com/parabank/lookup.htm')
  })

  it('Verify user can register successfully', () => {
    cy.get(elements.registerButton).should('be.visible').click()
    cy.get(elements.signupForm).should('exist')
     cy.get(elements.signupFirstnameField).should('be.empty').type(elements.firstname)
     cy.get(elements.signupLastnameField).should('be.empty').type(elements.lastname)
    cy.get(elements.signupAddressField).should('be.empty').type(elements.address)
    cy.get(elements.signupCityField).should('be.empty').type(elements.city)
    cy.get(elements.signupStateField).should('be.empty').type(elements.state)
    cy.get(elements.signupZipcodeField).should('be.empty').type(elements.zipcode)
    cy.get(elements.signupNumberField).should('be.empty').type(elements.number)
    cy.get(elements.signupSsnField).should('be.empty').type(elements.ssn)
    cy.get(elements.usernameField).should('be.empty').type(elements.username)
    cy.get(elements.passwordField).should('be.empty').type(elements.password)
    cy.get(elements.confirmField).should('not.be.empty').type(elements.confirm)
    cy.get(elements.signButton).should('be.visible').click()
  })

  it.only('Verify user can login successfully', () => {
    cy.get(elements.loginForm).should('exist')
    cy.get(elements.usernameLoginField).should('be.empty').type(elements.username)
    cy.get(elements.passwordLoginField).should('be.empty').type(elements.password)
    cy.get(elements.loginButton).should('be.visible').click()
  })

})