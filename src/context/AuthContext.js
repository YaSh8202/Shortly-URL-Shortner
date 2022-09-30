import { useContext, createContext, useEffect, useState } from "react";
import {
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { auth, db } from "../firebase";
import { doc, setDoc } from "firebase/firestore";

const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(true);
  console.log(user);
  useEffect(() => {
    setLoading(true);
    const unsub = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        console.log(user);
      } else {
        console.log("no user");
      }
      setLoading(false);
    });
    return () => {
      unsub();
    };
  }, []);

  const googleSignIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider).then(async (result) => {
      const user = result.user;
      setUser(user);
      const signedInForFirstTime =
        user.metadata.creationTime === user.metadata.lastSignInTime;
      console.log("first time", user.metadata.creationTime);
      if (signedInForFirstTime) {
        await setDoc(doc(db, "shortedUrls", user.uid), {
          urls: [],
        });
      }
    });
    // signInWithRedirect(auth, provider);
  };

  const logOut = () => {
    signOut(auth);
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ googleSignIn, logOut, user, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const UserAuth = () => {
  return useContext(AuthContext);
};

export default AuthContext;
