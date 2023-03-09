// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAjgwEy0ayUD3EMIn8u-pLQqFXor8FSWHA",
  authDomain: "bbuy-a1a5c.firebaseapp.com",
  projectId: "bbuy-a1a5c",
  storageBucket: "bbuy-a1a5c.appspot.com",
  messagingSenderId: "61254351674",
  appId: "1:61254351674:web:0eb4e076c7e48ccb4d6e03",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
export const provider = new GoogleAuthProvider();

export default app;
