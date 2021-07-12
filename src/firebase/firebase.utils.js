import firebase from 'firebase/app';
import 'firebase/firestore'; //เลือก import แค่ที่ใช้
import 'firebase/auth'; //เลือก import แค่ที่ใช้

const config = {
    apiKey: "AIzaSyDt3IVpPj3_RdvCQAmdNqhmcXMVC4tQ-Ws",
    authDomain: "crwn-db-81976.firebaseapp.com",
    projectId: "crwn-db-81976",
    storageBucket: "crwn-db-81976.appspot.com",
    messagingSenderId: "564365182032",
    appId: "1:564365182032:web:8e790d3bf6dcebf1adbd55",
    measurementId: "G-LDYRS1EEQY"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompts: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
