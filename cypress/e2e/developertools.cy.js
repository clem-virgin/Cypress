describe('LOGIN', () => {

  it('Verify login with standard_user', () => {
    cy.visit('https://www.saucedemo.com')
    cy.get('[data-test="username"]').type('standard_user')
    cy.get('[data-test="password"]').type('secret_sauce')
    cy.get('[data-test="login-button"]').click()
  })


it('Verify login with locked_out_user', () => {
  cy.visit('https://www.saucedemo.com')
  cy.get('[data-test="username"]').type('locked_out_user')
  cy.get('[data-test="password"]').type('secret_sauce')
  cy.get('[data-test="login-button"]').click()
})


it('Verify login with problem_user', () => {
  cy.visit('https://www.saucedemo.com')
  cy.get('[data-test="username"]').type('problem_user')
  cy.get('[data-test="password"]').type('secret_sauce')
  cy.get('[data-test="login-button"]').click()
})


it('Verify login with performance_glitch_user', () => {
  cy.visit('https://www.saucedemo.com')
  cy.get('[data-test="username"]').type('performance_glitch_user')
  cy.get('[data-test="password"]').type('secret_sauce')
  cy.get('[data-test="login-button"]').click()
})


it('Verify login with error_user', () => {
  cy.visit('https://www.saucedemo.com')
  cy.get('[data-test="username"]').type('error_user')
  cy.get('[data-test="password"]').type('secret_sauce')
  cy.get('[data-test="login-button"]').click()
})


it('Verify login with visual_user', () => {
  cy.visit('https://www.saucedemo.com')
  cy.get('[data-test="username"]').type('visual_user')
  cy.get('[data-test="password"]').type('secret_sauce')
  cy.get('[data-test="login-button"]').click()
})

 })