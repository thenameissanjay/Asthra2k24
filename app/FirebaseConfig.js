// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBTDnwNwCp9tDAisQPN4Zh1vU6rOnbgUl4",
  authDomain: "database-d30c5.firebaseapp.com",
  projectId: "database-d30c5",
  storageBucket: "database-d30c5.appspot.com",
  messagingSenderId: "872906202910",
  appId: "1:872906202910:web:bd8b9179806e3a5359b30f",
  measurementId: "G-HFLVWJVTNJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export  {db};