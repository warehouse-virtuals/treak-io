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
  updateDoc,
  deleteDoc,
  getDoc,
  getDocs,
  orderBy,
  limit,
  startAt,
  endAt,
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
        const ppurl = promise
        setUserData({ ...data, ppurl: ppurl })
      })
    })
    console.log("LOOP'ta İSE ACİLEN DURDUR!")
  }

  const getCustomers = async () => {
    const customersRef = collection(db, "customers")
    getDocs(customersRef)
      .then((customers) => {
        customers.forEach((customer) => customer.id)
      })
      .catch((err) => console.error(err))
    console.log("LOOP'ta İSE ACİLEN DURDUR!")
  }

  const getPatients = async (customerid, usersClinic) => {
    const patientsRef = collection(db, "customers/", customerid, "/patients")
    const q = query(patientsRef, where("assignedClinic", "==", usersClinic))
    const querySnapshotOfAssignedPatients = await getDocs(q)
    let arr = []
    querySnapshotOfAssignedPatients.forEach((doc) => {
      arr.push(doc.data())
    })
    console.log("LOOP'ta İSE ACİLEN DURDUR!")
    return arr
  }
  const getEmployeesOfClinic = async (usersClinic) => {
    const q = query(
      collection(db, "users/"),
      where("clinicID", "==", usersClinic)
    )
    const querySnapshotOfEmployees = await getDocs(q)
    let arr = []
    querySnapshotOfEmployees.forEach((doc) => {
      arr.push(doc.data())
    })
    console.log("LOOP'ta İSE ACİLEN DURDUR!")
    return arr
  }

  const searchResults = async (
    customerid,
    usersClinic,
    searchText,
    numberCheck
  ) => {
    const patientsRef = collection(db, "customers/", customerid, "/patients")
    const orderDecider = numberCheck ? "phone" : "name"
    const q = query(
      patientsRef,
      where("assignedClinic", "==", usersClinic),
      orderBy(orderDecider),
      limit(8),
      startAt(searchText),
      endAt(searchText + "\uf8ff")
    )
    const querySnapshotOfAssignedPatients = await getDocs(q)
    let arr = []
    querySnapshotOfAssignedPatients.forEach((doc) => {
      arr.push(doc.data())
    })
    console.log("LOOP'ta İSE ACİLEN DURDUR!")
    return arr
  }

  const getAppointments = async (customerid, usersClinic, limitCount) => {
    const appointmentsRef = collection(
      db,
      "customers/",
      customerid,
      "/clinics/",
      usersClinic,
      "/appointments"
    )

    const q = query(appointmentsRef, orderBy("date"), limit(limitCount))
    const querySnapshotOfAssignedPatients = await getDocs(q)
    let arr = []

    querySnapshotOfAssignedPatients.forEach((doc) => {
      arr.push(doc.data())
    })
    console.log("LOOP'ta İSE ACİLEN DURDUR!")
    return arr
  }

  const updateAppointment = async (
    customerid,
    usersClinic,
    appointmentId,
    updatedDate
  ) => {
    const appointmentRef = doc(
      db,
      "customers/",
      customerid,
      "/clinics/",
      usersClinic,
      "/appointments/",
      appointmentId
    )

    await updateDoc(appointmentRef, { date: updatedDate })
    console.log("LOOP'ta İSE ACİLEN DURDUR!")
  }

  const deletePatient = async (customerid, patientid) => {
    console.log(customerid, patientid)
    const patientToBeDeletedRef = doc(
      db,
      "customers/",
      customerid,
      "/patients/",
      patientid
    )
    await deleteDoc(patientToBeDeletedRef)
    console.log("LOOP'ta İSE ACİLEN DURDUR!")
  }

  const getPortfolio = async (customerid) => {
    const portfolioRef = collection(db, "customers/", customerid, "/portfolio")
    const q = query(portfolioRef)
    const querySnapshotOfPortfolio = await getDocs(q)
    let arr = []

    querySnapshotOfPortfolio.forEach((doc) => {
      arr.push(doc.data())
    })
    console.log("LOOP'ta İSE ACİLEN DURDUR!")
    return arr
  }

  const getInventory = async (customerid, productSN) => {
    const inventoryRef = collection(db, "customers/", customerid, "/inventory")
    const q = query(inventoryRef, where("productSN", "==", productSN))
    const querySnapshotOfInventory = await getDocs(q)

    let arr = []

    querySnapshotOfInventory.forEach((doc) => {
      console.log(doc.data())
      arr.push(doc.data())
    })
    console.log("LOOP'ta İSE ACİLEN DURDUR!")
    return arr
  }

  const deleteAppointment = async (customerid, clinicid, appointmentid) => {
    console.log(customerid, clinicid, appointmentid)
    const appointmentToBeDeletedRef = doc(
      db,
      "customers/",
      customerid,
      "/clinics/",
      clinicid,
      "/appointments/",
      appointmentid
    )
    await deleteDoc(appointmentToBeDeletedRef)
    console.log("LOOP'ta İSE ACİLEN DURDUR!")
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
        getPatients,
        db,
        getAppointments,
        searchResults,
        getEmployeesOfClinic,
        updateAppointment,
        deletePatient,
        deleteAppointment,
        getPortfolio,
        getInventory,
      }}
    >
      {children}
    </UserContext.Provider>
  )
}

export const UserAuth = () => {
  return useContext(UserContext)
}
