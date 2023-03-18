import { useEffect } from 'react';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';

import useApp from './hooks/useApp';

import Layout from './components/Layout';
import Loading from './components/Loading';

import Login from './pages/Login';
import Register from './pages/Register';
import Today from './pages/Today';
import Habits from './pages/Habits';

const App = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const { setUser, isLoading } = useApp();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));

    if (user) {
      setUser(user);

      if (location.pathname === '/' || location.pathname === '/register') {
        navigate('/hoje');
      }
    }
  }, []);

  return (
    <>
      {isLoading && <Loading />}
      <Layout>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/cadastro" element={<Register />} />
          <Route path="/hoje" element={<Today />} />
          <Route path="/habitos" element={<Habits />} />
        </Routes>
      </Layout>
    </>
  );
};

export default App;
