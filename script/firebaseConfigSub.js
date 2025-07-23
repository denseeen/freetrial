// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfigSub = {
  apiKey: "AIzaSyBpistqkn02kHLsCl9zW_i-yrIAOm3RJuQ",
  authDomain: "neo-mail.firebaseapp.com",
  projectId: "neo-mail",
  storageBucket: "neo-mail.firebasestorage.app",
  messagingSenderId: "411777412645",
  appId: "1:411777412645:web:cfe3dc574ace50e6e3d9cc",
  measurementId: "G-6XYZXSQE1D"
};

const app = initializeApp(firebaseConfigSub);
const db = getFirestore(app);
const storage = getStorage(app);

export { db, storage };
export const auth = getAuth(app); // ✅ Add this line