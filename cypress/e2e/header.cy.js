describe('Header', () => {
  it('네비게이션 메뉴를 클릭하면 해당 화면으로 이동한다', () => {
    cy.visit('/')

    cy.findByRole('link', { name: 'TIL' }).click()
    cy.location('pathname', { timeout: 5000 }).should('include', '/til')
    cy.findByRole('heading', { name: 'Today I Learned' }).should('exist')

    cy.findByRole('link', { name: '개발' }).click()
    cy.location('pathname', { timeout: 5000 }).should('include', '/dev')
    cy.findByRole('heading', { name: '개발과 기술에 대해 기록합니다' }).should(
      'exist'
    )

    cy.findByRole('link', { name: '독서' }).click()
    cy.location('pathname', { timeout: 5000 }).should('include', '/reading')
    cy.findByRole('heading', {
      name: '책을 읽고 드는 생각을 기록합니다',
    }).should('exist')

    cy.findByRole('link', { name: '기록' }).click()
    cy.location('pathname', { timeout: 5000 }).should('include', '/essay')
    cy.findByRole('heading', { name: '경험과 생각을 기록합니다' }).should(
      'exist'
    )

    cy.findByRole('link', { name: '홈' }).click()
    cy.location('pathname', { timeout: 5000 }).should('include', '/')
    cy.findByRole('banner').should('exist')
  })

  it('다크모드 아이콘을 클릭하면 다크모드로 변경된다', () => {
    cy.visit('/')
    cy.get('body').should('have.css', 'background-color', 'rgb(255, 255, 255)')
    cy.findByRole('button', { name: 'dark-mode' }).click()
    cy.get('body').should('have.css', 'background-color', 'rgb(26, 32, 44)')
  })
})
