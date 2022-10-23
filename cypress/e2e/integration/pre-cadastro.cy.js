/// <reference types="cypress"/>
const { faker } = require('@faker-js/faker');

context("Funcionalidade de Pré Cadastro", () => {
    
    beforeEach(() => {
        cy.visit("minha-conta")
    });    

    it("Deve completar o pré cadastro com sucesso - Usando comando customizado", () => {
        cy.preRegistration(faker.internet.email(), "!teste@teste$", faker.name.firstName(), faker.name.lastName())
        cy.get('.woocommerce-message').should("contain", "Detalhes da conta modificados com sucesso.")
    });
});