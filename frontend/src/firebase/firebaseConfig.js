// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBoZqLJAfIKJfBTfdBndiS6iZa9JjiLtOI",
  authDomain: "interactivedashboard-16465.firebaseapp.com",
  projectId: "interactivedashboard-16465",
  storageBucket: "interactivedashboard-16465.firebasestorage.app",
  messagingSenderId: "357987953934",
  appId: "1:357987953934:web:65d6ba84d84b1fed2bbb5f",
  measurementId: "G-M81DXGLL1B"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
