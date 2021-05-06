import firebase from "firebase";


  var firebaseConfig = {
    apiKey: "AIzaSyBCeeR7O6jUefYIBCJruqxpNIBY_1g_8Mk",
    authDomain: "messangeclone.firebaseapp.com",
    projectId: "messangeclone",
    storageBucket: "messangeclone.appspot.com",
    messagingSenderId: "1086103326220",
    appId: "1:1086103326220:web:e15b0aa47a48737dcb2829",
    measurementId: "G-9V6CJQZ6C8"
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();
export { auth, db };
