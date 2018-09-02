describe('Login example', () => {
  it('should login to my pag', () => {
    cy.visit('/')
    cy.url().should('include', '/login')
  })
})
