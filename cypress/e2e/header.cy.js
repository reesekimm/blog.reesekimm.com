describe('Header', () => {
  it('should navigate to home page when clicking logo', () => {
    cy.visit('/posts/pragmatic-programmer-18')
    cy.findByRole('link', { name: '<DevReese />' }).click()
    cy.location('pathname', { timeout: 5000 }).should('include', '/')
    cy.findByRole('heading', { name: '실용주의 프로그래머 18' }).should('exist')
  })

  it('should toggle theme when clicking theme button', () => {
    cy.get('body').should('have.css', 'background-color', 'rgb(255, 255, 255)')
    cy.findByRole('button', { name: 'theme' }).click()
    cy.get('body').should('have.css', 'background-color', 'rgb(33, 33, 33)')
  })
})