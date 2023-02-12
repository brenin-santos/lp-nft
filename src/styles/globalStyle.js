import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

  :root{
    --background: #4299E1;
    --background-light: #9BCFE4;
    --text-configuration:'Fredoka One', cursive;
    --background-middle: #2B6CB0;
 
  }
 
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html{
    @media (max-width: 1080px){
      font-size: 93.5%;
    }
    @media (max-width: 720px) {
      font-size: 87.5%;
    }
  }

  button{
    cursor: pointer;
  }
  
  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }
 `;
