import React, {
  createContext,
  useContext,
  useState,
  useMemo,
  useCallback,
} from "react";
import { users } from "../config/users";
const UserContext = createContext();

export const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [failed, setFailed] = useState(0);

  const login = useCallback(({ email, password }) => {
    const usuario = users.find(
      (user) => user.email === email && user.password === password
    );
    if (usuario) {
      setUser(usuario);
      setFailed(0);
    } else setFailed((prev) => prev + 1);
  }, []);

  const logout = useCallback(() => {
    setUser(null);
  }, []);

  const value = useMemo(() => {
    return {
      user,
      failed,
      setUser,
      login,
      logout,
    };
  }, [user, failed, login, logout]);

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export const useUserContext = () => useContext(UserContext);
