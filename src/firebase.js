// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API,
  authDomain: "shortly-4354d.firebaseapp.com",
  projectId: "shortly-4354d",
  storageBucket: "shortly-4354d.appspot.com",
  messagingSenderId: "686856588569",
  appId: "1:686856588569:web:7ba1d7a054e2dd75ad4988",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore();
