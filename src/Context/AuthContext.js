import { createContext, useContext, useEffect, useState } from "react"
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  signInWithEmailAndPassword,
  // updateProfile,
} from "firebase/auth"

import {
  collection,
  query,
  where,
  setDoc,
  doc,
  getDoc,
  getDocs,
  orderBy,
  limit,
} from "firebase/firestore"
import { getStorage, ref, getDownloadURL } from "firebase/storage"

import { auth, db } from "../firebase"

const UserContext = createContext()

export const AuthContextProvider = ({ children }) => {
  const storage = getStorage()
  const [user, setUser] = useState({})
  const [userData, setUserData] = useState({})

  const createUser = (email, password) => {
    const newUser = {
      name: "Hıdır",
      surname: "Hıdıroğlu",
      email: "hidir@hidir.com",
      password: "123456",
      jobTitle: "İşitme Uzmanı",
      customerID: "Aw3Sv7wLX8YBYObNCFRk",
      clinicID: "8JhRM4E2T2KoYTGKJZKz",
      ppURL: "users/profilePictures/hidir.jpeg",
    }

    console.log(newUser)
    return createUserWithEmailAndPassword(auth, newUser.email, newUser.password)
      .then((data) => {
        const additionalInfos = {
          name: newUser.name,
          surname: newUser.surname,
          email: newUser.email,
          jobTitle: newUser.jobTitle,
          uid: data.user.uid,
          customerID: newUser.customerID,
          clinicID: newUser.clinicID,
          ppURL: newUser.ppURL,
        }
        const docRef = doc(db, "users", data.user.uid)
        setDoc(docRef, additionalInfos)
        console.log("oldu")
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

  const fetchUserData = async (userID) => {
    const usersDocRef = doc(db, "users", userID)
    getDoc(usersDocRef).then((doc) => {
      const data = doc.data()
      const ppRef = ref(storage, data.ppURL)
      getDownloadURL(ppRef).then((promise) => {
        const ppurl = promise
        setUserData({ ...data, ppurl: ppurl })
        console.log(userData)
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

  const getPatients = async (customerid, usersClinic) => {
    console.log(customerid)
    const patientsRef = collection(db, "customers/", customerid, "/patients")
    const q = query(patientsRef, where("assignedClinic", "==", usersClinic))
    const querySnapshotOfAssignedPatients = await getDocs(q)
    let arr = []
    querySnapshotOfAssignedPatients.forEach((doc) => {
      arr.push(doc.data())
    })
    return arr
  }
  const getAppointments = async (customerid, usersClinic, limitCount) => {
    const patientsRef = collection(
      db,
      "customers/",
      customerid,
      "/clinics/",
      usersClinic,
      "/appointments"
    )
    const q = query(patientsRef, orderBy("date"), limit(limitCount))
    const querySnapshotOfAssignedPatients = await getDocs(q)
    let arr = []
    querySnapshotOfAssignedPatients.forEach((doc) => {
      arr.push(doc.data())
    })
    return arr
  }
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log(auth.currentUser.uid)
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
        getPatients,
        getAppointments,
      }}
    >
      {children}
    </UserContext.Provider>
  )
}

export const UserAuth = () => {
  return useContext(UserContext)
}
