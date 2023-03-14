import { Routes, Route } from 'react-router-dom';

import AuthContext from './context/Auth';

import Login from './pages/Login';

const App = () => {
  return (
    <AuthContext>
      <Routes>
        <Route path="/" element={<Login />} />
      </Routes>
    </AuthContext>
  );
};

export default App;
