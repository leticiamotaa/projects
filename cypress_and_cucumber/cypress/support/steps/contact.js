/* global Given, Then, When */

import contactPage from '../pageobjects/contactPage'
const contact = new contactPage

Given("acesso o blog Leticia Mota", () => {
    contact.acessarSite();
})

When("acesso a sessao contate-me", () => {
    contact.acessoSessaoContateme();
})

AND("preencho todos os campos do formulario", () => {
    contact.preencherFormContateme();
})

Then("enviar mensagem com sucesso", () => {
    contact.enviarForm();
})