import React, { createContext, useContext, useState, useMemo } from "react";

const MenuContext = createContext();

export const ContextProvider = ({ children }) => {
  const [activeMenu, setActiveMenu] = useState(true);
  const [screenWidth, setScreenWidth] = useState(undefined);

  const value = useMemo(() => {
    return {
      activeMenu,
      screenWidth,
      setActiveMenu,
      setScreenWidth,
    };
  }, [activeMenu, screenWidth]);

  return <MenuContext.Provider value={value}>{children}</MenuContext.Provider>;
};

export const useMenuContext = () => useContext(MenuContext);
