import styled from 'styled-components';

export const Container = styled.div``;

export const Text = styled.p`
  font-size: 18px;
  line-height: 22px;
  margin-top: 17px;

  color: ${({ theme }) => theme.colors.textDark};
`;
