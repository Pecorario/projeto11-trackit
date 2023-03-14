import styled, { css } from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  ${props =>
    props.isAuthPages
      ? css`
          background: ${props.theme.colors.white};
        `
      : css`
          padding: 100px 18px;
          overflow-y: auto;
          background: ${props.theme.colors.background};
        `};
`;
