import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"
import {
  initializeFirestore,
  enableIndexedDbPersistence,
  CACHE_SIZE_UNLIMITED,
} from "firebase/firestore"
import { getStorage } from "firebase/storage"

const firebaseConfig = {
  apiKey: "AIzaSyAInT-boFBdPYOwyHk7bhoYGeX72A2p7oI",
  authDomain: "treat-clinic.firebaseapp.com",
  projectId: "treat-clinic",
  storageBucket: "treat-clinic.appspot.com",
  messagingSenderId: "411102056572",
  appId: "1:411102056572:web:2f94617c0200889ff079f9",
  measurementId: "G-7DSLFDFEBK",
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
