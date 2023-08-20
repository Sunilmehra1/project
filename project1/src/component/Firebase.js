// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyA04VlVzzv-C7zjbaiHVTh1WgFC3yJrMPY",
  authDomain: "sunil-93261.firebaseapp.com",
  projectId: "sunil-93261",
  storageBucket: "sunil-93261.appspot.com",
  messagingSenderId: "747604874433",
  appId: "1:747604874433:web:d25e7d900a8f03ca8e7040",
  measurementId: "G-33MX0V0CC2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth();
export { app, auth };
