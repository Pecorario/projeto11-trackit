import { useLocation } from 'react-router-dom';

import Footer from '../Footer';
import Header from '../Header';

import * as S from './style';

const Layout = ({ children }) => {
  const location = useLocation();

  const isLoggedOut =
    location.pathname === '/' || location.pathname === '/cadastro';

  return (
    <S.Container isAuthPages={isLoggedOut}>
      {isLoggedOut ? (
        children
      ) : (
        <>
          <Header />
          {children}
          <Footer />
        </>
      )}
    </S.Container>
  );
};

export default Layout;
