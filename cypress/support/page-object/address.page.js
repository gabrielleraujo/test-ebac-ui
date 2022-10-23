class AddressPage {
    editBillingAddress(firstName, lastName, company, country, address, number, city, state, postCode, email, cellphone) {
        cy.get('.woocommerce-MyAccount-navigation-link--edit-address > a').click()
        cy.get(':nth-child(1) > .title > .edit').click()
        cy.get('#billing_first_name').clear().type(firstName)
        cy.get('#billing_last_name').clear().type(lastName)
        cy.get('#billing_company').clear().type(company)
        cy.get('#select2-billing_country-container').click().type(country)
            .get('[aria-readonly="true"]')

        
        cy.get('#billing_address_2').clear().type(number)
        cy.get('#billing_address_1').clear().type(address)
        cy.get('#billing_city').clear().type(city)
        cy.get('#select2-billing_state-container').click().type(state + "{enter}")
        cy.get('#billing_postcode').clear().click().type(postCode)
        cy.get('#billing_phone').clear().click().type(cellphone)
        cy.get('#billing_email').clear().click().type(email)

        cy.get('.button').click()
    }

    editDeliveryAddress(firstName, lastName, company, country, address, number, city, state, postCode) {
        cy.get('.woocommerce-MyAccount-navigation-link--edit-address > a').click()
        cy.get(':nth-child(2) > .title > .edit').click()
        cy.get('#shipping_first_name').clear().type(firstName)
        cy.get('#shipping_last_name').clear().type(lastName)
        cy.get('#shipping_company').clear().type(company)
        cy.get('#select2-shipping_country-container').click().type(country)
            .get('[aria-readonly="true"]')

        cy.get('#shipping_address_2').clear().type(number)
        cy.get('#shipping_address_1').clear().type(address)
        cy.get('#shipping_city').clear().type(city)
        cy.get('#select2-shipping_state-container').click().type(state + "{enter}")
        cy.get('#shipping_postcode').clear().click().type(postCode)

        cy.get('.button').click()
    }
}

export default new AddressPage();