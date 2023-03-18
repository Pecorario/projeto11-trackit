import { useContext } from 'react';
import { AppContext } from '../../context/AppContext';

const useApp = () => {
  const context = useContext(AppContext);

  return context;
};

export default useApp;
