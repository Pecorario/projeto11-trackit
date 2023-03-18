import { useEffect, useState } from 'react';

import useApp from '../../hooks/useApp';

import Footer from '../Footer';
import Header from '../Header';

import * as S from './style';

const Layout = ({ children }) => {
  const [hasUser, setHasUser] = useState(false);

  const { user } = useApp();

  useEffect(() => {
    if (user) {
      setHasUser(true);
    }
  }, [user]);

  return (
    <S.Container isAuthPages={!hasUser}>
      {!hasUser ? (
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
