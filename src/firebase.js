// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDKpjsXCIfWwfpySMX8Hhbm3BGN9ml3Ka0",
  authDomain: "social-media-project-arvind.firebaseapp.com",
  projectId: "social-media-project-arvind",
  storageBucket: "social-media-project-arvind.firebasestorage.app",
  messagingSenderId: "66719751672",
  appId: "1:66719751672:web:a1a20e48f6c99c761aca0d",
  measurementId: "G-0EYMV9ESVF"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { auth, db, storage };
