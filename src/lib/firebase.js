// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth"
import {getFirestore} from "firebase/firestore"
import {getStorage} from "firebase/storage"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY_FIREBASE ,
  authDomain: "chatapp-c7b86.firebaseapp.com",
  projectId: "chatapp-c7b86",
  storageBucket: "chatapp-c7b86.appspot.com",
  messagingSenderId: "874445358833",
  appId: "1:874445358833:web:9585d78d208785c4a90b50",
  measurementId: "G-B8W0PTH7LS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth()
export const db  = getFirestore()
export const storage  = getStorage()