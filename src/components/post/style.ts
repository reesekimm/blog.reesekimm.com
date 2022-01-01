import styled from 'styled-components'

export const Container = styled.div`
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 2.4rem;
`

export const Date = styled.span`
  color: ${({ theme }) => theme.colors.gray3};
  display: block;
  width: 100%;
`

export const Title = styled.h2`
  color: ${({ theme }) => theme.colors.text};
  margin: 0;
`
