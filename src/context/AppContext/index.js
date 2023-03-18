import React, { createContext, useState } from 'react';

export const AppContext = createContext();

const AppContextProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  return (
    <AppContext.Provider value={{ user, setUser, isLoading, setIsLoading }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;