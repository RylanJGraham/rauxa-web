// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// IMPORTANT: Make sure to restrict your API key in the Google Cloud Console for production
const firebaseConfig = {
  apiKey: "AIzaSyDotWj51D4OSUrtjb0ncA7Igo7Q6zgTu1M",
  authDomain: "rauxa-8f9bf.firebaseapp.com",
  projectId: "rauxa-8f9bf",
  storageBucket: "rauxa-8f9bf.appspot.com", // Standard format is project-id.appspot.com
  messagingSenderId: "312076107505",
  appId: "1:312076107505:web:942a57438ae85c8b10f350"
};

// Initialize Firebase
let app;
if (!getApps().length) {
  app = initializeApp(firebaseConfig);
} else {
  app = getApp();
}

const db = getFirestore(app);

export { app, db };
