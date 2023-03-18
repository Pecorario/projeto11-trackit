import styled from 'styled-components';

export const Container = styled.div`
  height: calc(100vh - 200px);
  overflow: hidden;
`;

export const TitleContainer = styled.div`
  width: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;

  background: ${({ theme }) => theme.colors.background};

  position: sticky;
  top: 0;
`;

export const Text = styled.p`
  font-size: 18px;
  line-height: 22px;
  margin-top: 8px;

  color: ${({ theme }) => theme.colors.textDark};
`;

export const ContainerHabits = styled.div`
  height: calc(100% - 65px);
  margin-top: 20px;

  display: flex;
  flex-direction: column;
  gap: 10px;

  overflow: auto;
`;
