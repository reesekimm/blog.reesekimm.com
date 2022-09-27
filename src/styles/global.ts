import { createGlobalStyle } from 'styled-components'
import { normalize } from 'styled-normalize'

const GlobalStyle = createGlobalStyle`
  ${normalize}

  html {
    height: 100vh;
    font-size: 10px;
    overscroll-behavior-y: none;
  }

  body {
    font-family: ${({ theme }) => theme.fontFamily.default};
    font-size: ${({ theme }) => theme.fontSize.md};
    font-weight: ${({ theme }) => theme.fontWeight.regular};
    line-height: 3rem;

    color: ${({ theme }) => theme.colors.text};
    background-color: ${({ theme }) => theme.colors.background};

    height: 100%;

    #___gatsby, #gatsby-focus-wrapper {
      max-width: 120rem;
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
    padding-left: 2.4rem;
  }

  ul.contains-task-list {
    list-style: none;
    padding: 0;
    padding-left: 2.4rem;
  }

  li {
    padding: 0.5rem;
  }

  h1, h2, h3, h4, h5 {
    font-weight: ${({ theme }) => theme.fontWeight.bold};
    line-height: 1.2;
    word-break: keep-all;
  }

  h1 {
    font-size: 3.75rem;
    padding: 4rem 0;
  }

  h2 {
    font-size: 3rem;
    padding: 2rem 0;
  }

  h3 {
    font-size: 2.125rem;
    font-weight: ${({ theme }) => theme.fontWeight.medium};
    padding: 1rem 0;
  }

  h4 {
    font-size: 1.8rem;
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
    font-size: ${({ theme }) => theme.fontSize.sm};
    font-weight: ${({ theme }) => theme.fontWeight.medium};
    color: ${({ theme }) => theme.colors.text};
    background-color: rgba(144, 164, 174, 0.3);
    border-radius: 5px;
    padding: 0.1rem 0.4rem;
    margin: 0 0.3rem;
  }

  blockquote {
    margin: 1rem 0 .5rem;
    padding: 1rem 1rem 1rem 2rem;
    color: ${({ theme }) => theme.colors.gray4};
    border-left: 4px solid ${({ theme }) => theme.colors.gray3};
    background-color: rgba(144, 164, 174, .1);
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
    margin: 6rem 0;
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
