import * as S from './style';

const LinkButton = ({ text, type, goTo }) => {
  return (
    <S.LinkContainer
      to={goTo}
      data-test={type === 'login' ? 'signup-link' : 'login-link'}
    >
      {text}
    </S.LinkContainer>
  );
};

export default LinkButton;
