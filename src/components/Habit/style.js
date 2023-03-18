import styled, { css } from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 91px;

  padding: 15px;

  border-radius: 5px;

  position: relative;

  background: ${({ theme }) => theme.colors.white};
`;

export const Title = styled.h3`
  font-size: 20px;
  line-height: 25px;

  color: ${({ theme }) => theme.colors.textDark};
`;

export const Weekday = styled.div`
  width: 30px;
  height: 30px;

  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 20px;

  border-radius: 5px;

  ${({ isSelected, theme }) =>
    isSelected
      ? css`
          background: ${theme.colors.darkGray};
          color: ${theme.colors.white};
        `
      : css`
          background: transparent;
          border: 1px solid ${theme.colors.lightGray};
          color: ${theme.colors.textLight};
        `}
`;

export const ContainerWeekdays = styled.div`
  width: 100%;
  margin-top: 8px;

  display: flex;
  gap: 4px;
`;

export const TrashIcon = styled.img`
  position: absolute;
  top: 10px;
  right: 10px;

  width: 15px;
  height: 15px;

  :hover {
    cursor: pointer;
    filter: brightness(0.6);
  }
`;
