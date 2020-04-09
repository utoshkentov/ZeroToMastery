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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
      const {displayName, email} = userAuth;
      const createdAt = new Date();

      try {
          await userRef.set({
              displayName,
              email,
              createdAt,
              ...additionalData
          })
      } catch (error) {
          console.log('error creating user', error.message)
      }
  }

  return  userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;