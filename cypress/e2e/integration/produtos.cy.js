/// <reference types="cypress"/>

context("Funcionalidade de Pré Cadastro", () => {
    
    beforeEach(() => {
        cy.visit("produtos")
    });

    it("Deve selecionar um produto da lista", () => {
        cy.get('[class="product-block grid"]')
            .contains("Arcadio Gym Short")
            .click()
    })

    it("Deve adicionar um produto ao carrinho", () => {
        var quantidade = 2;
        var produto = "Arcadio Gym Short";

        cy.get('[class="product-block grid"]')
            .contains(produto).click()

        cy.get('.button-variable-item-32').click()
        cy.get('.button-variable-item-Blue').click()
        cy.get('.input-text').clear().type(quantidade)
        cy.get('.single_add_to_cart_button').click()

        cy.get('.dropdown-toggle > .mini-cart-items').should("contain", quantidade)
        cy.get('.woocommerce-message').should("contain", `${quantidade} × “${produto}” foram adicionados no seu carrinho.`)
    });
});