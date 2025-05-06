import { LoginPageElements } from "../../PageObject/PageAction/LoginPageActions"
const login = new LoginPageElements


describe('Test Invalid Login Fuctionality', ()=>{
    it('should not open landing page ', () =>{
        cy.visit('/')
        login.username('user')
        cy.wait(2000)
        login.password('sauce')
        cy.wait(2000)
        login.LoginButton()
        cy.wait(2000) 
        cy.get('.error-message-container').should('be.visible').and('contain' , 'Epic sadface: Username and password do not match any user in this service')
    })
})
