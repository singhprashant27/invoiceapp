import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/database";
import "firebase/compat/storage";

const app = firebase.initializeApp({
  apiKey: "AIzaSyClEnqg6N5lEDWUi3AQoqQfO1JUDEUVBZk",
  authDomain: "invoice-app-capstone.firebaseapp.com",
  projectId: "invoice-app-capstone",
  storageBucket: "invoice-app-capstone.appspot.com",
  messagingSenderId: "473180082798",
  appId: "1:473180082798:web:dcf0ba624a4602846c0c7f",
  measurementId: "G-4SRGEENP4K"
});

export const auth = app.auth();
export const db = app.firestore();
export const storage = app.storage();
export default app;