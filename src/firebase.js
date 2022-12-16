import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"
import {
  initializeFirestore,
  enableIndexedDbPersistence,
  CACHE_SIZE_UNLIMITED,
} from "firebase/firestore"
import { getStorage } from "firebase/storage"

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
export const db = initializeFirestore(app, {
  cacheSizeBytes: CACHE_SIZE_UNLIMITED,
})

enableIndexedDbPersistence(db).catch((err) => {
  if (err.code === "failed-precondition") {
    console.log(err.code)
    // Multiple tabs open, persistence can only be enabled
    // in one tab at a a time.
    // ...
  } else if (err.code === "unimplemented") {
    // The current browser does not support all of the
    // features required to enable persistence
    // ...
    console.log(err.code)
  }
})
export const storage = getStorage(app)

export default app
