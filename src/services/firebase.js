// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBRLPIaH1DZnM6xpWEKK1C3WcU_hghdYZo",
  authDomain: "constellationdiary-7df1e.firebaseapp.com",
  projectId: "constellationdiary-7df1e",
  storageBucket: "constellationdiary-7df1e.firebasestorage.app",
  messagingSenderId: "116213462642",
  appId: "1:116213462642:web:eca93f72299ced9b66f4eb",
  measurementId: "G-V79V8JVZVW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);