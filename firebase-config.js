import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDng_XAUEuyC4op6mno-Ys_RqTYfqPuzKM",
  authDomain: "jagruti-f8bee.firebaseapp.com",
  projectId: "jagruti-f8bee",
  storageBucket: "jagruti-f8bee.appspot.com",
  messagingSenderId: "145496441141",
  appId: "1:145496441141:web:69e62e3fc82d0cfa178c7c",
  measurementId: "G-QCVGP7EX0K",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export default app;
