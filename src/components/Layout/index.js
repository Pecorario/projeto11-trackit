import Footer from '../Footer';
import Header from '../Header';
import * as S from './style';

const Layout = ({ isAuthPages = true, children }) => {
  return (
    <S.Container isAuthPages={isAuthPages}>
      {isAuthPages ? (
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
