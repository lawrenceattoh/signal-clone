import * as firebase from "firebase"
import "firebase/firestore";
import "firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyBKWsepE5edvot8DaUa9g3fukwwkuFmWIc",
    authDomain: "signal-clone-94b35.firebaseapp.com",
    projectId: "signal-clone-94b35",
    storageBucket: "signal-clone-94b35.appspot.com",
    messagingSenderId: "370356588248",
    appId: "1:370356588248:web:c0ca6a19ea661ac0b6d1ad"
};

let app;

if (firebase.apps.length === 0) {
    app = firebase.initializeApp(firebaseConfig)
} else {
    app = firebase.app();
}

const db = app.firestore();
const auth = firebase.auth();

export { db, auth };