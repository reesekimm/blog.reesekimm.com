import styled, { css } from 'styled-components'

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

  @media ${({ theme }) => theme.device.desktop} {
    display: block;
  }
`

export const TocHeader = styled.summary<TocHeaderProps>`
  &::marker,
  &::-webkit-details-marker {
    display: none;
  }

  width: fit-content;

  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;

  cursor: pointer;

  color: ${({ theme }) => theme.colors.gray3};
  font-size: ${({ theme }) => theme.fontSize.md};
  font-weight: ${({ theme }) => theme.fontWeight.bold};

  svg {
    transform: ${({ showItems }) => `rotate(${showItems ? '0deg' : '180deg'})`};
    transition: transform 0.2s;
    margin-left: 0.5rem;
  }
`

export const TocItemList = styled.ol`
  list-style: none;
  margin: 0;
  padding: 0;

  li {
    padding: 0 0 0 1.5rem;
    line-height: 1.4;
  }
`

const ActiveItemStyle = css<{ isActive: boolean }>`
  color: ${({ theme, isActive }) =>
    isActive ? theme.colors.primary : theme.colors.gray3};
  font-weight: ${({ theme, isActive }) =>
    isActive ? theme.fontWeight.medium : theme.fontWeight.regular};
`

export const TocItemLink = styled.a`
  ${ActiveItemStyle}

  &:visited {
    ${ActiveItemStyle}
  }

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
    font-weight: ${({ theme }) => theme.fontWeight.medium};
  }
`
