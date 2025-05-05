import { LoginPageElements } from "../../PageObject/PageAction/LoginPageActions"

const login = new LoginPageElements

describe('Test Product Page Fuctionality', ()=>{
    it('should open the landing page ', () =>{
        cy.visit('/')
        login.username('standard_user')
        cy.wait(3000)
        login.password('secret_sauce')
        cy.wait(3000)
        login.LoginButton()
        cy.wait(3000)
        login.Productpage()//open the item that has been clicked
        cy.wait(3000)
        login.BacktoLandingPage()
     
        
    })
})



