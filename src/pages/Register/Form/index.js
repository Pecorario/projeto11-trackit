import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import api from '../../../services/api';

import Input from '../../../components/Input';
import Button from '../../../components/Button';

import * as S from './style';

const Form = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [profilePicture, setProfilePicture] = useState('');

  const navigate = useNavigate();

  const handleSubmit = async e => {
    e.preventDefault();

    try {
      setIsLoading(true);

      await api.post('/trackit/auth/sign-up', {
        email,
        password,
        name,
        image: profilePicture
      });

      navigate('/');
    } catch (error) {
      alert(error.response.data.message);
    } finally {
      setIsLoading(false);
      setPassword('');
      setEmail('');
      setName('');
      setProfilePicture('');
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
      <Input
        required
        value={name}
        placeholder="nome"
        isLoading={isLoading}
        data-test="user-name-input"
        onChange={e => setName(e.target.value)}
      />
      <Input
        required
        type="url"
        placeholder="foto"
        isLoading={isLoading}
        value={profilePicture}
        data-test="user-image-input"
        onChange={e => setProfilePicture(e.target.value)}
      />

      <Button
        width="100%"
        height="45px"
        fontSize="21px"
        color="primary"
        text="Cadastrar"
        type="submit"
        data-test="signup-btn"
        isLoading={isLoading}
      />
    </S.Container>
  );
};

export default Form;
