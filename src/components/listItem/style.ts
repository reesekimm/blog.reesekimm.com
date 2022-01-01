import styled from 'styled-components'

export const Container = styled.li`
  color: ${({ theme }) => theme.colors.text};
  padding: 2rem 0;
  margin-bottom: 2rem;
`

export const Date = styled.span`
  color: ${({ theme }) => theme.colors.gray3};
  display: block;
  width: 100%;
`

export const Title = styled.h2`
  color: ${({ theme }) => theme.colors.text};
  padding: 0.8rem 0;
  margin: 0;
`

export const Preview = styled.p`
  color: ${({ theme }) => theme.colors.gray3};
`
