import React, {useState, useEffect, useContext, createContext,} from 'react'

import firebase from 'firebase'

import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/storage'

var firebaseConfig = {
    apiKey: "AIzaSyCobKGRG7Xo0k21dMadiwNW-i30Q5IhfJQ",
    authDomain: "archivos-d2100.firebaseapp.com",
    projectId: "archivos-d2100",
    storageBucket: "archivos-d2100.appspot.com",
    messagingSenderId: "660563209292",
    appId: "1:660563209292:web:deed4ba2802bf9220118e9"
  };

  firebase.initializeApp(firebaseConfig);
  const db = firebase.firestore();
  const auth = firebase.auth();
  const storage = firebase.storage();

  const authContext = createContext();

  export function ProvideAuth({ children }) {
  const auth = useProvideAuth();
  return <authContext.Provider value={auth}>{children}</authContext.Provider>;
}

export const useAuth = () => {
  return useContext(authContext);
};

function useProvideAuth() {
  const [user, setUser] = useState(null);

  const signin = (email, password) => {
    return firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((response) => {
        setUser(response.user);
        return response.user;
      });
  };
  const signup = (email, password) => {
    return firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((response) => {
        setUser(response.user);
        return response.user;
      });
  };
  const signout = () => {
    return firebase
      .auth()
      .signOut()
      .then(() => {
        setUser(false);
      });
  };
  const sendPasswordResetEmail = (email) => {
    return firebase
      .auth()
      .sendPasswordResetEmail(email)
      .then(() => {
        return true;
      });
  };
  const confirmPasswordReset = (code, password) => {
    return firebase
      .auth()
      .confirmPasswordReset(code, password)
      .then(() => {
        return true;
      });
  };

  const addAnimeToList = async (anime, foto, user) => {
    try{
      await firebase
      .firestore()
      .collection('MiLista')
      .add({
        Anime: anime,
        Foto: foto,
        User: user
      })
    }catch(e){
      return e;
    }
  };
 const addComentToAnime = async(anime,user,cometario) =>{
    try{
      await firebase
      .firestore()
      .collection('Comentarios')
      .add({
        Anime: anime,
        Comment: cometario,
        User: user
      })
    }catch(e){
      return e;
    }
 };
  const myAnimeList = async () =>{
    try{
    const datos = [];
      const firedb = await firebase.firestore().collection('MiLista')
        firedb.onSnapshot(queryShapshot => {
          queryShapshot.docs.forEach(doc => {
              const {Anime,Foto,User} = doc.data()
              datos.push({
                Anime,
                Foto,
                User,
              })
          });
        });
        return datos;
    }catch (e){
      return e;
    }
  }
  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(false);
      }
    });

    return () => unsubscribe();
  }, []);

  return {
    db,
    user,
    signin,
    signup,
    signout,
    sendPasswordResetEmail,
    confirmPasswordReset,
    addAnimeToList,
    myAnimeList,
    addComentToAnime,
  };
}