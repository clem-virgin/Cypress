import registrationPage from '../registrationclassPOM/registration'
import loginPage from '../registrationclassPOM/login'
const reg = new registrationPage
const log = new loginPage

describe('registration', () => {
    beforeEach(()=> {
    cy.visit('https://automationexercise.com/login')
})

it('Verify user can register successfully', () => {
    reg.setName()
    reg.setEmailaddress()
    reg.setSignupbutton()
    reg.setGender()
    reg.setPassword()
    reg.setDays()
    reg.setMonths()
    reg.setYears()
    reg.setFirstname()
    reg.setLastname()
    reg.setCompany()
    reg.setAddress()
    reg.setCountry()
    reg.setState()
    reg.setCity()
    reg.setZipcode()
    reg.setPhoneNumber()
    reg.setCreateAccountButton()
    reg.setContinueButton()
})

it('verify LOGIN', () => {
    log.setLoginEmailAddress()
    log.setPassword()
    log.setLoginButton()
})
})