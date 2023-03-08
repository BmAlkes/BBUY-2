// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCRmEvB4Wox7x7WdhCBAnyXEFphHM9CjG4",
  authDomain: "bbuy-5abec.firebaseapp.com",
  projectId: "bbuy-5abec",
  storageBucket: "bbuy-5abec.appspot.com",
  messagingSenderId: "112981491110",
  appId: "1:112981491110:web:00a116ce30d7142ffea367",
  measurementId: "G-0TN6PMT8Y9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
export const provider = new GoogleAuthProvider();

export default app;
