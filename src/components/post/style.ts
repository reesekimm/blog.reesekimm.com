import styled from 'styled-components'

export const PageHeader = styled.div`
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 4rem;
  text-align: center;
`

export const Date = styled.time`
  font-weight: ${({ theme }) => theme.fontWeight.medium};
  color: ${({ theme }) => theme.colors.gray3};
  display: block;
  width: 100%;
`

export const Title = styled.h1`
  color: ${({ theme }) => theme.colors.text};
  margin: 0;
  margin-top: 1rem;
  padding: 0.8rem 0;
`

export const Subtitle = styled.h2`
  font-size: ${({ theme }) => theme.fontSize.md};
  color: ${({ theme }) => theme.colors.gray3};
  font-weight: ${({ theme }) => theme.fontWeight.regular};
  padding: 0;
  margin: 0;
`

export const PageBody = styled.div`
  display: flex;
  flex-direction: column;

  @media ${({ theme }) => theme.device.tablet} {
    flex-direction: row;
  }
`

export const MarkdownWrapper = styled.article`
  flex: 1;
`
