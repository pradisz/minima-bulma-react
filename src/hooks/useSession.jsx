import React, { createContext, useContext } from 'react';

import useAuth from './useAuth';

export const UserContext = createContext({
  currentUser: null,
});

export const UserProvider = ({ children }) => {
  const { currentUser } = useAuth();

  return <UserContext.Provider value={{ currentUser }}>{children}</UserContext.Provider>;
};

const useSession = () => {
  const { currentUser } = useContext(UserContext);

  return { currentUser };
};

export default useSession;
