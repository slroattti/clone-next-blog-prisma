// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: "blog-97946.firebaseapp.com",
  projectId: "blog-97946",
  storageBucket: "blog-97946.appspot.com",
  messagingSenderId: "595621042923",
  appId: "1:595621042923:web:13b69dd4ce47f6cc7abcae",
  measurementId: "G-FY4R709ZG4"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);