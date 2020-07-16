import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  
  html {
    height: 100%;
  }

  body {
    overflow-x: hidden;
    overflow-y: auto;
    height: 100%;
    padding: 32px;
    margin: 0;
    padding: 0;
  }

  div#root {
    height: 100%;
  }

`;

export const Root = styled.main`

  .react-html5-camera-photo-fullscreen > video, .react-html5-camera-photo-fullscreen > img {
    width: 100vw;
    height: 90vh;
  }
  .react-html5-camera-photo-fullscreen > video {
    object-fit: fill;
  }
  .react-html5-camera-photo-fullscreen > .display-error {
    width: 100vw;
    height: 90vh;
  }
`;

export const Preview = styled.img`
  width: 100%;
  height: auto;
`;

export const Footer = styled.footer`
  position: sticky;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  background: silver;
  
  button {
    margin: 0 10px;
  }
`;