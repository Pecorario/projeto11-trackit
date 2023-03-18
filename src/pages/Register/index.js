import Form from './Form';
import LinkButton from '../../components/LinkButton';

import logoImg from '../../assets/logo.svg';

import * as S from './style';

const Register = () => {
  return (
    <S.Container>
      <img src={logoImg} alt="Logo" />
      <Form />
      <LinkButton
        goTo="/"
        text="Já tem uma conta? Faça login!"
        type="register"
      />
    </S.Container>
  );
};

export default Register;
