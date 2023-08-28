// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
import {getFirestore}  from "firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDJ4_3bXUWEcMaNoXwyGyl1qGfi_Lwl8C0",
  authDomain: "blog-465f6.firebaseapp.com",
  projectId: "blog-465f6",
  storageBucket: "blog-465f6.appspot.com",
  messagingSenderId: "877491805982",
  appId: "1:877491805982:web:fd5f1c127b31e90fd3f30f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export  const auth = getAuth(app);
export  const db = getFirestore(app);
