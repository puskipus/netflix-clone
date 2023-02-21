// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAy7x1apPXjCtrLKl5G0uVPAq953RR4Slw",
  authDomain: "netflix-clone-6186a.firebaseapp.com",
  projectId: "netflix-clone-6186a",
  storageBucket: "netflix-clone-6186a.appspot.com",
  messagingSenderId: "70117716528",
  appId: "1:70117716528:web:2e77cc9c58349d0b99b3f5",
  measurementId: "G-5B07K52085",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const auth = getAuth();
// const analytics = getAnalytics(app);

export default app;
export { auth, db };
