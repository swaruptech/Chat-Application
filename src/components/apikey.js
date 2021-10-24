import firebase from "firebase";


const firebaseConfig = {
  apiKey: "AIzaSyA-Tiv9cFjBxnAAjhxwaNMcxSFy5Rw9K4A",
  authDomain: "messengercloneeee.firebaseapp.com",
  projectId: "messengercloneeee",
  storageBucket: "messengercloneeee.appspot.com",
  messagingSenderId: "347920317602",
  appId: "1:347920317602:web:ff1fbd660e1cd7fd6aebfb",
  measurementId: "G-JW9YHKNHBS"
};


  
firebase.initializeApp(firebaseConfig);



const auth = firebase.auth();
const db = firebase.firestore();
export { auth, db };
