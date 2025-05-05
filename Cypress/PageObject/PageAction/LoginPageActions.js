 
const loginElementLocators = require('../PageElement/LoginPageElement.json')
export class LoginPageElements{

    
    username(user){
        cy.get(loginElementLocators.LoginPageLocators.username_text).type(user)
        return
       
    }

    password(password){
        cy.get(loginElementLocators.LoginPageLocators.password_text).type(password)
        return
    }

    LoginButton(){
        cy.get(loginElementLocators.LoginPageLocators.loginBtn).click()
        return
    }

    Productpage(){
    cy.get(loginElementLocators.LoginPageLocators.productPage).click()
      return
    }

    BacktoLandingPage(){
        cy.get(loginElementLocators.LoginPageLocators.backtomain).click()
        return
    }

}