import * as S from './style';

const Layout = ({ isAuthPages = true, children }) => {
  return <S.Container isAuthPages={isAuthPages}>{children}</S.Container>;
};
