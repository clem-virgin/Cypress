import { faker } from '@faker-js/faker'

class registrationPage {

    name = '[data-qa="signup-name"]'
    emailaddress =  '[data-qa="signup-email"]'
    signupbutton = '[data-qa="signup-button"]'
    gender = '#id_gender1'
    password = '[data-qa="password"]'
    days = '#days'
    months = '#months'
    years = '[data-qa="years"]'
    firstname = '#first_name'
    lastname = '#last_name'
    company = '[data-qa="company"]'
    address = '#address1'
    country = '#country'
    state = '[data-qa="state"]'
    city = '[data-qa="city"]'
    zipcode = '[data-qa="zipcode"]'
    phonenumber = '[data-qa="mobile_number"]'
    createaccountbutton = '[data-qa="create-account"]'
    continuebutton = '[data-qa="continue-button"]'

    //LOGIN
    loginemailaddressfield = '[data-qa="login-email"]'
    loginpasswordfield = '[data-qa="login-password"]'
    loginbutton = '[data-qa="login-button"]'
    loginemail = 'seunfunmi11@gmail.com'
    password = 'Tolulope2'

    setName(){
        const randomName = faker.person.middleName()
        cy.get(this.name).type(randomName)
    }

    setEmailaddress(){
        const randomEmail = faker.internet.email()
        cy.get(this.emailaddress).type(randomEmail)
    }

    setSignupbutton(){
        cy.get(this.signupbutton).click()
    }

    setGender(){
        cy.get(this.gender).click()
    }

    setPassword(){
        const randomPassword = faker.internet.password({ length: 10 })
        cy.get(this.password).type(randomPassword)
    }

    setDays(){
        const randomDay = faker.number.int({ min: 1, max: 31 })
        cy.get(this.days).select(randomDay)
    }

    setMonths(){
        const month = faker.number.int({ min: 1, max: 12 })
        cy.get(this.months).select(month)
    }

    setYears(){
        const randomYear = faker.number.int({ min: 2005, max: 2025 }).toString()
        cy.get(this.years).select(randomYear)
    }

    setFirstname(){
        const firstName = faker.person.firstName()
        cy.get(this.firstname).type(firstName)
    }

    setLastname(){
        const lastName = faker.person.lastName()
        cy.get(this.lastname).type(lastName)
    }

    setCompany(){
        const company = faker.company.name()
        cy.get(this.company).type(company)
    }

    setAddress(){
        const address = faker.location.streetAddress()
        cy.get(this.address).type(address)
    }

    setCountry(){
        const countries = [
  "India",
  "Canada",
  "Australia",
  "Israel",
  "New Zealand",
  "Singapore",
  "United States"
]
       const country = countries[Math.floor(Math.random() * countries.length)]
        cy.get(this.country).select(country)
    }

    setState(){
        const state = faker.location.state()
        cy.get(this.state).type(state)
    }

    setCity(){
        const city = faker.location.city()
        cy.get(this.city).type(city)
    }

    setZipcode(){
        const zipCode = faker.location.zipCode()
        cy.get(this.zipcode).type(zipCode)
    }

    setPhoneNumber(){
        const phoneNumber = faker.string.numeric(10)
        cy.get(this.phonenumber).type(phoneNumber)
    }

    setCreateAccountButton(){
        cy.get(this.createaccountbutton).click()
    }

    setContinueButton(){
        cy.get(this.continuebutton).click()
    }


    setLoginEmailAddress(){
        cy.get(this.loginemailaddressfield).type(this.loginemail)
    }

    setPassword(){
        cy.get(this.loginpasswordfield).type(this.password)
    }

    setLoginButton(){
        cy.get(this.loginbutton).click()
    }
}
export default registrationPage