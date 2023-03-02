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
  apiKey: "AIzaSyA-33Y2nZuwtr2InuJULj8jinbOiKUluXo",
  authDomain: "treak-io.firebaseapp.com",
  projectId: "treak-io",
  storageBucket: "treak-io.appspot.com",
  messagingSenderId: "641364415849",
  appId: "1:641364415849:web:f326c0680b619edb23d9f8",
  measurementId: "G-EKTXT7TEJX",
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
