import { createContext, useEffect, useState } from "react";
import {createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import auth from "../firebase/firebase.config";
import { GoogleAuthProvider } from "firebase/auth";
const googleProvider = new GoogleAuthProvider();
import { GithubAuthProvider } from "firebase/auth";
const githubProvider = new GithubAuthProvider();
export const AuthContext = createContext(null)
const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null)
    const [loading,setLoading] = useState(true)
    const createUser = (email,password) => {
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const singInUser = (email,password) => {
       return signInWithEmailAndPassword(auth,email,password)
    }
    const googleLogIn = () => {
       return signInWithPopup(auth,googleProvider)
    }
    const githubLogIn = () => {
        return signInWithPopup(auth,githubProvider)
    }
    const logOut = () => {
       return signOut(auth)
    }
    const profileUpdate = (name,imageUrl) => {
       return updateProfile(auth.currentUser,{
            displayName:name, photoURL:imageUrl
        })
    }
    useEffect(() => {
       const unSubscribe = onAuthStateChanged(auth,(currentUser) => {
        setUser(currentUser)
        setLoading(false)
       })
       return () => unSubscribe()
    },[])
    const userInfo = {
        user,
        createUser,
        singInUser,
        logOut,
        profileUpdate,
        loading,
        googleLogIn,
        githubLogIn
    }
    return <AuthContext.Provider value={userInfo}>
        {children}
    </AuthContext.Provider>
};

export default AuthProvider;