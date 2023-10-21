import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";

export default function useAuth() {
  const {
    currentUser,
    loading,
    logIn,
    logOut,
    createNewUser,
    logInWithGoogle,
  } = useContext(AuthContext);
  return {
    currentUser,
    loading,
    logIn,
    logOut,
    createNewUser,
    logInWithGoogle,
  };
}
