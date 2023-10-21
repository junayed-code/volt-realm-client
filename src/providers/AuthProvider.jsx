import React, { useState, useEffect } from "react";
import { firebaseAuth as Auth } from "../services/firebase";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";

// Create a google auth provider instance
const googleProvider = new GoogleAuthProvider();

// Create and export the Auth Context
export const AuthContext = React.createContext(null);

// Create the Auth Provider component function
export default function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Provider auth values object
  const _auth = { currentUser, loading };

  useEffect(() => {
    // Setup the observer of the auth-state-changed.
    const unSubscribe = onAuthStateChanged(Auth, user => {
      setCurrentUser(user);
      setLoading(false);
      // console.log("The current user is changed.", user);
    });

    return unSubscribe;
  }, []);

  // Define the create-new-user function
  _auth.createNewUser = async (uname, email, password) => {
    try {
      // Update the loading state
      setLoading(true);

      // Create a new user using firebase SDK
      const { user } = await createUserWithEmailAndPassword(
        Auth,
        email,
        password
      );
      // Update the user name
      await updateProfile(user, { displayName: uname });
      return user;
    } catch (err) {
      setLoading(false);
      throw err;
    }
  };

  // Define the user log-in function
  _auth.logIn = async (email, password) => {
    try {
      // Update the loading state
      setLoading(true);
      // Sign in the user using the firebase SDK
      const { user } = await signInWithEmailAndPassword(Auth, email, password);
      return user;
    } catch (err) {
      setLoading(false);
      throw err;
    }
  };

  // Define the use log-out function
  _auth.logOut = async () => {
    try {
      setLoading(true);
      await signOut(Auth);
    } catch (err) {
      setLoading(false);
    }
  };

  // Login the user using google provider
  _auth.logInWithGoogle = async () => {
    try {
      setLoading(true);
      const { user } = await signInWithPopup(Auth, googleProvider);
      return user;
    } catch {
      setLoading(false);
    }
  };

  return <AuthContext.Provider value={_auth}>{children}</AuthContext.Provider>;
}
