import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`  
  * {    
    margin: 0;
    padding: 0;
    box-sizing: border-box;    
  }

  body {      
    font-family: 'Open Sans', sans-serif;
    background: #fff;
  }

  button {
    border: none;
    background: none;    
    &:focus{
      outline: none;
    }
  }
`
export default GlobalStyle