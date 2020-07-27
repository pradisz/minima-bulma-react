import React, { useState, useEffect, createContext, useContext } from 'react';

import firebase, { auth } from '../firebase';
import uploadImageAsync from '../utils/uploadImageAsync';

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

  const editProfile = (displayName, imageUri) => {
    const userAuth = firebase.auth().currentUser;
    const usersRef = firebase.firestore().collection('users').doc(currentUser.uid);

    if (imageUri) {
      return uploadImageAsync('users', imageUri, currentUser.uid).then((photoURL) => {
        return userAuth
          .updateProfile({ displayName, photoURL })
          .then(() =>
            usersRef
              .set({ displayName, photoURL }, { merge: true })
              .then(() => 'Profile updated successfully!')
              .catch((error) => {
                console.error(error);
                throw error;
              })
          )
          .catch((error) => {
            console.error(error);
            throw error;
          });
      });
    } else {
      return userAuth
        .updateProfile({ displayName })
        .then(() =>
          usersRef
            .set({ displayName }, { merge: true })
            .then(() => 'Profile updated successfully!')
            .catch((error) => {
              console.error(error);
              throw error;
            })
        )
        .catch((error) => {
          console.error(error);
          throw error;
        });
    }
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
    editProfile,
  };
};
