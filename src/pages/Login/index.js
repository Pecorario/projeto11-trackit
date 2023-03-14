import Form from './Form';
import LinkButton from '../../components/LinkButton';

import logoImg from '../../assets/logo.svg';

import * as S from './style';

const Login = () => {
  return (
    <S.Container>
      <img src={logoImg} alt="Logo" />
      <Form />
      <LinkButton
        goTo="/cadastro"
        text="Não tem uma conta? Cadastre-se"
        type="login"
      />
    </S.Container>
  );
};

export default Login;
