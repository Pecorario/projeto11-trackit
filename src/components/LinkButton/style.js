import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const LinkContainer = styled(Link)`
  font-size: 14px;
  margin-top: 25px;

  color: ${({ theme }) => theme.colors.lightBlue};
`;
