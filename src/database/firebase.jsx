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

  export default {
      firebase,
      db,
      auth,
      storage,
  }