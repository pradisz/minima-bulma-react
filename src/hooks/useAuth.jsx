import { useState, useEffect } from 'react';

import { auth } from '../firebase';

const useAuth = () => {
  const [state, setState] = useState(() => {
    const currentUser = auth.currentUser;

    return { currentUser, loading: !currentUser };
  });

  const onChange = (currentUser) => setState({ currentUser, loading: false });

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(onChange);

    return () => unsubscribe;
  }, []);

  return state;
};

export default useAuth;
