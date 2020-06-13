import React, { useState, useEffect, createContext, useContext } from 'react';

import { auth, logout } from '../firebase';

const authContext = createContext();

export const AuthProvider = ({ children }) => {
  const auth = useProvideAuth();

  return <authContext.Provider value={auth}>{children}</authContext.Provider>;
};

export const useAuth = () => {
  return useContext(authContext);
};

const useProvideAuth = () => {
  const [currentUser, setUser] = useState(null);
  const [isLoading, setLoading] = useState(!auth.currentUser);

  const signOut = () => logout();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  return {
    currentUser,
    isLoading,
    signOut,
  };
};
