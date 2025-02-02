// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
require('dotenv').config();

// import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: "lifetime-cs.firebaseapp.com",
  projectId: "lifetime-cs",
  storageBucket: "lifetime-cs.firebasestorage.app",
  messagingSenderId: "82604241848",
  appId: "1:82604241848:web:9a31d6d798eff9ab9b554d",
  measurementId: "G-GJXR3CG14P"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// const analytics = getAnalytics(app);