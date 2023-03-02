import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"
import {
  initializeFirestore,
  enableIndexedDbPersistence,
  CACHE_SIZE_UNLIMITED,
  getFirestore,
} from "firebase/firestore"

import { getStorage } from "firebase/storage"

import { getFunctions, httpsCallable } from "firebase/functions"

const firebaseConfig = {
  apiKey: "AIzaSyD5akf37N-YuKyCCVSMYcpAvJziC806nzg",
  authDomain: "treak-e981a.firebaseapp.com",
  projectId: "treak-e981a",
  storageBucket: "treak-e981a.appspot.com",
  messagingSenderId: "564206749916",
  appId: "1:564206749916:web:db5fa044727edc9dfd0c19",
  measurementId: "G-TDSFJCQXQ2",
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
getFirestore()
export const firestore = getFirestore()
export const functions = getFunctions(app, "europe-west1")
export const storage = getStorage(app)

export default app
