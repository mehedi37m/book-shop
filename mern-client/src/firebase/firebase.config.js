// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBd0nxaw8IXPSDNrlVuVZatFeTJPjhTS3U",
  authDomain: "book-store-e72a5.firebaseapp.com",
  projectId: "book-store-e72a5",
  storageBucket: "book-store-e72a5.appspot.com",
  messagingSenderId: "514539457323",
  appId: "1:514539457323:web:ee2018467e3e43ce4c936e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;