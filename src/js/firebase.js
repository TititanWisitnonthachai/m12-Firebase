import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDDyqkYpHvihUIRensZvdd5DyKQrai7ahE",
  authDomain: "iccs340-10fa8.firebaseapp.com",
  projectId: "iccs340-10fa8",
  storageBucket: "iccs340-10fa8.appspot.com",
  messagingSenderId: "872600230745",
  appId: "1:872600230745:web:0a113f8418ea34fd6f8a48"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {
    db
}