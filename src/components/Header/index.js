import * as S from './style';

const Header = () => {
  const user = JSON.parse(localStorage.getItem('user'));
  return (
    <S.Container data-test="header">
      <S.Title>TrackIt</S.Title>
      <S.Image src={user.image} alt="Foto de perfil" />
    </S.Container>
  );
};

export default Header;
