

//utilizando comando personalizado de login
//localizado na pasta GUI_commands.js

describe('Login', () => {

  //Verificação:
  //realizar login com sucesso
  //conter logo com avatar no canto superior direito

  it('successfully', () => {
    cy.login()

    cy.get('.qa-user-avatar').should('be.visible')
  })
})
