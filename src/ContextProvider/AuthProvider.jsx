import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { auth } from '../Firebase/firebase.config';



export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);



  // Register
  const userRegister = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  }

  // Login
  const userLogin = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  }

  // Observer
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setLoading(false);
    });

    return () => {
      unSubscribe();
    }
  }, [])

  // Log out
  const userLogout = () => {
    return signOut(auth);
  }

  // Update user
  const userUpdate = (updatedData) => {
    return updateProfile(auth.currentUser, updatedData);

  }

  // Google login
  const provider = new GoogleAuthProvider();
  const googleLogin = () => {
    setLoading(true);
    return signInWithPopup(auth, provider);
  }

  // Forgot password
  const userForgotPassword = (email) => {
    return sendPasswordResetEmail(auth, email);
  }

  const userData = {
    user,
    setUser,
    userRegister,
    userLogin,
    userLogout,
    loading,
    setLoading,
    userUpdate,
    googleLogin,
    userForgotPassword
  };

  return (
    <AuthContext.Provider value={userData}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
