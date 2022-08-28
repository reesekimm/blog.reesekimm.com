import styled from 'styled-components'

export const Container = styled.div`
  a,
  a:visited {
    color: ${({ theme }) => theme.colors.text};

    svg {
      color: ${({ theme }) => theme.colors.gray3};
      margin-left: 0.3rem;
      visibility: hidden;
    }

    &:hover {
      svg {
        visibility: visible;
      }
    }
  }
`
