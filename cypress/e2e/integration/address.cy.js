/// <reference types="cypress"/>
import { faker } from "@faker-js/faker";
import AddressPage from "../../support/page-object/address.page"

context("Funcionalidade Endereços - Faturamento e Entrega", () => {

    beforeEach(() => {
        cy.visit("minha-conta")
        cy.fixture("perfil").then(data => 
            cy.login(data.username, data.password)
        )
    });

    it.only("Deve fazer cadastro de faturamento com sucesso", () => {
        AddressPage.editBillingAddress(
            faker.name.firstName(), 
            faker.name.lastName(), 
            faker.company.name(), 
            "Brasil", 
            faker.address.street(),
            faker.address.buildingNumber(), 
            "Nova Iguaçu", 
            "Rio de Janeiro", 
            "22333444",
            faker.internet.email(),
            faker.phone.number("## #### ####"));

            cy.get('.woocommerce-message').should("contain", "Endereço alterado com sucesso.");
    })

    it.only("Deve fazer cadastro de entrega com sucesso", () => {
        AddressPage.editDeliveryAddress(
            faker.name.firstName(), 
            faker.name.lastName(), 
            faker.company.name(), 
            "Brasil", 
            faker.address.street(),
            faker.address.buildingNumber(), 
            "Nova Iguaçu", 
            "Rio de Janeiro", 
            "22333444");

            cy.get('.woocommerce-message').should("contain", "Endereço alterado com sucesso.");
    })
})