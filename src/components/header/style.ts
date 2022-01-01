import styled from 'styled-components'

export const StyledHeader = styled.header`
  width: 100%;

  position: fixed;
  top: 0;
  left: 0;

  background: ${({ theme }) => theme.colors.background};
`

export const Container = styled.div`
  max-width: 104rem;

  box-sizing: border-box;

  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 2.4rem;
  margin: 0 auto;
`

export const Title = styled.h1`
  margin: 0;

  font-size: 2rem;
  font-weight: 900;
  line-height: inherit;
  color: ${({ theme }) => theme.colors.primary};

  cursor: pointer;
`

export const Button = styled.button`
  color: ${({ theme }) => theme.colors.text};
  background: transparent;
  padding: 1rem;
  border: none;
  cursor: pointer;
`
