import { createContext, useContext, useEffect, useState } from "react"
import { startOfMonth, endOfMonth } from "date-fns"

import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  signInWithEmailAndPassword,
  // updateProfile,
} from "firebase/auth"

import {
  onSnapshot,
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

export const FirebaseContextProvider = ({ children }) => {
  const storage = getStorage()
  const [user, setUser] = useState({})
  const [userData, setUserData] = useState({})

  const [currentPatients, setCurrentPatients] = useState([])
  const [patientsPaginationData, setPatientsPaginationData] = useState({
    start: null,
    end: null,
  })
  const [isEndOfPatientList, setIsEndOfPatientList] = useState(false)

  const [currentAppointments, setCurrentAppointments] = useState([])
  const [monthsList, setMonthsList] = useState([])

  const createUser = async (email, password) => {
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
      limit(5),
      startAt(searchText),
      endAt(searchText + "\uf8ff")
    )
    const querySnapshotOfAssignedPatients = await getDocs(q)
    let arr = []
    querySnapshotOfAssignedPatients.forEach((doc) => {
      arr.push(doc.data())
    })

    return arr
  }
  const patientsSnapshotOnMount = async (customerid, usersClinic) => {
    if (customerid) {
      const patientsRef = collection(db, "customers/", customerid, "/patients")
      const q = query(
        patientsRef,
        orderBy("createdAt", "desc"),
        limit(12),
        where("assignedClinic", "==", usersClinic)
      )

      onSnapshot(q, (snapshot) => {
        setPatientsPaginationData({
          ...patientsPaginationData,
          start: snapshot.docs[snapshot.docs.length - 1],
        })
        setCurrentPatients(
          snapshot.docs.map((doc) => {
            const source = snapshot.metadata.fromCache
              ? "local cache"
              : "server"
            console.log("Data came from " + source)
            return { ...doc.data(), id: doc.data().id }
          })
        )
      })
    }
  }

  const getMorePatients = async () => {
    const patientsRef = collection(
      db,
      "customers/",
      userData.customerID,
      "/patients"
    )
    const q = query(
      patientsRef,
      orderBy("createdAt", "desc"),
      startAt(patientsPaginationData.start),
      limit(12),
      where("assignedClinic", "==", userData.clinicID)
    )

    onSnapshot(q, (snapshot) => {
      if (
        !(
          currentPatients[currentPatients.length - 1].id ===
          snapshot.docs[snapshot.docs.length - 1].data().id
        )
      ) {
        setPatientsPaginationData({
          ...patientsPaginationData,
          start: snapshot.docs[snapshot.docs.length - 1],
        })

        setCurrentPatients([
          ...currentPatients,
          ...snapshot.docs.map((doc) => {
            const source = snapshot.metadata.fromCache
              ? "local cache"
              : "server"
            console.log("Data came from " + source)

            return { ...doc.data(), id: doc.data().id }
          }),
        ])
      } else {
        setIsEndOfPatientList(true)
      }
    })
  }
  const appointmentsSnapshotOnMount = async (customerid, usersClinic) => {
    if (customerid) {
      var date = new Date()
      const appointmentsRef = collection(
        db,
        "customers/",
        customerid,
        "/clinics/",
        usersClinic,
        "/appointments"
      )

      const q = query(
        appointmentsRef,
        orderBy("date"),
        where("date", ">=", startOfMonth(date)),
        where("date", "<", endOfMonth(date))
        //SANIRIM SADECE BU AYI ALDIM
      )
      setMonthsList([...monthsList, startOfMonth(date)])

      onSnapshot(q, (snapshot) => {
        setCurrentAppointments(
          snapshot.docs.map((doc) => {
            const source = snapshot.metadata.fromCache
              ? "local cache"
              : "server"
            console.log("Data came from " + source)
            return { ...doc.data(), id: doc.id }
          })
        )
      })
    }
  }

  const getMoreAppointments = async (newDateForMonthsList) => {
    if (userData.customerID) {
      const appointmentsRef = collection(
        db,
        "customers/",
        userData.customerID,
        "/clinics/",
        userData.clinicID,
        "/appointments"
      )
      const q = query(
        appointmentsRef,
        orderBy("date"),
        where("date", ">=", startOfMonth(newDateForMonthsList)),
        where("date", "<", endOfMonth(newDateForMonthsList))
      )
      const dateInArray = (date, array) => array.some((d) => +d === +date)

      if (!dateInArray(startOfMonth(newDateForMonthsList), monthsList)) {
        setMonthsList([...monthsList, startOfMonth(newDateForMonthsList)])

        onSnapshot(q, (snapshot) => {
          setCurrentAppointments([
            ...currentAppointments,
            ...snapshot.docs.map((doc) => {
              const source = snapshot.metadata.fromCache
                ? "local cache"
                : "server"
              console.log("Data came from " + source)
              return { ...doc.data(), id: doc.id }
            }),
          ])
        })
      }
    }
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

  useEffect(() => {
    patientsSnapshotOnMount(userData.customerID, userData.clinicID)
    appointmentsSnapshotOnMount(userData.customerID, userData.clinicID)
    console.log("Firebase Context => LOOP'ta İSE ACİLEN DURDUR!")
    // eslint-disable-next-line
  }, [userData])

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
        currentPatients,
        isEndOfPatientList,
        getMorePatients,
        currentAppointments,
        getMoreAppointments,
        db,
        patientsPaginationData,
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
