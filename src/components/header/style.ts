import styled from 'styled-components'

export const StyledHeader = styled.header<{ showing: boolean }>`
  width: 100%;

  position: fixed;
  top: ${({ showing }) => (showing ? '0' : '-10rem')};
  left: 0;

  transition: top 0.3s;

  background: ${({ theme }) => theme.colors.background};
  box-shadow: 0 4px 9px 0 rgb(0 0 0 / 5%);
  z-index: 10;
`

export const Container = styled.div`
  box-sizing: border-box;

  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 2.4rem;
`

export const Title = styled.h1`
  margin: 0;
  padding: 0;

  font-size: 2rem;
  font-weight: 900;
  line-height: inherit;
  color: ${({ theme }) => theme.colors.primary};

  cursor: pointer;
`

export const Button = styled.button`
  color: ${({ theme }) => theme.colors.text};
  font-size: ${({ theme }) => theme.fontSize.md};
  padding: 1rem;
  padding-right: 0;
`
