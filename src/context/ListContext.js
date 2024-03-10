// ListContext.js
import React, { createContext, useState, useContext } from 'react';

const ListContext = createContext();

export const useList = () => {
  return useContext(ListContext);
};

export const ListProvider = ({ children }) => {
  const [list, setList] = useState([]);

  const addToList = (item) => {
    setList([...list, item]);
  };

  return (
    <ListContext.Provider value={{ list, addToList }}>
      {children}
    </ListContext.Provider>
  );
};