
import { initializeApp, getApp, getApps } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_KEY,
  authDomain: "wetflix-e91c9.firebaseapp.com",
  projectId: "wetflix-e91c9",
  storageBucket: "wetflix-e91c9.appspot.com",
  messagingSenderId: "625637777828",
  appId: "1:625637777828:web:2a9806b3deea5ab00b2131",
  measurementId: "G-ESG9DYZC1X"
};


// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const auth = getAuth();

const analytics = getAnalytics(app);

export default app;
export { auth, db };