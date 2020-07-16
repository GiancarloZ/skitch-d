import styled, { keyframes, css } from "styled-components";

const flashAnimation = keyframes`
  from {
    opacity: 0.75;
  }

  to {
    opacity: 0;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  width: 100%;
  height: 100%;
`;

export const Container = styled.div`
  position: relative;
  width: 100%;
  min-width: ${({ maxWidth }) => maxWidth && `${maxWidth}px`};
  min-height: ${({ maxHeight }) => maxHeight && `${maxHeight}px`};

`;

export const Canvas = styled.canvas`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  min-width: ${({ maxWidth }) => maxWidth && `${maxWidth}px`};
  min-height: ${({ maxHeight }) => maxHeight && `${maxHeight}px`};
`;

export const Video = styled.video`

  &::-webkit-media-controls-play-button {
    display: none !important;
    -webkit-appearance: none;
  }
`;

export const Overlay = styled.div`
  top: 2px;
  right: 2px;
  bottom: 2px;
  left: 2px;
  box-shadow: 0px 0px 20px 56px rgba(0, 0, 0, 0.6);
  border: 1px solid #ffffff;
  border-radius: 10px;
`;

export const Flash = styled.div`
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: #ffffff;
  opacity: 0;

  ${({ flash }) => {
    if (flash) {
      return css`
        animation: ${flashAnimation} 750ms ease-out;
      `;
    }
  }}
`;

export const Button = styled.button`
  width: 100%;
  min-width: 100px;
  margin-top: 80px;
  padding: 12px 24px;
  background: silver;
`;
