import React, { createContext, useEffect, useState } from 'react';

import api from '../../services/api';

export const AppContext = createContext();

const AppContextProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [percentage, setPercentage] = useState(0);
  const [doneHabits, setDoneHabits] = useState(0);
  const [totalHabits, setTotalHabits] = useState(0);

  const getPercentage = async () => {
    const { data } = await api.get('/trackit/habits/today');

    const filteredData = data.filter(item => item.done === true);

    setTotalHabits(data.length);
    setDoneHabits(filteredData.length);
  };

  useEffect(() => {
    const percentageNumber = Math.round((doneHabits / totalHabits) * 100);

    setPercentage(percentageNumber);
  }, [doneHabits, totalHabits]);

  return (
    <AppContext.Provider
      value={{
        user,
        setUser,
        isLoading,
        setIsLoading,
        percentage,
        setDoneHabits,
        setTotalHabits,
        getPercentage
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
