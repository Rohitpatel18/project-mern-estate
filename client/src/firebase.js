// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-e996a.firebaseapp.com",
  projectId: "mern-estate-e996a",
  storageBucket: "mern-estate-e996a.appspot.com",
  messagingSenderId: "285473285354",
  appId: "1:285473285354:web:95dcbbc3d1d7a589396393"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);