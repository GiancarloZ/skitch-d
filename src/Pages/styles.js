import styled, { createGlobalStyle, css } from "styled-components";

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
  position: sticky;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  background: silver;

  Button {
    background-color: #4CAF50;
    border: none;
    color: white;
    padding: 16px 32px;
    text-decoration: none;
    margin: 0px;
    cursor: pointer;
    height: 100%;
    width: 100%;
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

export const FormStyle = styled.form`
  height: 100%;
  padding-bottom: 36px;
`;

export const Video = styled.video`

  width: 100%;
  height: 100%;
  ${props =>
    props.isFlipped &&
    css`
      transform: translate(-50%, -50%) scaleX(-1);
    `};
  ${props =>
    props.onClick &&
    css`
      cursor: pointer;
    `};
`