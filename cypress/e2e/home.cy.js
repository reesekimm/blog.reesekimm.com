describe('HOME', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('navigates to post page when clicking list item title', () => {
    cy.findByRole('link', { name: '실용주의 프로그래머 08' }).click()
    cy.location('pathname', { timeout: 5000 }).should(
      'include',
      '/posts/pragmatic-programmer-08'
    )
    cy.findByRole('heading', { name: '📖 읽은 범위' }).should('exist')
  })
})
