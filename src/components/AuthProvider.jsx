import React, {useState, createContext} from 'react'
import firebase from '../database/firebase';

export const AuthContext = createContext();

export const AuthProvider= ({children}) => {
    const userInfo = {
        entrar: async(email,password) => {
            try {
                await firebase.auth.signInWithEmailAndPassword(email,password);
            } catch (e) {
                console.log(e)
            }
        },
        logout: async() =>{
            try {
                await firebase.auth.signOut();
            } catch (error) {
                console.log(error);
            }
        },
      };
    const [user,setUser] = useState(null);
    return (
        <AuthContext.Provider value={{user,setUser,userInfo}}>
            {children}
        </AuthContext.Provider>
    )
}
export default AuthProvider
