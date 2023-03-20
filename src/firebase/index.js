 // Import the functions you need from the SDKs you need
 

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

//Firestore
import { getFirestore } from 'firebase/firestore'






const firebaseConfig = {
  apiKey: "AIzaSyBbLNB2-S7tOa0d0334es7PiIm5dvOCgh0",
  authDomain: "signin-signup-40af8.firebaseapp.com",
  projectId: "signin-signup-40af8",
  storageBucket: "signin-signup-40af8.appspot.com",
  messagingSenderId: "604247080339",
  appId: "1:604247080339:web:bc44fba0f1d69f02d03c66",
  measurementId: "G-0B73GEJ548"
};

//Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app); 

//firestore
const db = getFirestore(app)


export {auth}
export default db