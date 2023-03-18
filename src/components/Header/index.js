import useApp from '../../hooks/useApp';

import * as S from './style';

const Header = () => {
  const { user, setUser } = useApp();

  const handleLogout = () => {
    const response = window.confirm('Deseja fazer logout?');

    if (response) {
      localStorage.removeItem('user');
      setUser({});
    }
  };

  return (
    <S.Container data-test="header">
      <S.Title>TrackIt</S.Title>
      <S.Image src={user.image} alt="Foto de perfil" onClick={handleLogout} />
    </S.Container>
  );
};

export default Header;
