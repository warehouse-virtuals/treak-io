import { createContext, useContext, useEffect, useState } from "react"
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  signInWithEmailAndPassword,
  // updateProfile,
} from "firebase/auth"

import { collection, setDoc, doc, getDoc, getDocs } from "firebase/firestore"
import { getStorage, ref, getDownloadURL } from "firebase/storage"

import { auth, db } from "../firebase"

const UserContext = createContext()

export const AuthContextProvider = ({ children }) => {
  const storage = getStorage()
  const [user, setUser] = useState({})
  const [userData, setUserData] = useState({})

  const createUser = (email, password) => {
    const newUser = {
      email: "damn@damn.com",
      password: "123456",
      customerID: "kCuw9LV3G2cwrMkzX247",
      userID: "",
    }

    return createUserWithEmailAndPassword(auth, newUser.email, newUser.password)
      .then((data) => {
        const additionalInfos = {
          email: newUser.email,
          customerID: newUser.customerID,
          uid: data.user.uid,
        }
        const docRef = doc(db, "users", data.user.uid)
        setDoc(docRef, additionalInfos)
      })
      .catch((error) => {
        const errorCode = error.code
        const errorMessage = error.message
        console.error(errorCode, errorMessage)
      })
  }

  const login = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password)
  }

  const logout = () => {
    return signOut(auth)
  }

  const fetchUserData = (userID) => {
    const usersDocRef = doc(db, "users", userID)
    getDoc(usersDocRef).then((doc) => {
      const data = doc.data()
      console.log(data)
      const ppRef = ref(storage, data.ppurl)
      getDownloadURL(ppRef).then((promise) => {
        const ppurl = promise
        setUserData({ ...data, ppurl: ppurl })
      })
    })
  }

  const getCustomers = async () => {
    const customersRef = collection(db, "customers")
    getDocs(customersRef)
      .then((customers) => {
        customers.forEach((customer) => customer.id)
      })
      .catch((err) => console.error(err))
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      try {
        setUser(currentUser)
        fetchUserData(auth.currentUser.uid)
      } catch (error) {
        console.log("Error: " + error)
      }
    })
    return () => {
      unsubscribe()
    }
    //eslint-disable-next-line
  }, [])

  return (
    <UserContext.Provider
      value={{
        createUser,
        user,
        logout,
        login,
        getCustomers,
        fetchUserData,
        userData,
      }}
    >
      {children}
    </UserContext.Provider>
  )
}

export const UserAuth = () => {
  return useContext(UserContext)
}
