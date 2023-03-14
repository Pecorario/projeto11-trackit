import { useState } from 'react';

import axios from 'axios';

import useAuth from '../../../hooks/useAuth';

import Input from '../../../components/Input';
import Button from '../../../components/Button';

import * as S from './style';

const Form = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { setUser } = useAuth();

  const handleSubmit = async e => {
    e.preventDefault();

    try {
      setIsLoading(true);

      const { data } = await axios.post(
        'https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login',
        {
          email,
          password
        }
      );

      setUser(data);
      localStorage.setItem('token', data.token);
    } catch (error) {
      alert(error.response.data.message);
    } finally {
      setIsLoading(false);
      setPassword('');
      setEmail('');
    }
  };

  return (
    <S.Container onSubmit={handleSubmit}>
      <Input
        required
        value={email}
        placeholder="email"
        isLoading={isLoading}
        data-test="email-input"
        onChange={e => setEmail(e.target.value)}
      />
      <Input
        required
        type="password"
        value={password}
        placeholder="senha"
        isLoading={isLoading}
        data-test="password-input"
        onChange={e => setPassword(e.target.value)}
      />

      <Button
        width="100%"
        height="45px"
        fontSize="21px"
        color="primary"
        text="Entrar"
        type="submit"
        data-test="login-btn"
        isLoading={isLoading}
      />
    </S.Container>
  );
};

export default Form;
