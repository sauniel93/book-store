import React, { createContext, useContext, useState, useMemo } from "react";

const BookContext = createContext();

export const BookContextProvider = ({ children }) => {
    const [books, setBooks] = useState([]);
    const [state, setState] = useState("Add");
    const [id, setId] = useState(0);
  
    const value = useMemo(() => {
      return {
        books,
        state,
        id,
        setBooks,
        setState,
        setId
      };
    }, [books, state, id]);
  
    return (
      <BookContext.Provider value={value}>{children}</BookContext.Provider>
    );
  };
  
  export const useBookContext = () => useContext(BookContext);