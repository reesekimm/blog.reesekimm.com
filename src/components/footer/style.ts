import styled from 'styled-components'

export const StyledFooter = styled.footer`
  width: 100%;
`

export const Container = styled.div`
  max-width: 104rem;

  padding: 10rem;
  margin: 0 auto;

  text-align: center;
  color: ${({ theme }) => theme.colors.primary};
`
