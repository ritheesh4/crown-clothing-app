import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDUmkdQhnu7HPVP2rklKqK9WeP-9kKl7t0",
    authDomain: "crown-db-75276.firebaseapp.com",
    databaseURL: "https://crown-db-75276.firebaseio.com",
    projectId: "crown-db-75276",
    storageBucket: "crown-db-75276.appspot.com",
    messagingSenderId: "536751546755",
    appId: "1:536751546755:web:739eaf5511fd124b7ad6b6"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt:'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;