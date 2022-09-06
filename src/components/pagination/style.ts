import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  margin-top: 7rem;

  display: flex;
  justify-content: center;
  align-items: center;

  ol {
    padding: 0;
    margin: 0 1rem;

    list-style: none;

    display: flex;
  }

  a,
  a:visited {
    color: ${({ theme }) => theme.colors.gray1};
  }
`

export const StyledPage = styled.li`
  padding: 0.5rem 0.5rem 0;

  a,
  span {
    font-size: ${({ theme }) => theme.fontSize.xl};
  }

  a,
  a:visited {
    color: ${({ theme }) => theme.colors.gray1};
  }

  span {
    color: ${({ theme }) => theme.colors.primary};
    /* font-weight: ${({ theme }) => theme.fontWeight.bold}; */
  }
`
