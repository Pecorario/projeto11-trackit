import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
`;

export const TitleContainer = styled.div`
  width: 100%;
  padding-bottom: 28px;

  position: sticky;
  top: 0;
  left: 0;

  display: flex;
  flex-direction: column;

  background: ${({ theme }) => theme.colors.background};
`;

export const Text = styled.p`
  font-size: 18px;
  line-height: 22px;

  color: ${({ hasSomeHabitDone, theme }) =>
    hasSomeHabitDone ? theme.colors.green : theme.colors.textLight};
`;

export const TodayHabitsContainer = styled.div`
  width: 100%;
  height: calc(100% - 85px);

  display: flex;
  flex-direction: column;
  gap: 10px;

  overflow-y: auto;
`;
