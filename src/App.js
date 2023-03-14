import { useState, useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';

import AuthContext from './context/Auth';

import Layout from './components/Layout';

import Login from './pages/Login';
import Register from './pages/Register';

const App = () => {
  const [hasUser, setHasUser] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const user = localStorage.getItem('user');

    if (user) {
      setHasUser(true);
    }
  }, [navigate]);

  useEffect(() => {
    const user = localStorage.getItem('user');

    if (user) {
      setHasUser(true);
      navigate('/hoje');
    }
  }, []);

  return (
    <AuthContext>
      <Layout isAuthPages={!hasUser}>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/cadastro" element={<Register />} />
        </Routes>
      </Layout>
    </AuthContext>
  );
};

export default App;
