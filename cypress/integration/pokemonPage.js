/* eslint-disable no-undef */

describe('Pokemon page', function() {
  it('entering pokemon page', function() {
    cy.visit('http://localhost:5000/pokemon/onix')
    cy.contains('speed')
    cy.contains('weak armor')

  })
})