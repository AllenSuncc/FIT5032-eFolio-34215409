// Import Firebase functions
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB14yE2nxS8RKv4T3leoPUgu7UMgkVZ6bo",
  authDomain: "week7-haojun-94b40.firebaseapp.com",
  projectId: "week7-haojun-94b40",
  storageBucket: "week7-haojun-94b40.appspot.com",
  messagingSenderId: "809641826305",
  appId: "1:809641826305:web:15cccf6cc0d23bf311c800"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(app);

export default db;
