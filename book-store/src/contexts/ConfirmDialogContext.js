import React, { createContext, useContext, useState, useMemo } from "react";

const ConfirmDialogContext = createContext();

export const ConfirmDialogContextProvider = ({ children }) => {
  const [accept, setAccept] = useState(false);
  const [open, setOpen] = useState(false);

  const value = useMemo(() => {
    return {
      accept,
      setAccept,
      open,
      setOpen,
    };
  }, [accept, open]);

  return (
    <ConfirmDialogContext.Provider value={value}>
      {children}
    </ConfirmDialogContext.Provider>
  );
};

export const useConfirmDialogContext = () => useContext(ConfirmDialogContext);
