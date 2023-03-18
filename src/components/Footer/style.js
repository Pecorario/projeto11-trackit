import styled from 'styled-components';
import { CircularProgressbar } from 'react-circular-progressbar';

export const Container = styled.footer`
  width: 100%;
  height: 70px;

  background: ${({ theme }) => theme.colors.white};

  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 130px;
  align-items: center;

  position: fixed;
  bottom: 0;
  left: 0;
`;

export const CircularBar = styled(CircularProgressbar)`
  width: 91px;
  height: 91px;

  cursor: pointer;

  path {
    stroke-linecap: round;
    transition: stroke-dashoffset 0.5s ease 0s;
  }

  text {
    font-size: 18px;
    dominant-baseline: middle;
    text-anchor: middle;
  }

  .CircularProgressbar-background {
    fill: ${({ theme }) => theme.colors.lightBlue};
  }

  :hover .CircularProgressbar-background {
    fill: ${({ theme }) => theme.colors.darkBlue};
  }
`;

export const BarContainer = styled.button`
  position: absolute;
  bottom: 10px;
  left: calc(50% - 91px / 2);

  background: transparent;

  padding: 0;
`;
