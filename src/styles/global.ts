import { createGlobalStyle } from 'styled-components'
import { normalize } from 'styled-normalize'

const GlobalStyle = createGlobalStyle`
  ${normalize}

  html {
    height: 100vh;
    font-size: 10px;
  }

  body {
    font-family: ${({ theme }) => theme.fontFamily.default};
    font-size: ${({ theme }) => theme.fontSize.md};
    line-height: 3rem;

    color: ${({ theme }) => theme.colors.text};
    background: ${({ theme }) => theme.colors.background};

    height: 100%;

    #___gatsby, #gatsby-focus-wrapper {
      max-width: 102.4rem;
      height: 100%;
      margin: 0 auto;
    }

    #gatsby-focus-wrapper {
      display: flex;
      flex-direction: column;
    }
  }

  ul, ol {
    margin: 0;
    margin-top: 1rem;
  }

  li {
    padding: 1rem;
  }

  h1, h2, h3, h4, h5 {
    font-weight: ${({ theme }) => theme.fontWeight.bold};
    word-break: keep-all;
  }

  h1 {
    font-size: 6rem;
    padding: 4rem 0;
  }

  h2 {
    font-size: 3.75rem;
    padding: 2rem 0;
  }

  h3 {
    font-size: 3rem;
    font-weight: ${({ theme }) => theme.fontWeight.medium};
    padding: 1rem 0;
  }

  h4 {
    font-size: 2.125rem;
    font-weight: ${({ theme }) => theme.fontWeight.medium};
    padding: 1rem 0;
  }

  p {
    margin: 0;
    line-height: 3rem;
  }

  a, a:visited {
    color: ${({ theme }) => theme.colors.primary};
    text-decoration: none;
  }

  code {
    font-family: ${({ theme }) => theme.fontFamily.monospace};
    font-size: ${({ theme }) => theme.fontSize.md};
    color: ${({ theme }) => theme.colors.white};
    background: ${({ theme }) => theme.colors.primary};
    padding: 0.2rem 0.5rem;
    border-radius: 5px;
    margin: 0 0.3rem;
  }

  blockquote {
    margin-top: 1rem;
    margin-bottom: 0.5rem;
    color: ${({ theme }) => theme.colors.gray3};
  }

  table {
    width: 100%;
    margin: 5rem 0;
    border-collapse: separate;
    border-spacing: 0;
  }

  th {
    border-bottom: 1px solid ${({ theme }) => theme.colors.gray1};
  }

  th, td {
    padding: 1rem;
  }

  hr {
    height: 0.1rem;
    border: none;
    background: ${({ theme }) => theme.colors.gray1};
    margin: 7rem 0;
  }

  img {
    max-width: 100%;
  }

  button {
    background: transparent;
    border: none;
    cursor: pointer;
    padding: 0;
  }
`
export default GlobalStyle
