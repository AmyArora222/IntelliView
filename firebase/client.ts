// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBoAlICBgaEOhdZrfgtDxalqxL9iYH5YMg",
  authDomain: "intelliview-937bf.firebaseapp.com",
  projectId: "intelliview-937bf",
  storageBucket: "intelliview-937bf.firebasestorage.app",
  messagingSenderId: "819700512471",
  appId: "1:819700512471:web:be443a1d8c9824e20a6292",
  measurementId: "G-MJ45CMRFHZ"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
// const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const db = getFirestore(app);