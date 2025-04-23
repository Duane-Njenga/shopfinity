// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDyES1nZne7BztLLnJiYJ9QNgrJwX73zig",
  authDomain: "shopfinity-cfcb6.firebaseapp.com",
  projectId: "shopfinity-cfcb6",
  storageBucket: "shopfinity-cfcb6.firebasestorage.app",
  messagingSenderId: "476620375800",
  appId: "1:476620375800:web:d692dec402de4e9b571d0d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const db = getFirestore(app);
export default app;