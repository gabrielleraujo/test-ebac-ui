/// <reference types="cypress"/>
var perfil = require("../../fixtures/perfil.json");

context("Funcionalidade Login", () => {

    beforeEach(() => {
        cy.visit("minha-conta")
    });
    
    afterEach(() => {
        //cy.screenshot()
    });

    it("Deve fazer login com sucesso - Usando arquivo de dados - Usando comando customizado", () => {
        cy.login(perfil.username, perfil.password)
        cy.get('.page-title').should("contain", "Minha conta")
        cy.get('.topbar-inner > :nth-child(1) > .list-inline > :nth-child(2) > a').should("contain", "Logout")
    })
    
    it("Deve fazer login com sucesso - Usando fixture", () => {
        cy.fixture("perfil").then(data => 
            {
                cy.get('#username').type(data.username)
                cy.get('#password').type(data.password, {log: false})
                cy.get('.woocommerce-form > .button').click()
                
                cy.get('.page-title').should("contain", "Minha conta")
                cy.get('.topbar-inner > :nth-child(1) > .list-inline > :nth-child(2) > a').should("contain", "Logout")
            })
    })

    it("Deve exibir uma mensagem de erro ao inserir usuário inválido", () => {
        cy.get('#username').type("erro@teste.com")
        cy.get('#password').type("erro@teste")
        cy.get('.woocommerce-form > .button').click()

        cy.get('.woocommerce-error > li').should("contain", "Endereço de e-mail desconhecido.")
    })

    it("Deve exibir uma mensagem de erro ao inserir senha inválida", () => {
        cy.get('#username').type("aluno_ebac@teste.com")
        cy.get('#password').type("erro@teste")
        cy.get('.woocommerce-form > .button').click()

        cy.get('.woocommerce-error > li').should("contain", "Erro: A senha fornecida para o e-mail")
    })
})