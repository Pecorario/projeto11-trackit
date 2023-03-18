import styled from 'styled-components';

export const InputContainer = styled.input`
  width: 100%;
  height: 45px;
  padding-left: 11px;

  font-size: 20px;

  border-radius: 5px;
  border: 1px solid ${({ theme }) => theme.colors.lightGray};

  color: ${({ theme }) => theme.colors.textDark};

  :disabled {
    background: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.textDisabled};
  }

  ::placeholder {
    color: ${({ theme }) => theme.colors.textLighter};
  }
`;
