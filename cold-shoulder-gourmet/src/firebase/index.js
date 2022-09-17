// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyA6p2QbjgGCl9L2Phu9AlN1FMJrG_oYlfU",
    authDomain: "cold-shoulder-gourmet-prod.firebaseapp.com",
    projectId: "cold-shoulder-gourmet-prod",
    storageBucket: "cold-shoulder-gourmet-prod.appspot.com",
    messagingSenderId: "90465584218",
    appId: "1:90465584218:web:c76590126c242923224463",
    measurementId: "G-G8ECY0QH13"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);