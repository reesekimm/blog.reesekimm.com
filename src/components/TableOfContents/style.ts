import styled from 'styled-components'

interface TocHeaderProps {
  showItems: boolean
}

export const Container = styled.aside`
  width: 30rem;
  height: fit-content;
  position: sticky;
  top: 7rem;
  padding: 1.6rem;
  box-sizing: border-box;
  font-size: 1.4rem;
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

export const TocHeader = styled.summary<TocHeaderProps>`
  &::marker,
  &::-webkit-details-marker {
    display: none;
  }

  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.5rem;

  color: ${({ theme }) => theme.colors.gray3};
  font-size: ${({ theme }) => theme.fontSize.md};
  font-weight: ${({ theme }) => theme.fontWeight.bold};

  svg {
    cursor: pointer;
    transform: ${({ showItems }) => `rotate(${showItems ? '0deg' : '180deg'})`};
    transition: 0.2s;
  }
`
