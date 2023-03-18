import styled, { css } from 'styled-components';

export const ButtonContainer = styled.button`
  width: ${props => props.width};
  height: ${props => props.height};

  font-size: ${props => props.fontSize};

  border-radius: 5px;

  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;

  ${props =>
    props.color === 'primary'
      ? css`
          background: ${props.theme.colors.lightBlue};
          color: ${props.theme.colors.white};

          :not(:disabled):hover {
            filter: brightness(0.8);
          }
        `
      : css`
          background: transparent;
          color: ${props.theme.colors.lightBlue};

          :not(:disabled):hover {
            color: ${props.theme.colors.darkBlue};
          }
        `}

  svg {
    width: 20px;
    height: 20px;
  }

  :disabled {
    cursor: not-allowed;
    opacity: 0.7;
  }
`;
