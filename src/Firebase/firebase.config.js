// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDAl8To1dWnwT2WVZwNiP59QE4xKEwoOrE",
  authDomain: "subscription-box-freshikart.firebaseapp.com",
  projectId: "subscription-box-freshikart",
  storageBucket: "subscription-box-freshikart.firebasestorage.app",
  messagingSenderId: "692495396737",
  appId: "1:692495396737:web:3a241aff959ae905ec8280",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
