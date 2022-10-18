/// <reference types="cypress"/>

context("Funcionalidade Login", () => {

    it("Deve fazer login com sucesso", () => {
        cy.visit("http://lojaebac.ebaconline.art.br/minha-conta/")
        cy.get('#username').type("aluno_ebac@teste.com")
        cy.get('#password').type("teste@teste.com")
        cy.get('.woocommerce-form > .button').click()
        
        cy.get('.page-title').should("contain", "Minha conta")
        cy.get('.topbar-inner > :nth-child(1) > .list-inline > :nth-child(2) > a').should("contain", "Logout")
    })

    it("Deve exibir uma mensagem de erro ao inserir usuário inválido", () => {
        cy.visit("http://lojaebac.ebaconline.art.br/minha-conta/")
        cy.get('#username').type("erro@teste.com")
        cy.get('#password').type("erro@teste")
        cy.get('.woocommerce-form > .button').click()

        cy.get('.woocommerce-error > li').should("contain", "Endereço de e-mail desconhecido.")
    })

    it("Deve exibir uma mensagem de erro a inserir senha inválida", () => {
        cy.visit("http://lojaebac.ebaconline.art.br/minha-conta/")
        cy.get('#username').type("aluno_ebac@teste.com")
        cy.get('#password').type("erro@teste")
        cy.get('.woocommerce-form > .button').click()

        cy.get('.woocommerce-error > li').should("contain", "Erro: A senha fornecida para o e-mail")
    })

})