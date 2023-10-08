// firebase.js

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDAX45K0fNM9DrkCHknPxjqmca4tY8ImWM",
  authDomain: "react-autho-nm1.firebaseapp.com",
  projectId: "game-b24c0",
  storageBucket: "react-autho-nm1.appspot.com",
  messagingSenderId: "558882502933",
  appId: "1:558882502933:web:19774495df6c3c99bc111c"
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { app, auth };
