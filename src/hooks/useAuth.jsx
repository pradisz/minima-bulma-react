import React, { useState, useEffect, createContext, useContext } from 'react';

import firebase, { auth } from '../firebase';

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

  const googleProvider = new firebase.auth.GoogleAuthProvider();
  googleProvider.setCustomParameters({ prompt: 'select_account' });

  const signOut = () => auth.signOut();

  const signInWithCredentials = (email, password) => auth.signInWithEmailAndPassword(email, password);

  const signInWithGoogle = () => auth.signInWithPopup(googleProvider);

  const createUserWithCredentials = async (email, password, displayName) => {
    const result = await auth.createUserWithEmailAndPassword(email, password).catch((error) => {
      throw error;
    });

    setLoading(true);
    result.user
      .updateProfile({
        displayName,
      })
      .then(
        () => {
          setLoading(false);
        },
        (error) => {
          setLoading(false);
          throw error;
        }
      );
  };

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
    signInWithCredentials,
    signInWithGoogle,
    createUserWithCredentials,
  };
};
