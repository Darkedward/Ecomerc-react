
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import {getStorage} from "firebase/storage";

// Your web app's Firebase configuration
export const firebaseConfig = {
  apiKey: "AIzaSyDxrJEnO0EdJmnwkPPTPidKDjA1ZNMgVrM",
  authDomain: "eshop-aa857.firebaseapp.com",
  projectId: "eshop-aa857",
  storageBucket: "eshop-aa857.appspot.com",
  messagingSenderId: "918873594693",
  appId: "1:918873594693:web:71577ee458878aeb98fc2c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app;