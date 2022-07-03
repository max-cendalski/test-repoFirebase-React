import { createContext, useContext, useState, useEffect } from 'react';
import {createUserWithEmailAndPassword,
        signInWithEmailAndPassword,
        signOut,
        onAuthStateChanged} from 'firebase/auth'
import { auth } from './firebase';


const UserContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState({});

  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password)
  }

  const logout = () => {
    return signOut(auth)
  }

  useEffect(()=> {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log('user',currentUser)
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

/* const FirebaseContext = React.createContext(null);

export const withFirebase = Component => props => (
  <FirebaseContext.Consumer>
    {firebase => <Component {...props} firebase={firebase} />}
  </FirebaseContext.Consumer>
)

export default FirebaseContext;
 */
