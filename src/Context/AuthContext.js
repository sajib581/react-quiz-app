import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from 'firebase/auth';
import React, { createContext, useContext, useEffect, useState } from 'react';
import '../firebase';

const AuthContext = createContext();

export function useAuth(){
    return useContext(AuthContext)
}

export const AuthProvider = ({children}) => {
    const [loading, setLoading] = useState(true);
    const [currentUser, setCurrentUser] = useState({})

    useEffect(()=>{
        const auth = getAuth();
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setCurrentUser(user);
            setLoading(false);
        })
        return unsubscribe;
    }, []);

    //signup function 
    async function signup(email, password, username ){ 
        const auth = getAuth(); 
        await createUserWithEmailAndPassword(auth, email, password)

        //updateProfile
        await updateProfile(auth.currentUser, {
            displayName : username
        })

        const user = auth.currentUser ;
        setCurrentUser({
            ...user
        })
    }

    //Login function
    async function login(email, password) {
        const auth = getAuth();
         await signInWithEmailAndPassword(auth, email, password)
    }

    //Logout function
    function logout() {
        const auth = getAuth();
        return signOut(auth);        
    }

    const value = {
        currentUser,
        signup,
        login,
        logout
    };
    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    );
};

