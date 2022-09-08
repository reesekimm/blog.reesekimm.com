import styled, { css } from 'styled-components'

const selectedStyle = css`
  background-color: rgba(144, 164, 174, 0.5);
  color: ${({ theme }) => theme.colors.white};
`

export const Container = styled.span<{ selected: boolean; disabled: boolean }>`
  cursor: ${({ disabled }) => (disabled ? 'default' : 'pointer')};
  color: ${({ theme }) => theme.colors.gray2};
  background-color: ${({ theme }) => theme.colors.background};
  border: 1px solid ${({ theme }) => theme.colors.gray2};

  padding: 0.15rem 0.8rem;
  border-radius: 10px;
  margin-right: 0.6rem;

  font-size: 1.3rem;
  font-weight: ${({ theme }) => theme.fontWeight.bold};

  ${({ selected }) => selected && selectedStyle}
`
