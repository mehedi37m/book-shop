import React, { Children, createContext, useEffect, useState } from 'react'
import app from '../firebase/firebase.config';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged } from "firebase/auth";

export const AuthContext = createContext();

const auth = getAuth(app)

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading , setLoading] = useState(true);

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }

    useEffect(() =>{
        const unSubscribe = onAuthStateChanged(auth,currentUser => {
            // console.log(currentUser);
            setUser(currentUser);
            setLoading(false);
        });
        return () => {
            return unSubscribe();
        }
    },[])

    const authInfo = {
        user,
        setUser, 
        loading,
        setLoading,
        createUser,
    }
  return (
   <AuthContext.Provider value={authInfo}>
    {children}
   </AuthContext.Provider>
  )
}

export default AuthProvider