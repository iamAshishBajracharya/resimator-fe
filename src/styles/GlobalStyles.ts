import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  /* Reset some basic elements */
  body, html, #root {
    // font-family: 'IBM Plex Sans', sans-serif; /* Use your preferred font */
    color: #272C36;
    font-size: 16px;
    font-weight: 400;
    height: 100vh;
    }
 *, *::before, *::after {
    box-sizing: border-box;  
    margin: 0;
    padding: 0;     
 
  }
 img{
    width: 100%;
    height: auto;
 }
  h1{
  font-size: 46px;
  line-height: 54px;
  }
  h2{
  font-size:24px;
  line-height: 36px;
  }
  .link-text-small{
    font-size: 14px;
    font-weight: 21px;
  }
  .w-100{
  width: 100%
  }
`

export default GlobalStyle