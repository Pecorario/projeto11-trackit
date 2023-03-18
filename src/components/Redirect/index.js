import { Navigate } from 'react-router-dom';

const Redirect = () => {
  const user = JSON.parse(localStorage.getItem('user'));

  if (user !== null) {
    return <Navigate to="/hoje" />;
  }

  return <Navigate to="/" />;
};

export default Redirect;
