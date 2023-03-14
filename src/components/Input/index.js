import * as S from './style';

const Input = ({ isLoading, ...props }) => {
  return <S.InputContainer disabled={isLoading} {...props} />;
};

export default Input;
