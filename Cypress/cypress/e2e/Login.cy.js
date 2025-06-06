import { LoginPageElements } from "../../PageObject/PageAction/LoginPageActions"

const login = new LoginPageElements


describe('Test Login Fuctionality', ()=>{
    it('should open the landing page ', () =>{
        cy.visit('/')
        login.username('standard_user')
        cy.wait(2000)
        login.password('secret_sauce')
        cy.wait(2000)
        login.LoginButton()
        cy.wait(2000)
       cy.url().should('include', 'https://www.saucedemo.com/inventory.html');
       cy.get('.app_logo').should('contain', 'Swag Labs');
    })
})


