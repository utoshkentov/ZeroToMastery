import firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCK9ow2OKsdSoYzNEPffoN1Y9h6ziT4W4Q",
    authDomain: "crwn-app-3274e.firebaseapp.com",
    databaseURL: "https://crwn-app-3274e.firebaseio.com",
    projectId: "crwn-app-3274e",
    storageBucket: "crwn-app-3274e.appspot.com",
    messagingSenderId: "100679416457",
    appId: "1:100679416457:web:d343ec874e0dc4d0c02458",
    measurementId: "G-F2TQ3H654Q"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;