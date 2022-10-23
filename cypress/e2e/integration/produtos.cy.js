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

    it("Deve adicionar um produto ao carrinho - Usando comando customizado", () => {
        var quantity = 2;
        var product = "Arcadio Gym Short";
        cy.addProduct(product, "34", "Blue", quantity);
        cy.get('.dropdown-toggle > .mini-cart-items').should("contain", quantity)
        cy.get('.woocommerce-message').should("contain", `${quantity} × “${product}” foram adicionados no seu carrinho.`)
    });
});