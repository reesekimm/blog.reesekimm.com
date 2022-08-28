import styled from 'styled-components'

export const Container = styled.aside`
  width: 30rem;
  height: fit-content;
  position: sticky;
  top: 7rem;
  padding: 1.6rem;
  box-sizing: border-box;
  display: none;

  a,
  a:visited {
    color: ${({ theme }) => theme.colors.gray3};
  }

  ol {
    margin: 0;
  }

  li {
    padding: 0 0 0 1.5rem;
    line-height: 1.4;
  }

  @media ${({ theme }) => theme.device.tablet} {
    display: block;
  }
`
