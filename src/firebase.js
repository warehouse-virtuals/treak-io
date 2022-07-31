import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"

import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyDdDlQ9rrTMzakGCgWPw0VQ81oCrnmNe6c",
  authDomain: "warehouse-io.firebaseapp.com",
  projectId: "warehouse-io",
  storageBucket: "warehouse-io.appspot.com",
  messagingSenderId: "1031611310079",
  appId: "1:1031611310079:web:1118bb2549d6fda7b1d1ca",
  measurementId: "G-CJ11Z1TKRH",
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)

export const auth = getAuth(app)
export const db = getFirestore(app)

export default app
