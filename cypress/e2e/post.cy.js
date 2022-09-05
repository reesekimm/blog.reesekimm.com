describe('Post page', () => {
  beforeEach(() => {
    cy.visit('/posts/pragmatic-programmer-08')
  })

  it('should display toc only on desktop view', () => {
    // mobile
    cy.viewport(320, 480)

    cy.findByRole('complementary').should('not.exist')

    // tablet
    cy.viewport(768, 1024)

    cy.findByRole('complementary').should('not.exist')

    // desktop
    cy.viewport(1200, 900)

    cy.findByRole('complementary').should('exist')
  })

  it('should scroll to targeted heading when clicking toc', () => {
    cy.findByRole('link', { name: '✏️ 기억하고 싶은 내용' }).click()
    cy.findByRole('heading', { name: '✏️ 기억하고 싶은 내용' }).should(
      'be.visible'
    )
  })
})
