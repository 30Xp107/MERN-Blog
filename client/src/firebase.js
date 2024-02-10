// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-83bbb.firebaseapp.com",
  projectId: "mern-blog-83bbb",
  storageBucket: "mern-blog-83bbb.appspot.com",
  messagingSenderId: "959841542943",
  appId: "1:959841542943:web:5e164c61527fcce892c62a"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);