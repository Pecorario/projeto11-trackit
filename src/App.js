import { useEffect } from 'react';
import {
  Routes,
  Route,
  useNavigate,
  useLocation,
  Navigate
} from 'react-router-dom';

import useApp from './hooks/useApp';

import Layout from './components/Layout';
import Loading from './components/Loading';
import Redirect from './components/Redirect';

import Login from './pages/Login';
import Register from './pages/Register';
import Today from './pages/Today';
import Habits from './pages/Habits';

const App = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const user = JSON.parse(localStorage.getItem('user'));

  const { setUser, isLoading } = useApp();

  useEffect(() => {
    if (user) {
      setUser(user);

      if (location.pathname === '/' || location.pathname === '/register') {
        navigate('/hoje');
      }
    }
  }, []);

  if (!user && location.pathname !== '/' && location.pathname !== '/cadastro') {
    return <Navigate to="/" />;
  }

  return (
    <>
      {isLoading && <Loading />}
      <Layout>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/cadastro" element={<Register />} />
          <Route path="/hoje" element={<Today />} />
          <Route path="/habitos" element={<Habits />} />

          <Route path="*" element={<Redirect />} />
        </Routes>
      </Layout>
    </>
  );
};

export default App;
