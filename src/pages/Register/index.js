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
        text="Não tem uma conta? Cadastre-se"
        type="register"
      />
    </S.Container>
  );
};

export default Register;
