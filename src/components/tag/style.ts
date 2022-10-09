import styled, { css } from 'styled-components'

const selectedStyle = css`
  background-color: rgba(120, 144, 156, 0.7);
  color: ${({ theme }) => theme.colors.white};
`

export const Container = styled.div<{ selected: boolean; disabled: boolean }>`
  cursor: ${({ disabled }) => (disabled ? 'default' : 'pointer')};
  color: ${({ theme }) => theme.colors.gray3};
  background-color: ${({ theme }) => theme.colors.background};
  border: 1px solid ${({ theme }) => theme.colors.gray3};

  padding: 0.15rem 0.8rem;
  border-radius: 10px;
  margin: 0 0.6rem 0.6rem 0;

  font-size: 1.3rem;
  font-weight: ${({ theme }) => theme.fontWeight.bold};

  display: inline-block;
  line-height: 1.5;

  ${({ selected }) => selected && selectedStyle}
`
