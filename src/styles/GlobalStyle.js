import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
   * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;

    font-family: Verdana, Geneva, Tahoma, sans-serif;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  button{
    cursor: pointer;
  }
`