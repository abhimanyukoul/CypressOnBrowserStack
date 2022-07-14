/// <reference types="cypress" />

describe('sampleTestSuite', function() {

    it('Verify the title of the page - positive', function() {
        cy.visit('https://demo.nopcommerce.com/')
        cy.title().should('eq', 'nopCommerce demo store')
    })
    
    it('Verify the title of the page - negative', function() {
        cy.visit('https://demo.nopcommerce.com/')
        cy.title().should('eq', 'nopCommerce demo store')
    })
})