import { createContext, useContext, useState, useEffect } from 'react';
import {createUserWithEmailAndPassword,
        getAuth,
        signInWithEmailAndPassword,
        signOut,
        onAuthStateChanged} from 'firebase/auth'
import { getDatabase, ref, set,  } from 'firebase/database';



import app from '../Firebase/firebase'

const auth = getAuth(app)

const UserContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState({});

  const createUser = (email, password) => {
   return createUserWithEmailAndPassword(auth, email, password)
  }


  const signIn = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
     .then((userCredential) => {
      const user = userCredential.user
      const email = user.auth.email
      console.log('userrr',user)
      console.log('useremail',email)
      const db = getDatabase()
      set(ref(db, `users/${user.uid}`),
      {
        email: user.email,
        photoStatus: false,
        todos: {}
      })
    })
  }

  const logout = () => {
    return signOut(auth)
  }

  useEffect(()=> {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser)
    })
    return () => {
      unsubscribe()
    }
  },[])

  return (
    <UserContext.Provider value={{ createUser,signIn, user, logout }}>
      {children}
    </UserContext.Provider>
  );
};


export const UserAuth = () => {
  return useContext(UserContext);
};
