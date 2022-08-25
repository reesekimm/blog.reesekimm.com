import styled from 'styled-components'

export const Container = styled.li`
  color: ${({ theme }) => theme.colors.text};
  padding: 4.8rem 0;
  border-top: 1px solid ${({ theme }) => theme.colors.gray1};
  display: grid;
  grid-template-columns: 1fr 3fr;
  @media ${({ theme }) => theme.device.mobile} {
    display: flex;
    flex-direction: column;
  }
`

export const Date = styled.time`
  font-size: 1.6rem;
  color: ${({ theme }) => theme.colors.gray4};
  display: block;
  @media ${({ theme }) => theme.device.mobile} {
    margin-bottom: 1rem;
  }
`

export const Title = styled.h2`
  font-size: ${({ theme }) => theme.fontSize.xl};
  padding: 0;
  margin: 0;

  a {
    color: ${({ theme }) => theme.colors.text} !important;
  }
`

export const Subtitle = styled.h3`
  font-size: ${({ theme }) => theme.fontSize.md};
  color: ${({ theme }) => theme.colors.gray3};
  font-weight: ${({ theme }) => theme.fontWeight.regular};
  padding: 0;
  margin: 2.4rem 0 2rem;
`

export const ReadMore = styled.button`
  font-size: ${({ theme }) => theme.fontSize.md};
  color: ${({ theme }) => theme.colors.primary};
`
