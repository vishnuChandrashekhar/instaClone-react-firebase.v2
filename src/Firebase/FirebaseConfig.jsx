import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'


const firebaseConfig = {
  apiKey: "AIzaSyA4_OiDB6B83JB4XpK3CAaZ9O6V3quS9eM",
  authDomain: "instagram-clone-v2-8684d.firebaseapp.com",
  projectId: "instagram-clone-v2-8684d",
  storageBucket: "instagram-clone-v2-8684d.appspot.com",
  messagingSenderId: "455874588516",
  appId: "1:455874588516:web:869506dedb4c80c30c9471"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const firestore = getFirestore(app)
const storage = getStorage(app)

export { app, auth, firestore, storage }