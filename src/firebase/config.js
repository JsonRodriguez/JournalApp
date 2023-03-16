// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCpDknCPQ3SFk_65hLOvEJyPSnx_dEiPTE",
  authDomain: "react-cursos-79e65.firebaseapp.com",
  projectId: "react-cursos-79e65",
  storageBucket: "react-cursos-79e65.appspot.com",
  messagingSenderId: "957639744749",
  appId: "1:957639744749:web:b1356cce83c9a5916740e4"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth( FirebaseApp );
export const FirebaseDB = getFirestore( FirebaseApp );