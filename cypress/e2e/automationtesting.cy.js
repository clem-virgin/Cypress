describe('LOGIN', () => {

  //it('Verify user can navigate to the website homepage', () => {
   // cy.visit('http://automationexercise.com/login')
    
  // })


 it('Verify the name field on the signup page does not accept numbers', () => {
    cy.visit('http://automationexercise.com/login')
    cy.get('[data-qa="signup-name"]').type('63927363782')                                 //input numbers as name
    cy.get('[data-qa="signup-email"]').type('lauradonald66@gmail.com')                    //input valid email address
    cy.get('[data-qa="signup-button"]').click()
   cy.get(':nth-child(3) > .top > [data-qa="title"] > span > [name="title"]').click()
   cy.get('[data-qa="password"]').type('Laptop@9')
   cy.get('[data-qa="days"]').select(12)
   cy.get('[data-qa="months"]').select(4)
   cy.get('[data-qa="years"]').select('1992')
   cy.get('[data-qa="first_name"]').type('tunde')
   cy.get('[data-qa="last_name"]').type('lewis')
   cy.get('[data-qa="country"]').select('United States')
   cy.get('[data-qa="create-account"]').click()
   cy.get('[data-qa="address"]').type('245 creekwood cove ln')
   cy.get('[data-qa="state"]').type('tennessee')
   cy.get('[data-qa="city"]').type('lenoir city')
   cy.get('[data-qa="zipcode"]').type(37772)
   cy.get('[data-qa="mobile_number"]').type(+13217868906)
   cy.get('[data-qa="create-account"]').click()
   cy.get('[data-qa="continue-button"]').click()
})

it('Verify the name field on the signup page have maximum character input', () => {
    cy.visit('http://automationexercise.com/login')
    cy.get('[data-qa="signup-name"]').type('hjsiiisiuafyausooiayuyvsvsmabjisusytstfsrratyayisuisufgsfs')              //input more than 20 alphabelts as name
    cy.get('[data-qa="signup-email"]').type('lauradond@gmail.com')                  //input valid email address
    cy.get('[data-qa="signup-button"]').click()
    cy.get(':nth-child(3) > .top > [data-qa="title"] > span > [name="title"]').click()                 //input valid title
    cy.get('[data-qa="password"]').type('Laptop@9')                                   //input valid password
    cy.get('[data-qa="days"]').select(12)                                                                 //input valid days
    cy.get('[data-qa="months"]').select(4)                //input valid month
    cy.get('[data-qa="years"]').select('1992')             //input valid year
   cy.get('[data-qa="first_name"]').type('tunde')    //input valid first name
    cy.get('[data-qa="last_name"]').type('lewis')       //input valid last name
    cy.get('[data-qa="country"]').select('United States')       //input valid country
    cy.get('[data-qa="create-account"]').click()      //click the create account button
    cy.get('[data-qa="address"]').type('245 creekwood cove ln')      //input valid address
    cy.get('[data-qa="state"]').type('tennessee')      //input valid state
    cy.get('[data-qa="city"]').type('lenoir city')      //input valid city
    cy.get('[data-qa="zipcode"]').type(37772)      //input valid zip code
    cy.get('[data-qa="mobile_number"]').type(+13217868906)     //input valid number
    cy.get('[data-qa="create-account"]').click()        //click the create account button
   cy.get('[data-qa="continue-button"]').click()
})

it('Verify the name field don’t accept space in between the name', () => {
    cy.visit('http://automationexercise.com/login')
    cy.get('[data-qa="signup-name"]').type('clem ent')                   //input a name and put space in between as name
    cy.get('[data-qa="signup-email"]').type('laurad@gmail.com')                  //input valid email address
    cy.get('[data-qa="signup-button"]').click()
    cy.get(':nth-child(3) > .top > [data-qa="title"] > span > [name="title"]').click()                 //input valid title
    cy.get('[data-qa="password"]').type('Laptop@9')                                   //input valid password
    cy.get('[data-qa="days"]').select(12)                                                                 //input valid days
    cy.get('[data-qa="months"]').select(4)                //input valid month
    cy.get('[data-qa="years"]').select('1992')             //input valid year
   cy.get('[data-qa="first_name"]').type('tunde')    //input valid first name
    cy.get('[data-qa="last_name"]').type('lewis')       //input valid last name
    cy.get('[data-qa="country"]').select('United States')       //input valid country
    cy.get('[data-qa="create-account"]').click()      //click the create account button
    cy.get('[data-qa="address"]').type('245 creekwood cove ln')      //input valid address
    cy.get('[data-qa="state"]').type('tennessee')      //input valid state
    cy.get('[data-qa="city"]').type('lenoir city')      //input valid city
    cy.get('[data-qa="zipcode"]').type(37772)      //input valid zip code
    cy.get('[data-qa="mobile_number"]').type(+13217868906)     //input valid number
    cy.get('[data-qa="create-account"]').click()        //click the create account button
   cy.get('[data-qa="continue-button"]').click()
})

it('Verify the name field accept apostophe', () => {
    cy.visit('http://automationexercise.com/login')
    cy.get('[data-qa="signup-name"]').type("D'Wayne")                   //Input apostophe in between the name in the name field
    cy.get('[data-qa="signup-email"]').type('lauoraid@gmail.com')                  //input valid email address
    cy.get('[data-qa="signup-button"]').click()
    cy.get(':nth-child(3) > .top > [data-qa="title"] > span > [name="title"]').click()                 //input valid title
    cy.get('[data-qa="password"]').type('Laptop@9')                         //input valid password
    cy.get('[data-qa="days"]').select(12)                                                                 //input valid days
    cy.get('[data-qa="months"]').select(4)                //input valid month
    cy.get('[data-qa="years"]').select('1992')             //input valid year
    cy.get('[data-qa="first_name"]').type('tunde')    //input valid first name
    cy.get('[data-qa="last_name"]').type('lewis')       //input valid last name
    cy.get('[data-qa="country"]').select('United States')       //input valid country
    cy.get('[data-qa="create-account"]').click()      //click the create account button
    cy.get('[data-qa="address"]').type('245 creekwood cove ln')      //input valid address
    cy.get('[data-qa="state"]').type('tennessee')      //input valid state
    cy.get('[data-qa="city"]').type('lenoir city')      //input valid city
    cy.get('[data-qa="zipcode"]').type(37772)      //input valid zip code
    cy.get('[data-qa="mobile_number"]').type(+13217868906)     //input valid number
    cy.get('[data-qa="create-account"]').click()        //click the create account button
   cy.get('[data-qa="continue-button"]').click()
})

it('Verify name field accept alphabelts', () => {
    cy.visit('http://automationexercise.com/login')
    cy.get('[data-qa="signup-name"]').type('tolulope')                   //Input alphabelts in the name field
    cy.get('[data-qa="signup-email"]').type('lauoraide@gmail.com')                  //input valid email address
    cy.get('[data-qa="signup-button"]').click()
    cy.get(':nth-child(3) > .top > [data-qa="title"] > span > [name="title"]').click()                 //input valid title
    cy.get('[data-qa="password"]').type('Laptop@9')                         //input valid password
    cy.get('[data-qa="days"]').select(12)                                                                 //input valid days
    cy.get('[data-qa="months"]').select(4)                //input valid month
    cy.get('[data-qa="years"]').select('1992')             //input valid year
    cy.get('[data-qa="first_name"]').type('tunde')    //input valid first name
    cy.get('[data-qa="last_name"]').type('lewis')       //input valid last name
   cy.get('[data-qa="country"]').select('United States')       //input valid country
    cy.get('[data-qa="create-account"]').click()      //click the create account button
    cy.get('[data-qa="address"]').type('245 creekwood cove ln')      //input valid address
    cy.get('[data-qa="state"]').type('tennessee')      //input valid state
    cy.get('[data-qa="city"]').type('lenoir city')      //input valid city
    cy.get('[data-qa="zipcode"]').type(37772)      //input valid zip code
    cy.get('[data-qa="mobile_number"]').type(+13217868906)     //input valid number
    cy.get('[data-qa="create-account"]').click()        //click the create account button
   cy.get('[data-qa="continue-button"]').click()
})


it('Verify name field can not be blank ', () => {
   cy.visit('http://automationexercise.com/login')
   cy.get('[data-qa="signup-name"]')                   //Leave the name field blank
   cy.get('[data-qa="signup-email"]').type('lauoraiden@gmail.com')                  //input valid email address
   cy.get('[data-qa="signup-button"]').click()
})

it('Verify email address field can not be blank ', () => {
   cy.visit('http://automationexercise.com/login')
   cy.get('[data-qa="signup-name"]').type('mayowa')                   //input valid name in the name field 
   cy.get('[data-qa="signup-email"]')                     //leave the email address fild blank
   cy.get('[data-qa="signup-button"]').click()
})


it('Verify already used email address can not be used to register new account ', () => {
   cy.visit('http://automationexercise.com/login')
   cy.get('[data-qa="signup-name"]').type('mayowa')                   //input valid name in the name field 
   cy.get('[data-qa="signup-email"]').type('lauoraide@gmail.com')              //Input already used email address
   cy.get('[data-qa="signup-button"]').click()
})

it('Verify invalid domain address can not be used  in the email address field ', () => {
   cy.visit('http://automationexercise.com/login')
   cy.get('[data-qa="signup-name"]').type('mayowa')                   //input valid name in the name field 
   cy.get('[data-qa="signup-email"]').type('lauoraide@gmal.com')           //Input invalid domain address
   cy.get('[data-qa="signup-button"]').click()
   cy.get(':nth-child(3) > .top > [data-qa="title"] > span > [name="title"]').click()                 //input valid title
   cy.get('[data-qa="password"]').type('Laptop@9')                         //input valid password
   cy.get('[data-qa="days"]').select(12)                                                                 //input valid days
   cy.get('[data-qa="months"]').select(4)                //input valid month
   cy.get('[data-qa="years"]').select('1992')             //input valid year
   cy.get('[data-qa="first_name"]').type('tunde')    //input valid first name
   cy.get('[data-qa="last_name"]').type('lewis')       //input valid last name
   cy.get('[data-qa="country"]').select('United States')       //input valid country
   cy.get('[data-qa="create-account"]').click()      //click the create account button
   cy.get('[data-qa="address"]').type('245 creekwood cove ln')      //input valid address
   cy.get('[data-qa="state"]').type('tennessee')      //input valid state
   cy.get('[data-qa="city"]').type('lenoir city')      //input valid city
   cy.get('[data-qa="zipcode"]').type(37772)      //input valid zip code
   cy.get('[data-qa="mobile_number"]').type(+13217868906)     //input valid number
   cy.get('[data-qa="create-account"]').click()        //click the create account button
   cy.get('[data-qa="continue-button"]').click()

})

it('Verify invalid email address can not be used to register new account ', () => {
   cy.visit('http://automationexercise.com/login')
   cy.get('[data-qa="signup-name"]').type('mayowa')                   //input valid name in the name field 
   cy.get('[data-qa="signup-email"]').type('femilarry.com')           //.Input invalid email address
   cy.get('[data-qa="signup-button"]').click()
})


it('Verify valid email address can be used to register new account ', () => {
   cy.visit('http://automationexercise.com/login')
   cy.get('[data-qa="signup-name"]').type('mayowa')                   //input valid name in the name field 
   cy.get('[data-qa="signup-email"]').type('femilarry@gmail.com')           //.Input valid email address
   cy.get('[data-qa="signup-button"]').click()
   cy.get(':nth-child(3) > .top > [data-qa="title"] > span > [name="title"]').click()                 //input valid title
   cy.get('[data-qa="password"]').type('Laptop@9')                         //input valid password
   cy.get('[data-qa="days"]').select(12)                                                                 //input valid days
   cy.get('[data-qa="months"]').select(4)                //input valid month
   cy.get('[data-qa="years"]').select('1992')             //input valid year
   cy.get('[data-qa="first_name"]').type('tunde')    //input valid first name
   cy.get('[data-qa="last_name"]').type('lewis')       //input valid last name
   cy.get('[data-qa="country"]').select('United States')       //input valid country
   cy.get('[data-qa="create-account"]').click()      //click the create account button
   cy.get('[data-qa="address"]').type('245 creekwood cove ln')      //input valid address
   cy.get('[data-qa="state"]').type('tennessee')      //input valid state
   cy.get('[data-qa="city"]').type('lenoir city')      //input valid city
   cy.get('[data-qa="zipcode"]').type(37772)      //input valid zip code
   cy.get('[data-qa="mobile_number"]').type(+13217868906)     //input valid number
   cy.get('[data-qa="create-account"]').click()        //click the create account button
   cy.get('[data-qa="continue-button"]').click()

})


it('Verify mr title option is clickable and can be selected ', () => {
    cy.visit('http://automationexercise.com/login')
    cy.get('[data-qa="signup-name"]').type('mayowa')                   //input valid name in the name field 
    cy.get('[data-qa="signup-email"]').type('femisilarry@gmail.com')           //.Input valid email address
    cy.get('[data-qa="signup-button"]').click()
    cy.get(':nth-child(3) > .top > [data-qa="title"] > span > [name="title"]').click()                 //input valid title 

})

it('Verify mrs title option is clickable and can be selected ', () => {
    cy.visit('http://automationexercise.com/login')
    cy.get('[data-qa="signup-name"]').type('mayowa')                   //input valid name in the name field 
    cy.get('[data-qa="signup-email"]').type('femisilarry@gmail.com')           //.Input valid email address
    cy.get('[data-qa="signup-button"]').click()
    cy.get(':nth-child(4) > .top > [data-qa="title"] > span > [name="title"]').click() 

})


it('Verify  both mr and mrs title option can not be selected together ', () => {
    cy.visit('http://automationexercise.com/login')
    cy.get('[data-qa="signup-name"]').type('mayowa')                   //input valid name in the name field 
    cy.get('[data-qa="signup-email"]').type('femisilarry@gmail.com')           //.Input valid email address
    cy.get('[data-qa="signup-button"]').click()
    cy.get(':nth-child(3) > .top > [data-qa="title"] > span > [name="title"]').click()                 //input valid title
    cy.get('[data-qa="password"]').type('Laptop@9')                         //input valid password
    cy.get('[data-qa="days"]').select(12)                                                                 //input valid days
    cy.get('[data-qa="months"]').select(4)                //input valid month
    cy.get('[data-qa="years"]').select('1992')             //input valid year
    cy.get('[data-qa="first_name"]').type('tunde')    //input valid first name
    cy.get('[data-qa="last_name"]').type('lewis')       //input valid last name
   cy.get('[data-qa="country"]').select('United States')       //input valid country
    cy.get('[data-qa="create-account"]').click()      //click the create account button
    cy.get('[data-qa="address"]').type('245 creekwood cove ln')      //input valid address
    cy.get('[data-qa="state"]').type('tennessee')      //input valid state
   cy.get('[data-qa="city"]').type('lenoir city')      //input valid city
    cy.get('[data-qa="zipcode"]').type(37772)      //input valid zip code
    cy.get('[data-qa="mobile_number"]').type(+13217868906)     //input valid number
   cy.get('[data-qa="create-account"]').click()        //click the create account button
   cy.get('[data-qa="continue-button"]').click()

})


it('Verify using six(6) lowercase alphabelts for the password field ', () => {
   cy.visit('http://automationexercise.com/login')
   cy.get('[data-qa="signup-name"]').type('mayowa')                   //input valid name in the name field 
   cy.get('[data-qa="signup-email"]').type('femisilirry@gmail.com')           //.Input valid email address
   cy.get('[data-qa="signup-button"]').click()
   cy.get(':nth-child(4) > .top > [data-qa="title"] > span > [name="title"]').click()                   //input valid title
   cy.get('[data-qa="password"]').type('always')                         //input six lowercase alphabelts password
   cy.get('[data-qa="days"]').select(12)                                                                 //input valid days
   cy.get('[data-qa="months"]').select(4)                //input valid month
   cy.get('[data-qa="years"]').select('1992')             //input valid year
   cy.get('[data-qa="first_name"]').type('tunde')    //input valid first name
   cy.get('[data-qa="last_name"]').type('lewis')       //input valid last name
   cy.get('[data-qa="country"]').select('United States')       //input valid country
   cy.get('[data-qa="create-account"]').click()      //click the create account button
   cy.get('[data-qa="address"]').type('245 creekwood cove ln')      //input valid address
   cy.get('[data-qa="state"]').type('tennessee')      //input valid state
   cy.get('[data-qa="city"]').type('lenoir city')      //input valid city
   cy.get('[data-qa="zipcode"]').type(37772)      //input valid zip code
   cy.get('[data-qa="mobile_number"]').type(+13217868906)     //input valid number
    cy.get('[data-qa="create-account"]').click()        //click the create account button
    cy.get('[data-qa="continue-button"]').click()

})

it('Verify using more than eight(8) lowercase alphabelts for the password field ', () => {
   cy.visit('http://automationexercise.com/login')
    cy.get('[data-qa="signup-name"]').type('mayowa')                   //input valid name in the name field 
    cy.get('[data-qa="signup-email"]').type('femisseun@gmail.com')           //.Input valid email address
    cy.get('[data-qa="signup-button"]').click()
    cy.get(':nth-child(3) > .top > [data-qa="title"] > span > [name="title"]').click()                 //input valid title
    cy.get('[data-qa="password"]').type('alwaysseunline')                         //input six lowercase alphabelts password
    cy.get('[data-qa="days"]').select(12)                                                                 //input valid days
    cy.get('[data-qa="months"]').select(4)                //input valid month
    cy.get('[data-qa="years"]').select('1992')             //input valid year
    cy.get('[data-qa="first_name"]').type('tunde')    //input valid first name
    cy.get('[data-qa="last_name"]').type('lewis')       //input valid last name
    cy.get('[data-qa="country"]').select('United States')       //input valid country
    cy.get('[data-qa="create-account"]').click()      //click the create account button
    cy.get('[data-qa="address"]').type('245 creekwood cove ln')      //input valid address
    cy.get('[data-qa="state"]').type('tennessee')      //input valid state
    cy.get('[data-qa="city"]').type('lenoir city')      //input valid city
    cy.get('[data-qa="zipcode"]').type(37772)      //input valid zip code
    cy.get('[data-qa="mobile_number"]').type(+13217868906)     //input valid number
    cy.get('[data-qa="create-account"]').click()        //click the create account button
    cy.get('[data-qa="continue-button"]').click()

})


it('Verify there is an eye icon in front of the password field, clickable and working ', () => {
   cy.visit('http://automationexercise.com/login')
   cy.get('[data-qa="signup-name"]').type('mayowa')                   //input valid name in the name field 
   cy.get('[data-qa="signup-email"]').type('femiseun@gmail.com')           //.Input valid email address
   cy.get('[data-qa="signup-button"]').click()
   cy.get(':nth-child(3) > .top > [data-qa="title"] > span > [name="title"]').click()                 //input valid title
   cy.get('[data-qa="password"]').type('alwaysseunline')                //password field

})


it('Verify the password field can not be blank ', () => {
   // cy.visit('http://automationexercise.com/login')
    //cy.get('[data-qa="signup-name"]').type('mayowa')                   //input valid name in the name field 
   // cy.get('[data-qa="signup-email"]').type('femiseuney@gmail.com')           //.Input valid email address
   // cy.get('[data-qa="signup-button"]').click()
   // cy.get(':nth-child(4) > .top > [data-qa="title"] > span > [name="title"]').click()                   //input valid title
   // cy.get('[data-qa="password"]')                         // blank password field
  //  cy.get('[data-qa="days"]').select(12)                                                                 //input valid days
  //  cy.get('[data-qa="months"]').select(4)                //input valid month
   // cy.get('[data-qa="years"]').select('1992')             //input valid year
   // cy.get('[data-qa="first_name"]').type('tunde')    //input valid first name
   // cy.get('[data-qa="last_name"]').type('lewis')       //input valid last name
   // cy.get('[data-qa="country"]').select('United States')       //input valid country
   // cy.get('[data-qa="create-account"]').click()      //click the create account button
   // cy.get('[data-qa="address"]').type('245 creekwood cove ln')      //input valid address
   // cy.get('[data-qa="state"]').type('tennessee')      //input valid state
   // cy.get('[data-qa="city"]').type('lenoir city')      //input valid city
   // cy.get('[data-qa="zipcode"]').type(37772)      //input valid zip code
   // cy.get('[data-qa="mobile_number"]').type(+13217868906)     //input valid number
   // cy.get('[data-qa="create-account"]').click()        //click the create account button
   // cy.get('[data-qa="continue-button"]').click()

})


it('Verify the password field accept uppercase,lowercase,digits,special characters ', () => {
  //  cy.visit('http://automationexercise.com/login')
  //  cy.get('[data-qa="signup-name"]').type('mayowa')                   //input valid name in the name field 
   // cy.get('[data-qa="signup-email"]').type('femiseuney@gmail.com')           //.Input valid email address
   // cy.get('[data-qa="signup-button"]').click()
   // cy.get(':nth-child(3) > .top > [data-qa="title"] > span > [name="title"]').click()                 //input valid title
   // cy.get('[data-qa="password"]').type('Olakunle81@')                         // input valid password 
   // cy.get('[data-qa="days"]').select(12)                                                                 //input valid days
   // cy.get('[data-qa="months"]').select(4)                //input valid month
   // cy.get('[data-qa="years"]').select('1992')             //input valid year
   // cy.get('[data-qa="first_name"]').type('tunde')    //input valid first name
   // cy.get('[data-qa="last_name"]').type('lewis')       //input valid last name
   // cy.get('[data-qa="country"]').select('United States')       //input valid country
   // cy.get('[data-qa="create-account"]').click()      //click the create account button
   // cy.get('[data-qa="address"]').type('245 creekwood cove ln')      //input valid address
   // cy.get('[data-qa="state"]').type('tennessee')      //input valid state
   // cy.get('[data-qa="city"]').type('lenoir city')      //input valid city
   // cy.get('[data-qa="zipcode"]').type(37772)      //input valid zip code
   // cy.get('[data-qa="mobile_number"]').type(+13217868906)     //input valid number
   // cy.get('[data-qa="create-account"]').click()        //click the create account button
   // cy.get('[data-qa="continue-button"]').click()

})

it('Verify the day on date of birth can not be empty ', () => {
   // cy.visit('http://automationexercise.com/login')
  //  cy.get('[data-qa="signup-name"]').type('mayowa')                   //input valid name in the name field 
   // cy.get('[data-qa="signup-email"]').type('kemiseuney@gmail.com')           //.Input valid email address
   // cy.get('[data-qa="signup-button"]').click()
   // cy.get(':nth-child(3) > .top > [data-qa="title"] > span > [name="title"]').click()                 //input valid title
   // cy.get('[data-qa="password"]').type('Olakunle81@')                         // input valid password 
   // cy.get('[data-qa="days"]')                          //leave the day empty                                           //input valid days
   // cy.get('[data-qa="months"]').select(4)                //input valid month
   // cy.get('[data-qa="years"]').select('1992')             //input valid year
  //  cy.get('[data-qa="first_name"]').type('tunde')    //input valid first name
  //  cy.get('[data-qa="last_name"]').type('lewis')       //input valid last name
  //  cy.get('[data-qa="country"]').select('United States')       //input valid country
  //  cy.get('[data-qa="create-account"]').click()      //click the create account button
  //  cy.get('[data-qa="address"]').type('245 creekwood cove ln')      //input valid address
  //  cy.get('[data-qa="state"]').type('tennessee')      //input valid state
  //  cy.get('[data-qa="city"]').type('lenoir city')      //input valid city
  //  cy.get('[data-qa="zipcode"]').type(37772)      //input valid zip code
  //  cy.get('[data-qa="mobile_number"]').type(+13217868906)     //input valid number
  //  cy.get('[data-qa="create-account"]').click()        //click the create account button
   // cy.get('[data-qa="continue-button"]').click()

})

it('Verify the dropdown of Date of birth on day is visible when clicked and clickable ', () => {
   // cy.visit('http://automationexercise.com/login')
   // cy.get('[data-qa="signup-name"]').type('mayowa')                   //input valid name in the name field 
   // cy.get('[data-qa="signup-email"]').type('femisey@gmail.com')           //.Input valid email address
   // cy.get('[data-qa="signup-button"]').click()
   // cy.get(':nth-child(4) > .top > [data-qa="title"] > span > [name="title"]').click()                   //input valid title
   // cy.get('[data-qa="password"]').type('Olakunle81@')                         // input valid password 
   // cy.get('[data-qa="days"]').select(12)                                            //input valid days

})


it('Verify the month on date of birth can not be empty ', () => {
  // cy.visit('http://automationexercise.com/login')
  //  cy.get('[data-qa="signup-name"]').type('mayowa')                   //input valid name in the name field 
  //  cy.get('[data-qa="signup-email"]').type('femiyseuney@gmail.com')           //.Input valid email address
  //  cy.get('[data-qa="signup-button"]').click()
  //  cy.get(':nth-child(3) > .top > [data-qa="title"] > span > [name="title"]').click()                 //input valid title
  //  cy.get('[data-qa="password"]').type('Olakunle81@')                         // input valid password 
  //  cy.get('[data-qa="days"]').select(12)                                                                 //input valid days
   // cy.get('[data-qa="months"]').select(4)                //leave the month blank
  //  cy.get('[data-qa="years"]').select('1992')             //input valid year
  //  cy.get('[data-qa="first_name"]').type('tunde')    //input valid first name
  //  cy.get('[data-qa="last_name"]').type('lewis')       //input valid last name
  //  cy.get('[data-qa="country"]').select('United States')       //input valid country
 //   cy.get('[data-qa="create-account"]').click()      //click the create account button
  //  cy.get('[data-qa="address"]').type('245 creekwood cove ln')      //input valid address
  //  cy.get('[data-qa="state"]').type('tennessee')      //input valid state
  //  cy.get('[data-qa="city"]').type('lenoir city')      //input valid city
   // cy.get('[data-qa="zipcode"]').type(37772)      //input valid zip code
  //  cy.get('[data-qa="mobile_number"]').type(+13217868906)     //input valid number
  //  cy.get('[data-qa="create-account"]').click()        //click the create account button
   // cy.get('[data-qa="continue-button"]').click()

})



it('Verify the dropdown of Date of birth on month is visible when clicked and clickable ', () => {
   // cy.visit('http://automationexercise.com/login')
   // cy.get('[data-qa="signup-name"]').type('mayowa')                   //input valid name in the name field 
   // cy.get('[data-qa="signup-email"]').type('femisey@gmail.com')           //.Input valid email address
   // cy.get('[data-qa="signup-button"]').click()
   // cy.get(':nth-child(4) > .top > [data-qa="title"] > span > [name="title"]').click()                   //input valid title
   // cy.get('[data-qa="password"]').type('Olakunle81@')                         // input valid password 
   // cy.get('[data-qa="months"]').select(4)                //input valid month

})

it('Verify the year on date of birth can not be empty ', () => {
   //cy.visit('http://automationexercise.com/login')
   // cy.get('[data-qa="signup-name"]').type('mayowa')                   //input valid name in the name field 
   // cy.get('[data-qa="signup-email"]').type('femiyseuney@gmail.com')           //.Input valid email address
   // cy.get('[data-qa="signup-button"]').click()
   // cy.get(':nth-child(3) > .top > [data-qa="title"] > span > [name="title"]').click()                 //input valid title
   // cy.get('[data-qa="password"]').type('Olakunle81@')                         // input valid password 
   // cy.get('[data-qa="days"]').select(12)                                                                 //input valid days
   // cy.get('[data-qa="months"]').select(4)                // input valid month
   // cy.get('[data-qa="years"]').select('1992')             //leave the year blank
   // cy.get('[data-qa="first_name"]').type('tunde')    //input valid first name
   // cy.get('[data-qa="last_name"]').type('lewis')       //input valid last name
   // cy.get('[data-qa="country"]').select('United States')       //input valid country
   // cy.get('[data-qa="create-account"]').click()      //click the create account button
   // cy.get('[data-qa="address"]').type('245 creekwood cove ln')      //input valid address
   // cy.get('[data-qa="state"]').type('tennessee')      //input valid state
   // cy.get('[data-qa="city"]').type('lenoir city')      //input valid city
   // cy.get('[data-qa="zipcode"]').type(37772)      //input valid zip code
   // cy.get('[data-qa="mobile_number"]').type(+13217868906)     //input valid number
   // cy.get('[data-qa="create-account"]').click()        //click the create account button
   // cy.get('[data-qa="continue-button"]').click()

})


it('Verify the dropdown of Date of birth on year is visible when clicked and clickable ', () => {
   // cy.visit('http://automationexercise.com/login')
   // cy.get('[data-qa="signup-name"]').type('mayowa')                   //input valid name in the name field 
   // cy.get('[data-qa="signup-email"]').type('femisey@gmail.com')           //.Input valid email address
   // cy.get('[data-qa="signup-button"]').click()
   // cy.get(':nth-child(4) > .top > [data-qa="title"] > span > [name="title"]').click()                   //input valid title
  //  cy.get('[data-qa="password"]').type('Olakunle81@')                       // input valid password 
  //  cy.get('[data-qa="years"]').select('1992')             //input valid year
})


it('Verify the first name field does not accept numbers as first name ', () => {
   // cy.visit('http://automationexercise.com/login')
  //  cy.get('[data-qa="signup-name"]').type('mayowa')                   //input valid name in the name field 
  //  cy.get('[data-qa="signup-email"]').type('funmiseunepo@gmail.com')           //.Input valid email address
  //  cy.get('[data-qa="signup-button"]').click()
  //  cy.get(':nth-child(3) > .top > [data-qa="title"] > span > [name="title"]').click()                 //input valid title
  //  cy.get('[data-qa="password"]').type('Olakunle81@')                         // input valid password 
  //  cy.get('[data-qa="days"]').select(12)                                                                 //input valid days
  //  cy.get('[data-qa="months"]').select(4)                //input valid month
  //  cy.get('[data-qa="years"]').select('1992')             //input valid year
  //  cy.get('[data-qa="first_name"]').type(8667209172)    //input numbers as first name
  //  cy.get('[data-qa="last_name"]').type('lewis')       //input valid last name
  //  cy.get('[data-qa="country"]').select('United States')       //input valid country
  //  cy.get('[data-qa="create-account"]').click()      //click the create account button
  //  cy.get('[data-qa="address"]').type('245 creekwood cove ln')      //input valid address
//    cy.get('[data-qa="state"]').type('tennessee')      //input valid state
  //  cy.get('[data-qa="city"]').type('lenoir city')      //input valid city
  //  cy.get('[data-qa="zipcode"]').type(37772)      //input valid zip code
  //  cy.get('[data-qa="mobile_number"]').type(+13217868906)     //input valid number
  //  cy.get('[data-qa="create-account"]').click()        //click the create account button
  //  cy.get('[data-qa="continue-button"]').click()

})


it('Verify the first name field have maximum character input ', () => {
 //   cy.visit('http://automationexercise.com/login')
 //   cy.get('[data-qa="signup-name"]').type('mayowa')                   //input valid name in the name field 
 //   cy.get('[data-qa="signup-email"]').type('funmislow@gmail.com')           //.Input valid email address
 //   cy.get('[data-qa="signup-button"]').click()
 //   cy.get(':nth-child(3) > .top > [data-qa="title"] > span > [name="title"]').click()                 //input valid title
 //   cy.get('[data-qa="password"]').type('Olakunle81@')                         // input valid password 
 //   cy.get('[data-qa="days"]').select(12)                                                                 //input valid days
  //  cy.get('[data-qa="months"]').select(4)                //input valid month
 //   cy.get('[data-qa="years"]').select('1992')             //input valid year
 //   cy.get('[data-qa="first_name"]').type('jshuiwoksnxvhwyeisvbdjmaklsiiewuejdojuayhduiiuasehcbn')    //input more than 15 alphabelts as first name
  //  cy.get('[data-qa="last_name"]').type('lewis')       //input valid last name
  //  cy.get('[data-qa="country"]').select('United States')       //input valid country
  //  cy.get('[data-qa="create-account"]').click()      //click the create account button
  //  cy.get('[data-qa="address"]').type('245 creekwood cove ln')      //input valid address
  //  cy.get('[data-qa="state"]').type('tennessee')      //input valid state
  //  cy.get('[data-qa="city"]').type('lenoir city')      //input valid city
  //  cy.get('[data-qa="zipcode"]').type(37772)      //input valid zip code
  //  cy.get('[data-qa="mobile_number"]').type(+13217868906)     //input valid number
  //  cy.get('[data-qa="create-account"]').click()        //click the create account button
  //  cy.get('[data-qa="continue-button"]').click()

})


it('Verify the first name field do not accept space in between the name ', () => {
  //  cy.visit('http://automationexercise.com/login')
  //  cy.get('[data-qa="signup-name"]').type('mayowa')                   //input valid name in the name field 
  //  cy.get('[data-qa="signup-email"]').type('funmislow@gmail.com')           //.Input valid email address
  //  cy.get('[data-qa="signup-button"]').click()
  //  cy.get(':nth-child(3) > .top > [data-qa="title"] > span > [name="title"]').click()                 //input valid title
  //  cy.get('[data-qa="password"]').type('Olakunle81@')                         // input valid password 
  //  cy.get('[data-qa="days"]').select(12)                                                                 //input valid days
  //  cy.get('[data-qa="months"]').select(4)                //input valid month
  //  cy.get('[data-qa="years"]').select('1992')             //input valid year
  //  cy.get('[data-qa="first_name"]').type('oluwa seun')       //input a name and put space in between
  //  cy.get('[data-qa="last_name"]').type('lewis')       //input valid last name
  //  cy.get('[data-qa="country"]').select('United States')       //input valid country
  //  cy.get('[data-qa="create-account"]').click()      //click the create account button
  //  cy.get('[data-qa="address"]').type('245 creekwood cove ln')      //input valid address
  //  cy.get('[data-qa="state"]').type('tennessee')      //input valid state
  //  cy.get('[data-qa="city"]').type('lenoir city')      //input valid city
  //  cy.get('[data-qa="zipcode"]').type(37772)      //input valid zip code
  //  cy.get('[data-qa="mobile_number"]').type(+13217868906)     //input valid number
  //  cy.get('[data-qa="create-account"]').click()        //click the create account button
  //  cy.get('[data-qa="continue-button"]').click()

})


it('Verify the first name field does not accept special characters as first name ', () => {
  //  cy.visit('http://automationexercise.com/login')
  //  cy.get('[data-qa="signup-name"]').type('mayowa')                   //input valid name in the name field 
  //  cy.get('[data-qa="signup-email"]').type('funmisloyw@gmail.com')           //.Input valid email address
  //  cy.get('[data-qa="signup-button"]').click()
  //  cy.get(':nth-child(3) > .top > [data-qa="title"] > span > [name="title"]').click()                 //input valid title
  //  cy.get('[data-qa="password"]').type('Olakunle81@')                         // input valid password 
  //  cy.get('[data-qa="days"]').select(12)                                                                 //input valid days
  //  cy.get('[data-qa="months"]').select(4)                //input valid month
  //  cy.get('[data-qa="years"]').select('1992')             //input valid year
  //  cy.get('[data-qa="first_name"]').type('$%%%^^^&***(()(*&^^%$##@@##$')       //Input special characters in the first name field
  //  cy.get('[data-qa="last_name"]').type('lewis')       //input valid last name
  //  cy.get('[data-qa="country"]').select('United States')       //input valid country
  //  cy.get('[data-qa="create-account"]').click()      //click the create account button
  //  cy.get('[data-qa="address"]').type('245 creekwood cove ln')      //input valid address
  //  cy.get('[data-qa="state"]').type('tennessee')      //input valid state
  //  cy.get('[data-qa="city"]').type('lenoir city')      //input valid city
  //  cy.get('[data-qa="zipcode"]').type(37772)      //input valid zip code
  //  cy.get('[data-qa="mobile_number"]').type(+13217868906)     //input valid number
  //  cy.get('[data-qa="create-account"]').click()        //click the create account button
  //  cy.get('[data-qa="continue-button"]').click()

})

it('Verify first name field accept apostophe ', () => {
   // cy.visit('http://automationexercise.com/login')
  //  cy.get('[data-qa="signup-name"]').type('mayowa')                   //input valid name in the name field 
  //  cy.get('[data-qa="signup-email"]').type('funmisloye@gmail.com')           //.Input valid email address
   // cy.get('[data-qa="signup-button"]').click()
  //  cy.get(':nth-child(3) > .top > [data-qa="title"] > span > [name="title"]').click()                 //input valid title
  //  cy.get('[data-qa="password"]').type('Olakunle81@')                         // input valid password 
  //  cy.get('[data-qa="days"]').select(12)                                                                 //input valid days
  //  cy.get('[data-qa="months"]').select(4)                //input valid month
  //  cy.get('[data-qa="years"]').select('1992')             //input valid year
  //  cy.get('[data-qa="first_name"]').type(" D'Wayne ")       //input a name and input an apostophe with it
   // cy.get('[data-qa="last_name"]').type('lewis')       //input valid last name
   // cy.get('[data-qa="country"]').select('United States')       //input valid country
  //  cy.get('[data-qa="create-account"]').click()      //click the create account button
  //  cy.get('[data-qa="address"]').type('245 creekwood cove ln')      //input valid address
  //  cy.get('[data-qa="state"]').type('tennessee')      //input valid state
  //  cy.get('[data-qa="city"]').type('lenoir city')      //input valid city
   // cy.get('[data-qa="zipcode"]').type(37772)      //input valid zip code
  //  cy.get('[data-qa="mobile_number"]').type(+13217868906)     //input valid number
   // cy.get('[data-qa="create-account"]').click()        //click the create account button
  //  cy.get('[data-qa="continue-button"]').click()

})


it('Verify first name field accept alphabelts ', () => {
   // cy.visit('http://automationexercise.com/login')
  //  cy.get('[data-qa="signup-name"]').type('mayowa')                   //input valid name in the name field 
  //  cy.get('[data-qa="signup-email"]').type('funmisloyem@gmail.com')           //.Input valid email address
   // cy.get('[data-qa="signup-button"]').click()
  //  cy.get(':nth-child(3) > .top > [data-qa="title"] > span > [name="title"]').click()                 //input valid title
  //  cy.get('[data-qa="password"]').type('Olakunle81@')                         // input valid password 
  //  cy.get('[data-qa="days"]').select(12)                                                                 //input valid days
  //  cy.get('[data-qa="months"]').select(4)                //input valid month
  //  cy.get('[data-qa="years"]').select('1992')             //input valid year
  //  cy.get('[data-qa="first_name"]').type('tolulope')       //input a valid alphabelts in the first name field
   // cy.get('[data-qa="last_name"]').type('lewis')       //input valid last name
   // cy.get('[data-qa="country"]').select('United States')       //input valid country
  //  cy.get('[data-qa="create-account"]').click()      //click the create account button
  //  cy.get('[data-qa="address"]').type('245 creekwood cove ln')      //input valid address
  //  cy.get('[data-qa="state"]').type('tennessee')      //input valid state
  //  cy.get('[data-qa="city"]').type('lenoir city')      //input valid city
   // cy.get('[data-qa="zipcode"]').type(37772)      //input valid zip code
  //  cy.get('[data-qa="mobile_number"]').type(+13217868906)     //input valid number
   // cy.get('[data-qa="create-account"]').click()        //click the create account button
  //  cy.get('[data-qa="continue-button"]').click()

})

it('Verify first name field can not be blank ', () => {
  //  cy.visit('http://automationexercise.com/login')
  //  cy.get('[data-qa="signup-name"]').type('mayowa')                   //input valid name in the name field 
  //  cy.get('[data-qa="signup-email"]').type('funmispin@gmail.com')           //.Input valid email address
  //  cy.get('[data-qa="signup-button"]').click()
  //  cy.get(':nth-child(3) > .top > [data-qa="title"] > span > [name="title"]').click()                 //input valid title
  //  cy.get('[data-qa="password"]').type('Olakunle81@')                         // input valid password 
  //  cy.get('[data-qa="days"]').select(12)                                                                 //input valid days
  //  cy.get('[data-qa="months"]').select(4)                //input valid month
  //  cy.get('[data-qa="years"]').select('1992')             //input valid year
  //  cy.get('[data-qa="first_name"]')       //leave the first name field blank
  //  cy.get('[data-qa="last_name"]').type('lewis')       //input valid last name
 //   cy.get('[data-qa="country"]').select('United States')       //input valid country
   // cy.get('[data-qa="create-account"]').click()      //click the create account button
  //  cy.get('[data-qa="address"]').type('245 creekwood cove ln')      //input valid address
  //  cy.get('[data-qa="state"]').type('tennessee')      //input valid state
  //  cy.get('[data-qa="city"]').type('lenoir city')      //input valid city
  //  cy.get('[data-qa="zipcode"]').type(37772)      //input valid zip code
  //  cy.get('[data-qa="mobile_number"]').type(+13217868906)     //input valid number
   // cy.get('[data-qa="create-account"]').click()        //click the create account button
  //  cy.get('[data-qa="continue-button"]').click()

})


it('Verify the last name field does not accept numbers as last name ', () => {
   // cy.visit('http://automationexercise.com/login')
   // cy.get('[data-qa="signup-name"]').type('mayowa')                   //input valid name in the name field 
   // cy.get('[data-qa="signup-email"]').type('funmiseunepoy@gmail.com')           //.Input valid email address
   // cy.get('[data-qa="signup-button"]').click()
   // cy.get(':nth-child(3) > .top > [data-qa="title"] > span > [name="title"]').click()                 //input valid title
   // cy.get('[data-qa="password"]').type('Olakunle81@')                         // input valid password 
   // cy.get('[data-qa="days"]').select(12)                                                                 //input valid days
   // cy.get('[data-qa="months"]').select(4)                //input valid month
   // cy.get('[data-qa="years"]').select('1992')             //input valid year
   // cy.get('[data-qa="first_name"]').type(lewis)    //input valid first name
   // cy.get('[data-qa="last_name"]').type(8667209172)       //input numbers as first name
  //  cy.get('[data-qa="country"]').select('United States')       //input valid country
  //  cy.get('[data-qa="create-account"]').click()      //click the create account button
  //  cy.get('[data-qa="address"]').type('245 creekwood cove ln')      //input valid address
//    cy.get('[data-qa="state"]').type('tennessee')      //input valid state
  //  cy.get('[data-qa="city"]').type('lenoir city')      //input valid city
  //  cy.get('[data-qa="zipcode"]').type(37772)      //input valid zip code
  //  cy.get('[data-qa="mobile_number"]').type(+13217868906)     //input valid number
  //  cy.get('[data-qa="create-account"]').click()        //click the create account button
  //  cy.get('[data-qa="continue-button"]').click()

})

it('Verify the last name field have maximum character input ', () => {
 //   cy.visit('http://automationexercise.com/login')
 //   cy.get('[data-qa="signup-name"]').type('mayowa')                   //input valid name in the name field 
 //   cy.get('[data-qa="signup-email"]').type('funmislow@gmail.com')           //.Input valid email address
 //   cy.get('[data-qa="signup-button"]').click()
 //   cy.get(':nth-child(3) > .top > [data-qa="title"] > span > [name="title"]').click()                 //input valid title
 //   cy.get('[data-qa="password"]').type('Olakunle81@')                         // input valid password 
 //   cy.get('[data-qa="days"]').select(12)                                                                 //input valid days
  //  cy.get('[data-qa="months"]').select(4)                //input valid month
 //   cy.get('[data-qa="years"]').select('1992')             //input valid year
 //   cy.get('[data-qa="first_name"]').type('lewis')    //input valid first name
  //  cy.get('[data-qa="last_name"]').type('jshuiwoksnxvhwyeisvbdjmaklsiiewuejdojuayhduiiuasehcbn')       //input more than 15 alphabelts as last name
  //  cy.get('[data-qa="country"]').select('United States')       //input valid country
  //  cy.get('[data-qa="create-account"]').click()      //click the create account button
  //  cy.get('[data-qa="address"]').type('245 creekwood cove ln')      //input valid address
  //  cy.get('[data-qa="state"]').type('tennessee')      //input valid state
  //  cy.get('[data-qa="city"]').type('lenoir city')      //input valid city
  //  cy.get('[data-qa="zipcode"]').type(37772)      //input valid zip code
  //  cy.get('[data-qa="mobile_number"]').type(+13217868906)     //input valid number
  //  cy.get('[data-qa="create-account"]').click()        //click the create account button
  //  cy.get('[data-qa="continue-button"]').click()

})

it('Verify the last name field do not accept space in between the name ', () => {
  //  cy.visit('http://automationexercise.com/login')
  //  cy.get('[data-qa="signup-name"]').type('mayowa')                   //input valid name in the name field 
  //  cy.get('[data-qa="signup-email"]').type('funmislow@gmail.com')           //.Input valid email address
  //  cy.get('[data-qa="signup-button"]').click()
  //  cy.get(':nth-child(3) > .top > [data-qa="title"] > span > [name="title"]').click()                 //input valid title
  //  cy.get('[data-qa="password"]').type('Olakunle81@')                         // input valid password 
  //  cy.get('[data-qa="days"]').select(12)                                                                 //input valid days
  //  cy.get('[data-qa="months"]').select(4)                //input valid month
  //  cy.get('[data-qa="years"]').select('1992')             //input valid year
  //  cy.get('[data-qa="first_name"]').type('seun')       //input valid first name
  //  cy.get('[data-qa="last_name"]').type('bolu watife')       //input a name and put space in between
  //  cy.get('[data-qa="country"]').select('United States')       //input valid country
  //  cy.get('[data-qa="create-account"]').click()      //click the create account button
  //  cy.get('[data-qa="address"]').type('245 creekwood cove ln')      //input valid address
  //  cy.get('[data-qa="state"]').type('tennessee')      //input valid state
  //  cy.get('[data-qa="city"]').type('lenoir city')      //input valid city
  //  cy.get('[data-qa="zipcode"]').type(37772)      //input valid zip code
  //  cy.get('[data-qa="mobile_number"]').type(+13217868906)     //input valid number
  //  cy.get('[data-qa="create-account"]').click()        //click the create account button
  //  cy.get('[data-qa="continue-button"]').click()

})

it('Verify the last name field does not accept special characters as last name ', () => {
  //  cy.visit('http://automationexercise.com/login')
  //  cy.get('[data-qa="signup-name"]').type('mayowa')                   //input valid name in the name field 
  //  cy.get('[data-qa="signup-email"]').type('funmisloyw@gmail.com')           //.Input valid email address
  //  cy.get('[data-qa="signup-button"]').click()
  //  cy.get(':nth-child(3) > .top > [data-qa="title"] > span > [name="title"]').click()                 //input valid title
  //  cy.get('[data-qa="password"]').type('Olakunle81@')                         // input valid password 
  //  cy.get('[data-qa="days"]').select(12)                                                                 //input valid days
  //  cy.get('[data-qa="months"]').select(4)                //input valid month
  //  cy.get('[data-qa="years"]').select('1992')             //input valid year
  //  cy.get('[data-qa="first_name"]').type('lewis')       //input valid first name 
  //  cy.get('[data-qa="last_name"]').type('$%%%^^^&***(()(*&^^%$##@@##$')       //Input special characters in the last name field
  //  cy.get('[data-qa="country"]').select('United States')       //input valid country
  //  cy.get('[data-qa="create-account"]').click()      //click the create account button
  //  cy.get('[data-qa="address"]').type('245 creekwood cove ln')      //input valid address
  //  cy.get('[data-qa="state"]').type('tennessee')      //input valid state
  //  cy.get('[data-qa="city"]').type('lenoir city')      //input valid city
  //  cy.get('[data-qa="zipcode"]').type(37772)      //input valid zip code
  //  cy.get('[data-qa="mobile_number"]').type(+13217868906)     //input valid number
  //  cy.get('[data-qa="create-account"]').click()        //click the create account button
  //  cy.get('[data-qa="continue-button"]').click()

})


it('Verify last name field accept apostophe ', () => {
   // cy.visit('http://automationexercise.com/login')
  //  cy.get('[data-qa="signup-name"]').type('mayowa')                   //input valid name in the name field 
  //  cy.get('[data-qa="signup-email"]').type('funmisloye@gmail.com')           //.Input valid email address
   // cy.get('[data-qa="signup-button"]').click()
  //  cy.get(':nth-child(3) > .top > [data-qa="title"] > span > [name="title"]').click()                 //input valid title
  //  cy.get('[data-qa="password"]').type('Olakunle81@')                         // input valid password 
  //  cy.get('[data-qa="days"]').select(12)                                                                 //input valid days
  //  cy.get('[data-qa="months"]').select(4)                //input valid month
  //  cy.get('[data-qa="years"]').select('1992')             //input valid year
  //  cy.get('[data-qa="first_name"]').type('lewis')       //input valid first name
   // cy.get('[data-qa="last_name"]').type(" D'Wayne ")       //input a name and input an apostophe with it
   // cy.get('[data-qa="country"]').select('United States')       //input valid country
  //  cy.get('[data-qa="create-account"]').click()      //click the create account button
  //  cy.get('[data-qa="address"]').type('245 creekwood cove ln')      //input valid address
  //  cy.get('[data-qa="state"]').type('tennessee')      //input valid state
  //  cy.get('[data-qa="city"]').type('lenoir city')      //input valid city
   // cy.get('[data-qa="zipcode"]').type(37772)      //input valid zip code
  //  cy.get('[data-qa="mobile_number"]').type(+13217868906)     //input valid number
   // cy.get('[data-qa="create-account"]').click()        //click the create account button
  //  cy.get('[data-qa="continue-button"]').click()

})


it('Verify last name field accept alphabelts ', () => {
   // cy.visit('http://automationexercise.com/login')
  //  cy.get('[data-qa="signup-name"]').type('mayowa')                   //input valid name in the name field 
  //  cy.get('[data-qa="signup-email"]').type('funmisloyem@gmail.com')           //.Input valid email address
   // cy.get('[data-qa="signup-button"]').click()
  //  cy.get(':nth-child(3) > .top > [data-qa="title"] > span > [name="title"]').click()                 //input valid title
  //  cy.get('[data-qa="password"]').type('Olakunle81@')                         // input valid password 
  //  cy.get('[data-qa="days"]').select(12)                                                                 //input valid days
  //  cy.get('[data-qa="months"]').select(4)                //input valid month
  //  cy.get('[data-qa="years"]').select('1992')             //input valid year
  //  cy.get('[data-qa="first_name"]').type('tolulope')       //input valid first name
   // cy.get('[data-qa="last_name"]').type('lewis')       //input valid alphabelts in the last name field
   // cy.get('[data-qa="country"]').select('United States')       //input valid country
  //  cy.get('[data-qa="create-account"]').click()      //click the create account button
  //  cy.get('[data-qa="address"]').type('245 creekwood cove ln')      //input valid address
  //  cy.get('[data-qa="state"]').type('tennessee')      //input valid state
  //  cy.get('[data-qa="city"]').type('lenoir city')      //input valid city
   // cy.get('[data-qa="zipcode"]').type(37772)      //input valid zip code
  //  cy.get('[data-qa="mobile_number"]').type(+13217868906)     //input valid number
   // cy.get('[data-qa="create-account"]').click()        //click the create account button
  //  cy.get('[data-qa="continue-button"]').click()

})

it('Verify last name field can not be blank ', () => {
   // cy.visit('http://automationexercise.com/login')
  //  cy.get('[data-qa="signup-name"]').type('mayowa')                   //input valid name in the name field 
  //  cy.get('[data-qa="signup-email"]').type('funmisloyem@gmail.com')           //.Input valid email address
   // cy.get('[data-qa="signup-button"]').click()
  //  cy.get(':nth-child(3) > .top > [data-qa="title"] > span > [name="title"]').click()                 //input valid title
  //  cy.get('[data-qa="password"]').type('Olakunle81@')                         // input valid password 
  //  cy.get('[data-qa="days"]').select(12)                                                                 //input valid days
  //  cy.get('[data-qa="months"]').select(4)                //input valid month
  //  cy.get('[data-qa="years"]').select('1992')             //input valid year
  //  cy.get('[data-qa="first_name"]').type('tolulope')       //input a valid first name
   // cy.get('[data-qa="last_name"]')                     //leave the last name field blank
   // cy.get('[data-qa="country"]').select('United States')       //input valid country
  //  cy.get('[data-qa="create-account"]').click()      //click the create account button
  //  cy.get('[data-qa="address"]').type('245 creekwood cove ln')      //input valid address
  //  cy.get('[data-qa="state"]').type('tennessee')      //input valid state
  //  cy.get('[data-qa="city"]').type('lenoir city')      //input valid city
   // cy.get('[data-qa="zipcode"]').type(37772)      //input valid zip code
  //  cy.get('[data-qa="mobile_number"]').type(+13217868906)     //input valid number
   // cy.get('[data-qa="create-account"]').click()        //click the create account button
  //  cy.get('[data-qa="continue-button"]').click()

})

it('Verify the company field accept alphabelts ', () => {
  // cy.visit('http://automationexercise.com/login')
   // cy.get('[data-qa="signup-name"]').type('mayowa')                   //input valid name in the name field 
   // cy.get('[data-qa="signup-email"]').type('fehmiyseuney@gmail.com')           //.Input valid email address
  //  cy.get('[data-qa="signup-button"]').click()
   // cy.get(':nth-child(3) > .top > [data-qa="title"] > span > [name="title"]').click()                 //input valid title
   // cy.get('[data-qa="password"]').type('Olakunle81@')                         // input valid password 
   // cy.get('[data-qa="days"]').select(12)                   //input valid day                                   //input valid days
   // cy.get('[data-qa="months"]').select(4)                //input valid month
   // cy.get('[data-qa="years"]').select('1992')             //input valid year
  //  cy.get('[data-qa="first_name"]').type('tunde')       //input valid first name
  //  cy.get('[data-qa="last_name"]').type('lewis')       //input valid last name
  //  cy.get('[data-qa="company"]').type('mandatory')
  //  cy.get('[data-qa="country"]').select('United States')       //input valid country
  //  cy.get('[data-qa="create-account"]').click()      //click the create account button
 //   cy.get('[data-qa="address"]').type('245 creekwood cove ln')      //input valid address
  //  cy.get('[data-qa="state"]').type('tennessee')      //input valid state
  //  cy.get('[data-qa="city"]').type('lenoir city')      //input valid city
  //  cy.get('[data-qa="zipcode"]').type(37772)      //input valid zip code
  //  cy.get('[data-qa="mobile_number"]').type(+13217868906)     //input valid number
  //  cy.get('[data-qa="create-account"]').click()        //click the create account button
   // cy.get('[data-qa="continue-button"]').click()

})

it('Verify the company field accept space in between the name ', () => {
  // cy.visit('http://automationexercise.com/login')
   // cy.get('[data-qa="signup-name"]').type('mayowa')                   //input valid name in the name field 
   // cy.get('[data-qa="signup-email"]').type('fehmiyseuney@gmail.com')           //.Input valid email address
  //  cy.get('[data-qa="signup-button"]').click()
   // cy.get(':nth-child(3) > .top > [data-qa="title"] > span > [name="title"]').click()                 //input valid title
   // cy.get('[data-qa="password"]').type('Olakunle81@')                         // input valid password 
   // cy.get('[data-qa="days"]').select(12)                   //input valid day                                   //input valid days
   // cy.get('[data-qa="months"]').select(4)                //input valid month
   // cy.get('[data-qa="years"]').select('1992')             //input valid year
  //  cy.get('[data-qa="first_name"]').type('tunde')       //input valid first name
  //  cy.get('[data-qa="last_name"]').type('lewis')       //input valid last name
  //  cy.get('[data-qa="company"]').type('mandatory company')
  //  cy.get('[data-qa="country"]').select('United States')       //input valid country
  //  cy.get('[data-qa="create-account"]').click()      //click the create account button
 //   cy.get('[data-qa="address"]').type('245 creekwood cove ln')      //input valid address
  //  cy.get('[data-qa="state"]').type('tennessee')      //input valid state
  //  cy.get('[data-qa="city"]').type('lenoir city')      //input valid city
  //  cy.get('[data-qa="zipcode"]').type(37772)      //input valid zip code
  //  cy.get('[data-qa="mobile_number"]').type(+13217868906)     //input valid number
  //  cy.get('[data-qa="create-account"]').click()        //click the create account button
   // cy.get('[data-qa="continue-button"]').click()

})

it('Verify the company field accept apostophe ', () => {
  // cy.visit('http://automationexercise.com/login')
   // cy.get('[data-qa="signup-name"]').type('mayowa')                   //input valid name in the name field 
   // cy.get('[data-qa="signup-email"]').type('fehmiyseuney@gmail.com')           //.Input valid email address
  //  cy.get('[data-qa="signup-button"]').click()
   // cy.get(':nth-child(3) > .top > [data-qa="title"] > span > [name="title"]').click()                 //input valid title
   // cy.get('[data-qa="password"]').type('Olakunle81@')                         // input valid password 
   // cy.get('[data-qa="days"]').select(12)                   //input valid day                                   //input valid days
   // cy.get('[data-qa="months"]').select(4)                //input valid month
   // cy.get('[data-qa="years"]').select('1992')             //input valid year
  //  cy.get('[data-qa="first_name"]').type('tunde')       //input valid first name
  //  cy.get('[data-qa="last_name"]').type('lewis')       //input valid last name
  //  cy.get('[data-qa="company"]').type(" dangote's company ")
  //  cy.get('[data-qa="country"]').select('United States')       //input valid country
  //  cy.get('[data-qa="create-account"]').click()      //click the create account button
 //   cy.get('[data-qa="address"]').type('245 creekwood cove ln')      //input valid address
  //  cy.get('[data-qa="state"]').type('tennessee')      //input valid state
  //  cy.get('[data-qa="city"]').type('lenoir city')      //input valid city
  //  cy.get('[data-qa="zipcode"]').type(37772)      //input valid zip code
  //  cy.get('[data-qa="mobile_number"]').type(+13217868906)     //input valid number
  //  cy.get('[data-qa="create-account"]').click()        //click the create account button
   // cy.get('[data-qa="continue-button"]').click()

})

it('Verify the company field have maximum character input ', () => {
  // cy.visit('http://automationexercise.com/login')
   // cy.get('[data-qa="signup-name"]').type('mayowa')                   //input valid name in the name field 
   // cy.get('[data-qa="signup-email"]').type('fehmiyseuney@gmail.com')           //.Input valid email address
  //  cy.get('[data-qa="signup-button"]').click()
   // cy.get(':nth-child(3) > .top > [data-qa="title"] > span > [name="title"]').click()                 //input valid title
   // cy.get('[data-qa="password"]').type('Olakunle81@')                         // input valid password 
   // cy.get('[data-qa="days"]').select(12)                   //input valid day                                   //input valid days
   // cy.get('[data-qa="months"]').select(4)                //input valid month
   // cy.get('[data-qa="years"]').select('1992')             //input valid year
  //  cy.get('[data-qa="first_name"]').type('tunde')       //input valid first name
  //  cy.get('[data-qa="last_name"]').type('lewis')       //input valid last name
  //  cy.get('[data-qa="company"]').type('hjsksslallanxxnxvcvsgwywyiwowpwposdkkdkddmdmmdmdkkdkdododpeowkwiuuwyysgsshwywyteyeyeuueidoeopdkldkdmcncncbcvdfeteyeyywwuwioaoapapapaolskssjsj')
  //  cy.get('[data-qa="country"]').select('United States')       //input valid country
  //  cy.get('[data-qa="create-account"]').click()      //click the create account button
 //   cy.get('[data-qa="address"]').type('245 creekwood cove ln')      //input valid address
  //  cy.get('[data-qa="state"]').type('tennessee')      //input valid state
  //  cy.get('[data-qa="city"]').type('lenoir city')      //input valid city
  //  cy.get('[data-qa="zipcode"]').type(37772)      //input valid zip code
  //  cy.get('[data-qa="mobile_number"]').type(+13217868906)     //input valid number
  //  cy.get('[data-qa="create-account"]').click()        //click the create account button
   // cy.get('[data-qa="continue-button"]').click()

})

it('Verify the company field can be left blank as its not astericked ', () => {
  // cy.visit('http://automationexercise.com/login')
   // cy.get('[data-qa="signup-name"]').type('mayowa')                   //input valid name in the name field 
   // cy.get('[data-qa="signup-email"]').type('fehmiyseuney@gmail.com')           //.Input valid email address
  //  cy.get('[data-qa="signup-button"]').click()
   // cy.get(':nth-child(3) > .top > [data-qa="title"] > span > [name="title"]').click()                 //input valid title
   // cy.get('[data-qa="password"]').type('Olakunle81@')                         // input valid password 
   // cy.get('[data-qa="days"]').select(12)                   //input valid day                                   //input valid days
   // cy.get('[data-qa="months"]').select(4)                //input valid month
   // cy.get('[data-qa="years"]').select('1992')             //input valid year
  //  cy.get('[data-qa="first_name"]').type('tunde')       //input valid first name
  //  cy.get('[data-qa="last_name"]').type('lewis')       //input valid last name
  //  cy.get('[data-qa="company"]').type()               //leave it blank
  //  cy.get('[data-qa="country"]').select('United States')       //input valid country
  //  cy.get('[data-qa="create-account"]').click()      //click the create account button
 //   cy.get('[data-qa="address"]').type('245 creekwood cove ln')      //input valid address
  //  cy.get('[data-qa="state"]').type('tennessee')      //input valid state
  //  cy.get('[data-qa="city"]').type('lenoir city')      //input valid city
  //  cy.get('[data-qa="zipcode"]').type(37772)      //input valid zip code
  //  cy.get('[data-qa="mobile_number"]').type(+13217868906)     //input valid number
  //  cy.get('[data-qa="create-account"]').click()        //click the create account button
   // cy.get('[data-qa="continue-button"]').click()

})


it('Verify the address field can not be blank ', () => {
 //  cy.visit('http://automationexercise.com/login')
  //  cy.get('[data-qa="signup-name"]').type('mayowa')                   //input valid name in the name field 
  //  cy.get('[data-qa="signup-email"]').type('funmiyseuney@gmail.com')           //.Input valid email address
   // cy.get('[data-qa="signup-button"]').click()
   // cy.get(':nth-child(3) > .top > [data-qa="title"] > span > [name="title"]').click()                 //input valid title
   // cy.get('[data-qa="password"]').type('Olakunle81@')                         // input valid password 
  //  cy.get('[data-qa="days"]').select(12)                   //input valid day                                   //input valid days
  //  cy.get('[data-qa="months"]').select(4)                //input valid month
   // cy.get('[data-qa="years"]').select('1992')             //input valid year
   // cy.get('[data-qa="first_name"]').type('tunde')       //input valid first name
   // cy.get('[data-qa="last_name"]').type('lewis')       //input valid last name
   // cy.get('[data-qa="company"]').type('seju')
 //   cy.get('[data-qa="address"]').type('245 creekwood cove ln')      //leave the address blank
  //  cy.get('[data-qa="country"]').select('United States')       //input valid country
  //  cy.get('[data-qa="create-account"]').click()      //click the create account button
  //  cy.get('[data-qa="state"]').type('tennessee')      //input valid state
  //  cy.get('[data-qa="city"]').type('lenoir city')      //input valid city
  //  cy.get('[data-qa="zipcode"]').type(37772)      //input valid zip code
  //  cy.get('[data-qa="mobile_number"]').type(+13217868906)     //input valid number
  //  cy.get('[data-qa="create-account"]').click()        //click the create account button
   // cy.get('[data-qa="continue-button"]').click()

})

it('Verify the address field accept alphabelts ', () => {
 //  cy.visit('http://automationexercise.com/login')
 //   cy.get('[data-qa="signup-name"]').type('mayowa')                   //input valid name in the name field 
 //   cy.get('[data-qa="signup-email"]').type('funmiyseuney@gmail.com')           //.Input valid email address
  //  cy.get('[data-qa="signup-button"]').click()
  //  cy.get(':nth-child(3) > .top > [data-qa="title"] > span > [name="title"]').click()                 //input valid title
 //   cy.get('[data-qa="password"]').type('Olakunle81@')                         // input valid password 
  //  cy.get('[data-qa="days"]').select(12)                   //input valid day                                   //input valid days
  //  cy.get('[data-qa="months"]').select(4)                //input valid month
  //  cy.get('[data-qa="years"]').select('1992')             //input valid year
  //  cy.get('[data-qa="first_name"]').type('tunde')       //input valid first name
  //  cy.get('[data-qa="last_name"]').type('lewis')       //input valid last name
  //  cy.get('[data-qa="company"]').type('seju')
 //   cy.get('[data-qa="address"]').type('creekwood')      //input alphabelts 
  //  cy.get('[data-qa="country"]').select('United States')       //input valid country
  //  cy.get('[data-qa="create-account"]').click()      //click the create account button
  //  cy.get('[data-qa="state"]').type('tennessee')      //input valid state
  //  cy.get('[data-qa="city"]').type('lenoir city')      //input valid city
  //  cy.get('[data-qa="zipcode"]').type(37772)      //input valid zip code
  //  cy.get('[data-qa="mobile_number"]').type(+13217868906)     //input valid number
  //  cy.get('[data-qa="create-account"]').click()        //click the create account button
   // cy.get('[data-qa="continue-button"]').click()

})

it('Verify the address field accept aphabelts with space in between ', () => {
 //  cy.visit('http://automationexercise.com/login')
  //  cy.get('[data-qa="signup-name"]').type('mayowa')                   //input valid name in the name field 
  //  cy.get('[data-qa="signup-email"]').type('funmiyseuney@gmail.com')           //.Input valid email address
  //  cy.get('[data-qa="signup-button"]').click()
  //  cy.get(':nth-child(3) > .top > [data-qa="title"] > span > [name="title"]').click()                 //input valid title
   // cy.get('[data-qa="password"]').type('Olakunle81@')                         // input valid password 
  //  cy.get('[data-qa="days"]').select(12)                   //input valid day                                   //input valid days
  //  cy.get('[data-qa="months"]').select(4)                //input valid month
  //  cy.get('[data-qa="years"]').select('1992')             //input valid year
  //  cy.get('[data-qa="first_name"]').type('tunde')       //input valid first name
  //  cy.get('[data-qa="last_name"]').type('lewis')       //input valid last name
  //  cy.get('[data-qa="company"]').type('seju')
 //   cy.get('[data-qa="address"]').type('creekwood cove ln')      //input alphabelts with space
 //   cy.get('[data-qa="country"]').select('United States')       //input valid country
   // cy.get('[data-qa="create-account"]').click()      //click the create account button
   // cy.get('[data-qa="state"]').type('tennessee')      //input valid state
   // cy.get('[data-qa="city"]').type('lenoir city')      //input valid city
  //  cy.get('[data-qa="zipcode"]').type(37772)      //input valid zip code
  //  cy.get('[data-qa="mobile_number"]').type(+13217868906)     //input valid number
  //  cy.get('[data-qa="create-account"]').click()        //click the create account button
   // cy.get('[data-qa="continue-button"]').click()

})

it('Verify the address field accept numbers with alphabelts ', () => {
 //  cy.visit('http://automationexercise.com/login')
  //  cy.get('[data-qa="signup-name"]').type('mayowa')                   //input valid name in the name field 
  //  cy.get('[data-qa="signup-email"]').type('funmiyseuney@gmail.com')           //.Input valid email address
  //  cy.get('[data-qa="signup-button"]').click()
  //  cy.get(':nth-child(3) > .top > [data-qa="title"] > span > [name="title"]').click()                 //input valid title
   // cy.get('[data-qa="password"]').type('Olakunle81@')                         // input valid password 
  //  cy.get('[data-qa="days"]').select(12)                   //input valid day                                   //input valid days
  //  cy.get('[data-qa="months"]').select(4)                //input valid month
  //  cy.get('[data-qa="years"]').select('1992')             //input valid year
   // cy.get('[data-qa="first_name"]').type('tunde')       //input valid first name
  //  cy.get('[data-qa="last_name"]').type('lewis')       //input valid last name
  //  cy.get('[data-qa="company"]').type('seju')
 //   cy.get('[data-qa="address"]').type('245 creekwood cove ln')      //input alphabelts with numbers
  //  cy.get('[data-qa="country"]').select('United States')       //input valid country
  //  cy.get('[data-qa="create-account"]').click()      //click the create account button
  //  cy.get('[data-qa="state"]').type('tennessee')      //input valid state
  //  cy.get('[data-qa="city"]').type('lenoir city')      //input valid city
  //  cy.get('[data-qa="zipcode"]').type(37772)      //input valid zip code
  //  cy.get('[data-qa="mobile_number"]').type(+13217868906)     //input valid number
  //  cy.get('[data-qa="create-account"]').click()        //click the create account button
   // cy.get('[data-qa="continue-button"]').click()

})

it('Verify the address field do not accept only numbers to create account ', () => {
  // cy.visit('http://automationexercise.com/login')
  //  cy.get('[data-qa="signup-name"]').type('mayowa')                   //input valid name in the name field 
  //  cy.get('[data-qa="signup-email"]').type('funmiyseuney@gmail.com')           //.Input valid email address
  //  cy.get('[data-qa="signup-button"]').click()
  //  cy.get(':nth-child(3) > .top > [data-qa="title"] > span > [name="title"]').click()                 //input valid title
  //  cy.get('[data-qa="password"]').type('Olakunle81@')                         // input valid password 
  //  cy.get('[data-qa="days"]').select(12)                   //input valid day                                   //input valid days
  //  cy.get('[data-qa="months"]').select(4)                //input valid month
   // cy.get('[data-qa="years"]').select('1992')             //input valid year
  //  cy.get('[data-qa="first_name"]').type('tunde')       //input valid first name
  //  cy.get('[data-qa="last_name"]').type('lewis')       //input valid last name
  //  cy.get('[data-qa="company"]').type('seju')
 //   cy.get('[data-qa="address"]').type('24576259')      //input numbers only
 //   cy.get('[data-qa="country"]').select('United States')       //input valid country
 //   cy.get('[data-qa="create-account"]').click()      //click the create account button
  //  cy.get('[data-qa="state"]').type('tennessee')      //input valid state
  //  cy.get('[data-qa="city"]').type('lenoir city')      //input valid city
  //  cy.get('[data-qa="zipcode"]').type(37772)      //input valid zip code
  //  cy.get('[data-qa="mobile_number"]').type(+13217868906)     //input valid number
  //  cy.get('[data-qa="create-account"]').click()        //click the create account button
   // cy.get('[data-qa="continue-button"]').click()

})

it('Verify the address field do not accept only special characters to create accout ', () => {
 //  cy.visit('http://automationexercise.com/login')
 //   cy.get('[data-qa="signup-name"]').type('mayowa')                   //input valid name in the name field 
 //   cy.get('[data-qa="signup-email"]').type('funmiyseuney@gmail.com')           //.Input valid email address
 //   cy.get('[data-qa="signup-button"]').click()
 //   cy.get(':nth-child(3) > .top > [data-qa="title"] > span > [name="title"]').click()                 //input valid title
 //   cy.get('[data-qa="password"]').type('Olakunle81@')                         // input valid password 
 //   cy.get('[data-qa="days"]').select(12)                   //input valid day                                   //input valid days
 //   cy.get('[data-qa="months"]').select(4)                //input valid month
 //   cy.get('[data-qa="years"]').select('1992')             //input valid year
 //   cy.get('[data-qa="first_name"]').type('tunde')       //input valid first name
 //   cy.get('[data-qa="last_name"]').type('lewis')       //input valid last name
  //  cy.get('[data-qa="company"]').type('seju')
 //   cy.get('[data-qa="address"]').type('&**(%$@#!@@##_))((*^%$%?+%$^^')      //input special characters
  //  cy.get('[data-qa="country"]').select('United States')       //input valid country
  //  cy.get('[data-qa="create-account"]').click()      //click the create account button
  //  cy.get('[data-qa="state"]').type('tennessee')      //input valid state
  //  cy.get('[data-qa="city"]').type('lenoir city')      //input valid city
  //  cy.get('[data-qa="zipcode"]').type(37772)      //input valid zip code
  //  cy.get('[data-qa="mobile_number"]').type(+13217868906)     //input valid number
  //  cy.get('[data-qa="create-account"]').click()        //click the create account button
   // cy.get('[data-qa="continue-button"]').click()

})

it('Verify the dropdown on country is visible and clickable to reveal the countries ', () => {
  // cy.visit('http://automationexercise.com/login')
  //  cy.get('[data-qa="signup-name"]').type('mayowa')                   //input valid name in the name field 
  //  cy.get('[data-qa="signup-email"]').type('funmiseuney@gmail.com')           //.Input valid email address
  //  cy.get('[data-qa="signup-button"]').click()
  //  cy.get(':nth-child(3) > .top > [data-qa="title"] > span > [name="title"]').click()                 //input valid title
  //  cy.get('[data-qa="password"]').type('Olakunle81@')                         // input valid password 
  //  cy.get('[data-qa="days"]').select(12)                   //input valid day                                   //input valid days
  //  cy.get('[data-qa="months"]').select(4)                //input valid month
  //  cy.get('[data-qa="years"]').select('1992')             //input valid year
  //  cy.get('[data-qa="first_name"]').type('tunde')       //input valid first name
  //  cy.get('[data-qa="last_name"]').type('lewis')       //input valid last name
  //  cy.get('[data-qa="company"]').type('seju')
  // cy.get('[data-qa="address"]').type('245 creekwood cove ln')      //input valid address
  //  cy.get('[data-qa="country"]').select('India')       //input valid country
  //  cy.get('[data-qa="create-account"]').click()      //click the create account button
  //  cy.get('[data-qa="state"]').type('tennessee')      //input valid state
  //  cy.get('[data-qa="city"]').type('lenoir city')      //input valid city
   // cy.get('[data-qa="zipcode"]').type(37772)      //input valid zip code
  //  cy.get('[data-qa="mobile_number"]').type(+13217868906)     //input valid number
   // cy.get('[data-qa="create-account"]').click()        //click the create account button
   // cy.get('[data-qa="continue-button"]').click()

})

it('Verify the dropdown on country is clickable and all the countries shown are clickable ', () => {
  // cy.visit('http://automationexercise.com/login')
  //  cy.get('[data-qa="signup-name"]').type('mayowa')                   //input valid name in the name field 
  //  cy.get('[data-qa="signup-email"]').type('funmiseuney@gmail.com')           //.Input valid email address
  //  cy.get('[data-qa="signup-button"]').click()
  //  cy.get(':nth-child(3) > .top > [data-qa="title"] > span > [name="title"]').click()                 //input valid title
  //  cy.get('[data-qa="password"]').type('Olakunle81@')                         // input valid password 
  //  cy.get('[data-qa="days"]').select(12)                   //input valid day                                   //input valid days
  //  cy.get('[data-qa="months"]').select(4)                //input valid month
  //  cy.get('[data-qa="years"]').select('1992')             //input valid year
  //  cy.get('[data-qa="first_name"]').type('tunde')       //input valid first name
  //  cy.get('[data-qa="last_name"]').type('lewis')       //input valid last name
  //  cy.get('[data-qa="company"]').type('seju')
  // cy.get('[data-qa="address"]').type('245 creekwood cove ln')      //input valid address
    //cy.get('[data-qa="country"]').select('United States')       //input valid country
     //cy.get('[data-qa="country"]').select('Canada')       //input valid country
     // cy.get('[data-qa="country"]').select('Australia')       //input valid country
     //  cy.get('[data-qa="country"]').select('Israel')       //input valid country
     //   cy.get('[data-qa="country"]').select('New Zealand')       //input valid country
     //    cy.get('[data-qa="country"]').select('Singapore')       //input valid country
   // cy.get('[data-qa="create-account"]').click()      //click the create account button
   // cy.get('[data-qa="state"]').type('tennessee')      //input valid state
  //  cy.get('[data-qa="city"]').type('lenoir city')      //input valid city
   // cy.get('[data-qa="zipcode"]').type(37772)      //input valid zip code
  //  cy.get('[data-qa="mobile_number"]').type(+13217868906)     //input valid number
   // cy.get('[data-qa="create-account"]').click()        //click the create account button
   // cy.get('[data-qa="continue-button"]').click()

})

it('Verify the dropdown on country is clickable and all the countries shown are clickable ', () => {
   cy.visit('http://automationexercise.com/login')
  //  cy.get('[data-qa="signup-name"]').type('mayowa')                   //input valid name in the name field 
  //  cy.get('[data-qa="signup-email"]').type('funmiseuney@gmail.com')           //.Input valid email address
  //  cy.get('[data-qa="signup-button"]').click()
  //  cy.get(':nth-child(3) > .top > [data-qa="title"] > span > [name="title"]').click()                 //input valid title
  //  cy.get('[data-qa="password"]').type('Olakunle81@')                         // input valid password 
  //  cy.get('[data-qa="days"]').select(12)                   //input valid day                                   //input valid days
  //  cy.get('[data-qa="months"]').select(4)                //input valid month
  //  cy.get('[data-qa="years"]').select('1992')             //input valid year
  //  cy.get('[data-qa="first_name"]').type('tunde')       //input valid first name
  //  cy.get('[data-qa="last_name"]').type('lewis')       //input valid last name
  //  cy.get('[data-qa="company"]').type('seju')
  // cy.get('[data-qa="address"]').type('245 creekwood cove ln')      //input valid address
    //cy.get('[data-qa="country"]').select('United States')       //input valid country
     //cy.get('[data-qa="country"]').select('Canada')       //input valid country
     // cy.get('[data-qa="country"]').select('Australia')       //input valid country
     //  cy.get('[data-qa="country"]').select('Israel')       //input valid country
     //   cy.get('[data-qa="country"]').select('New Zealand')       //input valid country
     //    cy.get('[data-qa="country"]').select('Singapore')       //input valid country
   // cy.get('[data-qa="create-account"]').click()      //click the create account button
   // cy.get('[data-qa="state"]').type('tennessee')      //input valid state
  //  cy.get('[data-qa="city"]').type('lenoir city')      //input valid city
   // cy.get('[data-qa="zipcode"]').type(37772)      //input valid zip code
  //  cy.get('[data-qa="mobile_number"]').type(+13217868906)     //input valid number
   // cy.get('[data-qa="create-account"]').click()        //click the create account button
   // cy.get('[data-qa="continue-button"]').click()

})

})