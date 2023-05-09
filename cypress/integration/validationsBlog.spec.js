/// <reference types="Cypress" /
import ContactElements from "../support/elements/ContactElements";

const element = new ContactElements();

describe('Blog Leticia Mota', function() {
    // beforeEach antes de cada teste roda a função
    beforeEach(function(){
      cy.visit('https://leticiaamota.wixsite.com/blog')
    })
      it('Verifica o título da aplicação', function() {
        cy.title()
            .should('be.equal','Home | Leticiamota')
      })
      it('entrar em contato', function(){
        const longText = "TESTEEEEEEEEEEEEEEEEE TESTEEEEEEEE TESTEEEEEE TESTEEEEEEE TESTEEEEEEE"

        cy.get(element.nameField)
          .type("Leticia")
        cy.get(element.emailField)
            .type("leticia@qa.com")
        cy.get(element.textField)
            .type(longText, {delay:0})
        cy.get(element.sendButton)
            .click()
        cy.get(element.sucessMessage)
            .and('contain', 'Obrigado por enviar!')          
        
      })       
      
    })