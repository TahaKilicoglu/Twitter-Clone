import "firebase/database";
import firebase from "firebase/app"

const firebaseConfig = {
  apiKey: "AIzaSyCYnrjhYxue7SurNdtOGDwQyno1ljBmzvw",
  authDomain: "twitter-clone-yt-8c19a.firebaseapp.com",
  projectId: "twitter-clone-yt-8c19a",
  storageBucket: "twitter-clone-yt-8c19a.appspot.com",
  messagingSenderId: "331071636348",
  appId: "1:331071636348:web:f6d2c6721dbfe1d4385af9"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

const db = firebase.firestore(); // database seçeneği realtime db 

export default db;
