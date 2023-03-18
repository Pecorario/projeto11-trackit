import styled, { css } from 'styled-components';

export const Container = styled.div`
  width: 100%;
  padding: 15px;

  border-radius: 5px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  background: ${({ theme }) => theme.colors.white};
`;

export const TextsContainer = styled.div`
  flex: 1;
  padding-right: 5px;
`;

export const Title = styled.h3`
  font-size: 20px;
  margin-bottom: 7px;

  color: ${({ theme }) => theme.colors.textDark};
`;

export const Text = styled.p`
  font-size: 13px;
  line-height: 16px;

  color: ${({ theme }) => theme.colors.textDark};
`;

export const Span = styled.span`
  font-size: 13px;
  line-height: 16px;

  color: ${({ isGreen, theme }) =>
    isGreen ? theme.colors.green : theme.colors.textDark};
`;

export const Button = styled.button`
  width: 69px;
  height: 69px;

  padding: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 4px;

  ${({ isDone, theme }) =>
    isDone
      ? css`
          background: ${theme.colors.green};
        `
      : css`
          background: #ebebeb;
          border: 1px solid ${theme.colors.lighterGray};
        `};

  img {
    width: 35px;
  }

  :hover {
    opacity: 0.8;
    cursor: pointer;
  }
`;
