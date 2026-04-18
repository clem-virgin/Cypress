let pop
describe('LOGIN', () => {
    beforeEach(() => {
        cy.visit('/')
        cy.fixture('saucedemo').then ((now) => {
            pop=now
        })
        
    })
    it('Standard User', () => {
        cy.get(pop.loginForm).should('exist')
        cy.get(pop.usernameLoginField).should('be.empty').type(pop.username1)
        cy.get(pop.passwordLoginField).should('be.empty').type(pop.password)
        cy.get(pop.loginButton).should('be.visible').click()
    })

    it('locked_out_user', () => {
       cy.get(pop.loginForm).should('exist')
        cy.get(pop.usernameLoginField).should('be.empty').type(pop.username2)
        cy.get(pop.passwordLoginField).should('be.empty').type(pop.password)
        cy.get(pop.loginButton).should('be.visible').click()
    })

    it('problem_user', () => {
        cy.get(pop.loginForm).should('exist')
        cy.get(pop.usernameLoginField).should('be.empty').type(pop.username3)
        cy.get(pop.passwordLoginField).should('be.empty').type(pop.password)
        cy.get(pop.loginButton).should('be.visible').click()
    })


    it('performance_glitch_user', () => {
        cy.get(pop.loginForm).should('exist')
        cy.get(pop.usernameLoginField).should('be.empty').type(pop.username4)
        cy.get(pop.passwordLoginField).should('be.empty').type(pop.password)
        cy.get(pop.loginButton).should('be.visible').click()

    })
})