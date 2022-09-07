import styled from 'styled-components'

export const StyledBody = styled.main`
  width: 100%;
  flex: 1;

  box-sizing: border-box;
  margin: 0 auto;
  padding: 12rem 2.4rem 4rem;

  @media ${({ theme }) => theme.device.mobile} {
    padding: ;
  }
`
export const PageTitle = styled.h2`
  font-size: 4rem;
  margin: 0;

  @media ${({ theme }) => theme.device.mobile} {
    font-size: 2.8rem;
    padding: 0;
    margin: 0;
  }
`
