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
        
        
        
    })
})
