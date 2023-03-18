import styled, { css } from 'styled-components';

export const Form = styled.form`
  width: 100%;
  padding: 18px;

  border-radius: 5px;

  background: ${({ theme }) => theme.colors.white};
`;

export const ContainerWeekdays = styled.div`
  width: 100%;
  margin-top: 8px;

  display: flex;
  gap: 4px;
`;

export const WeekdayButton = styled.button`
  width: 30px;
  height: 30px;

  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 20px;

  border-radius: 5px;

  cursor: pointer;

  ${({ isSelected, theme }) =>
    isSelected
      ? css`
          background: ${theme.colors.darkGray};
          color: ${theme.colors.white};
        `
      : css`
          background: transparent;
          border: 1px solid ${theme.colors.lightGray};
          color: ${theme.colors.textLighter};
        `}

  :disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }

  :not(:disabled):hover {
    opacity: 0.8;
  }
`;

export const ContainerButtons = styled.div`
  width: 100%;
  margin-top: 30px;

  display: flex;
  justify-content: flex-end;
  gap: 10px;
`;
