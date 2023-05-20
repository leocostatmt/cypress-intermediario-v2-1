
//utilizando comando personalizado de logout
//localizado na pasta GUI_commands.js

describe('Logout', () => {
    //pré condição: deve estar logado, e estar na page Home
    
    beforeEach(() => {
      cy.login()
      cy.visit('/')
    })

    //verificação:deve estar deslogado e na pagina base do projeto
    //pagina de login(sign_in)
  
    it('successfully', () => {
      cy.logout()
  
      cy.url().should('be.equal', `${Cypress.config('baseUrl')}/users/sign_in`)
    })
  })
  