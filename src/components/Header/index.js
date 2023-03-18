import useApp from '../../hooks/useApp';

import * as S from './style';

const Header = () => {
  const { user } = useApp();

  return (
    <S.Container data-test="header">
      <S.Title>TrackIt</S.Title>
      <S.Image src={user.image} alt="Foto de perfil" />
    </S.Container>
  );
};

export default Header;
