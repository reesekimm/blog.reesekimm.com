describe('Home page', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('should navigate to post page when clicking list item title', () => {
    cy.findByRole('link', { name: '실용주의 프로그래머 18' }).click()
    cy.location('pathname', { timeout: 5000 }).should(
      'include',
      '/posts/pragmatic-programmer-18'
    )
    cy.findByRole('heading', { name: '📖 읽은 범위' }).should('exist')
  })

  it('should navigate to selected page when clicking page button', () => {
    cy.findByRole('link', { name: '3' }).click()
    cy.location('pathname', { timeout: 5000 }).should('include', '/3')
    cy.findByRole('heading', { name: '실용주의 프로그래머 08' }).should('exist')
  })

  it('should navigate to back and forth when clicking prev/next button', () => {
    cy.findByRole('link', { name: '2' }).click()

    cy.findByRole('link', { name: 'go to previous page' }).click()
    cy.location('pathname', { timeout: 5000 }).should('include', '/')
    cy.findByRole('heading', { name: '실용주의 프로그래머 18' }).should('exist')

    cy.findByRole('link', { name: 'go to next page' }).click()
    cy.location('pathname', { timeout: 5000 }).should('include', '/2')
    cy.findByRole('heading', { name: '실용주의 프로그래머 13' }).should('exist')
  })
})
