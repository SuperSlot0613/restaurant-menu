// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";


const firebaseConfig = {
  apiKey: "AIzaSyDAIjaGQiCc3paIqSVHeOThbTMW9b0CrT0",
  authDomain: "amezon-clone-ecaf6.firebaseapp.com",
  projectId: "amezon-clone-ecaf6",
  storageBucket: "amezon-clone-ecaf6.appspot.com",
  messagingSenderId: "656715161163",
  appId: "1:656715161163:web:bcc443bf804f1408bf77ce",
  measurementId: "G-J8WLPYQF10",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
