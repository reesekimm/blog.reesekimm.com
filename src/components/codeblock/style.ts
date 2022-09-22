import styled from 'styled-components'

export const Pre = styled.pre`
  font-family: ${({ theme }) => theme.fontFamily.monospace};
  text-align: left;
  font-size: 1.4rem;
  line-height: 2rem;

  margin: 3rem 0;
  padding: 1em;
  border-radius: 10px;

  white-space: pre-wrap;
`

export const Line = styled.div`
  display: table-row;
`

export const LineNo = styled.span`
  display: table-cell;
  text-align: right;
  padding-right: 1em;
  user-select: none;
  opacity: 0.5;
`

export const LineContent = styled.span`
  display: table-cell;
  word-break: break-all;
`
