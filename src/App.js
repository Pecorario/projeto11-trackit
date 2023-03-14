import { Routes, Route } from 'react-router-dom';

import AuthContext from './context/Auth';

import Login from './pages/Login';
import Register from './pages/Register';

const App = () => {
  return (
    <AuthContext>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/cadastro" element={<Register />} />
      </Routes>
    </AuthContext>
  );
};

export default App;
