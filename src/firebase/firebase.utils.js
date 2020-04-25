import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyBqi_QiDpztG6zigstMtcyog2aVxLMajrs",
  authDomain: "crown-db-12bef.firebaseapp.com",
  databaseURL: "https://crown-db-12bef.firebaseio.com",
  projectId: "crown-db-12bef",
  storageBucket: "crown-db-12bef.appspot.com",
  messagingSenderId: "960262102871",
  appId: "1:960262102871:web:73543310191c5079cca812",
  measurementId: "G-TTN4THCTWZ"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;