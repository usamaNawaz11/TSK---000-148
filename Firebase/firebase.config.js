// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC31gvlxZwusVdzPGvzMCYWtqZ9ZlF9tcs",
  authDomain: "groceries-ad9fc.firebaseapp.com",
  projectId: "groceries-ad9fc",
  storageBucket: "groceries-ad9fc.appspot.com",
  messagingSenderId: "180149646722",
  appId: "1:180149646722:web:d393bab2fdfb35e4ea8b9b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth(app)
const db=getFirestore(app)
export default db;