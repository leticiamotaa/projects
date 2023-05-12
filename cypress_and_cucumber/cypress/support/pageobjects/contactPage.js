/// <reference types="Cypress" />

import contactElements from '../elements/contactElements'
const contactElements = new contactElements

class contactPage {
    // Acessa o site que será testado
    acessarSite() {
        cy.visit("https://leticiaamota.wixsite.com/blog")
    }

    // Clica no botão para acessar a sessao contate-me
    acessoSessaoContateme() {
        cy.get(contactElements.contactMenuButton()).click()
    }
  
    // Preenchendo os campos do formulario
    preencherFormContateme() {
        cy.get(element.nameField)
          .type("Leticia")
        cy.get(element.emailField)
            .type("leticia@qa.com")
        cy.get(element.textField)
            .type(longText, {delay:0})
    }

    // Enviar formulario com sucesso
    enviarForm() {
        cy.get(contactElements.sendButton()).click()
        cy.get(element.sucessMessage)
            .and('contain', 'Obrigado por enviar!')   
    }
    
}

export default contactPage;