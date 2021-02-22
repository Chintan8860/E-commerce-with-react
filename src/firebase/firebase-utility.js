import firebase from 'firebase/app';

import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBR7870ZHEvS4qchpaeseqUEwE6W7tcLV4",
    authDomain: "react-ce9c1.firebaseapp.com",
    projectId: "react-ce9c1",
    storageBucket: "react-ce9c1.appspot.com",
    messagingSenderId: "328530886586",
    appId: "1:328530886586:web:9a405b7b21e6be8a682783",
    measurementId: "G-4FESJK4DDG"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider)
export default firebase;