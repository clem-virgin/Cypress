import registrationPage from '../registrationclassPOM/registration'
const reg = new registrationPage

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

it.only('verify LOGIN', () => {
    reg.setLoginEmailAddress()
    reg.setPassword()
    reg.setLoginButton()
})
})