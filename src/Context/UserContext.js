import { createContext, useContext, useEffect, useState } from "react"

import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  signInWithEmailAndPassword,
  // updateProfile,
} from "firebase/auth"

import {
  // collection,
  // query,
  // where,
  setDoc,
  doc,
  getDoc,
  // getDocs,
} from "firebase/firestore"

import { getStorage, ref, getDownloadURL } from "firebase/storage"

import { auth, db } from "../firebase"

const UserContext = createContext()

export const UserContextProvider = ({ children }) => {
  const storage = getStorage()
  const [user, setUser] = useState({})
  const [userData, setUserData] = useState({})

  const createUser = async (email, password) => {
    const newUser = {
      name: "anan",
      surname: "baban",
      email: "anan@anan.com",
      password: "123456",
      jobTitle: "İşitme Uzmanı",
      customerID: "Aw3Sv7wLX8YBYObNCFRk",
      clinicID: "8JhRM4E2T2KoYTGKJZKz",
      ppURL: "users/profilePictures/hidir.jpeg",
    }

    console.log(newUser)
    return createUserWithEmailAndPassword(auth, newUser.email, newUser.password)
      .then((data) => {
        const ppRef = ref(storage, newUser.ppURL)
        getDownloadURL(ppRef).then((promise) => {
          const ppURLFromStorage = promise
          const additionalInfos = {
            name: newUser.name,
            surname: newUser.surname,
            email: newUser.email,
            jobTitle: newUser.jobTitle,
            uid: data.user.uid,
            customerID: newUser.customerID,
            clinicID: newUser.clinicID,
            ppURL: newUser.ppURL,
            ppURLFromStorage: ppURLFromStorage,
          }
          const docRef = doc(db, "users", data.user.uid)
          setDoc(docRef, additionalInfos)
          console.log("oldu")
        })
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
    setUser({})
    setUserData({})
    return signOut(auth)
  }

  const fetchUserData = async (userID) => {
    const usersDocRef = doc(db, "users", userID)
    getDoc(usersDocRef).then((doc) => {
      const data = doc.data()
      const ppRef = ref(storage, data.ppURL)
      getDownloadURL(ppRef).then((promise) => {
        const ppFromFirestore = promise
        setUserData({ ...data, ppFromFirestore: ppFromFirestore })
      })
    })
  }

  // const getCustomers = async () => {
  //   const customersRef = collection(db, "customers")
  //   getDocs(customersRef)
  //     .then((customers) => {
  //       customers.forEach((customer) => customer.id)
  //     })
  //     .catch((err) => console.error(err))
  //   console.log("LOOP'ta İSE ACİLEN DURDUR!")
  // }

  // const getEmployeesOfClinic = async (usersClinic) => {
  //   const q = query(
  //     collection(db, "users/"),
  //     where("clinicID", "==", usersClinic)
  //   )
  //   const querySnapshotOfEmployees = await getDocs(q)
  //   let arr = []
  //   querySnapshotOfEmployees.forEach((doc) => {
  //     arr.push(doc.data())
  //   })
  //   console.log("LOOP'ta İSE ACİLEN DURDUR!")
  //   return arr
  // }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        try {
          setUser(currentUser)
          fetchUserData(auth.currentUser.uid)
        } catch (error) {
          console.log("Error: " + error)
        }
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
        db,
        user,
        login,
        logout,
        userData,
        createUser,
        fetchUserData,
      }}
    >
      {children}
    </UserContext.Provider>
  )
}

export const UserAuth = () => {
  return useContext(UserContext)
}
