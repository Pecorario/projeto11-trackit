import styled from 'styled-components';

export const Container = styled.header`
  width: 100%;
  height: 70px;

  padding: 0 18px;

  background: ${({ theme }) => theme.colors.darkBlue};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);

  position: fixed;
  top: 0;
  left: 0;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Title = styled.h1`
  font-size: 40px;

  color: ${({ theme }) => theme.colors.white};
`;

export const Image = styled.img`
  width: 51px;
  height: 51px;

  border-radius: 50%;

  object-fit: cover;
`;
