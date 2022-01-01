import { createGlobalStyle } from 'styled-components'
import { normalize } from 'styled-normalize'

const GlobalStyle = createGlobalStyle`
  ${normalize}

  html {
    height: 100vh;
    font-size: 10px;
  }
  
  body {
    font-size: 1.6rem;
    line-height: 2.2rem;
    color: ${({ theme }) => theme.colors.text};
    background: ${({ theme }) => theme.colors.background};

    height: 100%;

    #___gatsby, #gatsby-focus-wrapper {
      height: 100%
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
    padding: 0.5rem;
  }

  h1, h2, h3, h4, h5 {
    font-weight: ${({ theme }) => theme.fontWeight.bold};
    word-break: keep-all;
  }

  h1{
    font-size: ${({ theme }) => theme.fontSize.xl};
    padding: 2rem 0;
    line-height: 5.2rem;
  }

  h2{
    font-size: ${({ theme }) => theme.fontSize.lg};
    padding: 1.6rem 0;
    line-height: 4rem;
  }

  h3 {
    font-size: ${({ theme }) => theme.fontSize.md};
    padding: 1.2rem 0;
    line-height: 3rem;
  }

  h4 {
    padding: 1.2rem 0;
    line-height: 2rem;
  }
  
  p {
    font-size: ${({ theme }) => theme.fontSize.sm};
    margin: 0;
    line-height: 2.8rem;
  }

  a {
    color: ${({ theme }) => theme.colors.primary};
    text-decoration: none;
  }

  code {
    color: ${({ theme }) => theme.colors.white};
    background: ${({ theme }) => theme.colors.primary};
    padding: 0.3rem 0.5rem;
    border-radius: 5px;
  }

  blockquote {
    margin-top: 1rem;
    margin-bottom: 0.5rem;
    color: ${({ theme }) => theme.colors.gray3};
  }

  table {
    width: 100%;
    margin: 2rem 0;
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
  }

  img {
    max-width: 100%;
  }
`
export default GlobalStyle
