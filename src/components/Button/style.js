import styled, { css } from 'styled-components';

export const ButtonContainer = styled.button`
  width: ${props => props.width};
  height: ${props => props.height};

  font-size: ${props => props.fontSize};

  border-radius: 5px;

  display: flex;
  justify-content: center;
  align-items: center;

  ${props =>
    props.color === 'primary'
      ? css`
          background: ${props.theme.colors.lightBlue};
          color: ${props.theme.colors.white};
        `
      : css`
          background: ${props.theme.colors.white};
          color: ${props.theme.colors.lightBlue};
        `}

  :disabled {
    opacity: 0.7;
  }
`;
