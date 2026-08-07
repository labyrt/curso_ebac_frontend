import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  :root {
    --cor-principal: #e66767;
    --cor-secundaria: #ffebd9;
    --cor-fundo: #fff8f2;
    --cor-clara: #fff;
    --cor-texto: #e66767;
    --largura-container: 1024px;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    background: var(--cor-fundo);
    color: var(--cor-texto);
    font-family: Roboto, Arial, Helvetica, sans-serif;
    -webkit-font-smoothing: antialiased;
  }

  img {
    display: block;
    max-width: 100%;
  }

  button,
  input,
  textarea {
    font: inherit;
  }

  button,
  a {
    -webkit-tap-highlight-color: transparent;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  ul {
    list-style: none;
  }
`

export default GlobalStyle
