import { createContext, useContext, useEffect, useState } from "react"
import { startOfMonth, endOfMonth } from "date-fns"

import {
  onSnapshot,
  collection,
  query,
  where,
  doc,
  updateDoc,
  deleteDoc,
  getDocs,
  orderBy,
  limit,
  startAt,
  endAt,
  startAfter,
} from "firebase/firestore"

import { getStorage, ref, getDownloadURL } from "firebase/storage"

import { UserAuth } from "./UserContext"

const FirebaseContext = createContext()

export const FirebaseContextProvider = ({ children }) => {
  const storage = getStorage()
  const { userData, db } = UserAuth()

  const [currentPatients, setCurrentPatients] = useState([])
  const [patientsPaginationData, setPatientsPaginationData] = useState({
    start: null,
    end: null,
  })
  const [isEndOfPatientList, setIsEndOfPatientList] = useState(false)

  const [currentAppointments, setCurrentAppointments] = useState([])
  const [monthsList, setMonthsList] = useState([])

  const [chatChannels, setChatChannels] = useState([])
  const [lastSender, setLastSender] = useState({
    senderHandle: "",
    senderImageURL: "",
  })
  const [chatResults, setChatResults] = useState([])

  const [messages, setMessages] = useState([])
  const [messagesPaginationData, setMessagesPaginationData] = useState({
    start: null,
    end: null,
  })
  const [isEndOfActiveChat, setIsEndOfActiveChat] = useState(false)

  const [radarChartData, setRadaraChartData] = useState([
    {
      subject: "Math",
      A: 120,
      B: 110,
      fullMark: 150,
    },
    {
      subject: "Chinese",
      A: 98,
      B: 130,
      fullMark: 150,
    },
    {
      subject: "English",
      A: 86,
      B: 130,
      fullMark: 150,
    },
    {
      subject: "Geography",
      A: 99,
      B: 100,
      fullMark: 150,
    },
    {
      subject: "Physics",
      A: 85,
      B: 90,
      fullMark: 150,
    },
    {
      subject: "History",
      A: 65,
      B: 85,
      fullMark: 150,
    },
  ])
  const [lineChartData, setLineChartData] = useState([
    {
      name: "Pzt",
      uv: 10,
      pv: 240,
      amt: 240,
    },
    {
      name: "Sal",
      uv: 300,
      pv: 139,
      amt: 221,
    },
    {
      name: "Çar",
      uv: 100,
      pv: 980,
      amt: 229,
    },
    {
      name: "Per",
      uv: 278,
      pv: 390,
      amt: 200,
    },
    {
      name: "Cum",
      uv: 189,
      pv: 480,
      amt: 218,
    },
    {
      name: "Cmt",
      uv: 239,
      pv: 380,
      amt: 250,
    },
  ])

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

  const searchPatientsResult = async (
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

  const searchChatResults = async (customerid, searchText, numberCheck) => {
    const patientsRef = collection(db, "users/")
    const orderDecider = numberCheck ? "phone" : "name"
    const q = query(
      patientsRef,
      where("customerID", "==", customerid),
      orderBy(orderDecider),
      limit(5),
      startAt(searchText),
      endAt(searchText + "\uf8ff")
    )

    onSnapshot(q, (snapshot) => {
      setChatResults(
        snapshot.docs.map((doc) => {
          const source = snapshot.metadata.fromCache ? "local cache" : "server"
          console.log("Contact Results:  " + source)
          const data = doc.data()
          return {
            clinicid: data.clinicID,
            handle: data.name + " " + data.surname,
            image: data.ppURLFromStorage,
          }
        })
      )
    })
  }

  const patientsSnapshotOnMount = async (customerid, usersClinic) => {
    if (customerid) {
      const patientsRef = collection(db, "customers/", customerid, "/patients")
      const q = query(
        patientsRef,
        orderBy("createdAt", "desc"),
        limit(11),
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
            console.log("Patients: " + source)
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
      startAfter(patientsPaginationData.start),
      limit(11),
      where("assignedClinic", "==", userData.clinicID)
    )

    onSnapshot(q, (snapshot) => {
      if (snapshot.docs.length > 0) {
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
            console.log("More patients: " + source)

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
            console.log("Appointments: " + source)
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
              console.log("More appointments: " + source)
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

  const chatChannelsSnapshotOnMount = async () => {
    if (userData.customerID) {
      const chatRef = collection(
        db,
        "customers/" + userData.customerID + "/chat"
      )

      const q = query(
        chatRef,
        where("participants", "array-contains", userData.uid)
      )

      onSnapshot(q, (snap) => {
        setChatChannels(
          snap.docs.map((doc) => {
            return { channelid: doc.id, participants: doc.data().participants }
          })
        )
      })
    }
  }

  const channelInfo = async () => {
    const participantsExceptMe = await chatChannels.map((channel) => {
      return channel.participants.filter(
        (participant) => participant !== userData.uid
      )
    })[0]
    if (participantsExceptMe) {
      onSnapshot(doc(db, "users/", participantsExceptMe[0]), (doc) => {
        const source = doc.metadata.fromCache ? "local cache" : "server"
        console.log("Channel Info: " + source)
        const data = doc.data()
        const ppRef = ref(storage, data.ppURL)
        getDownloadURL(ppRef).then((promise) => {
          const ppFromFirestore = promise
          setLastSender({
            senderHandle: data.name + " " + data.surname,
            senderImageURL: ppFromFirestore,
          })
        })
      })
    }
  }

  const getMessagesSnapshotOnMount = async () => {
    if (userData.customerID) {
      chatChannels.forEach((chatChannel) => {
        const messagesRef = collection(
          db,
          "customers/" +
            userData.customerID +
            "/chat/" +
            chatChannel.channelid +
            "/messages"
        )

        const q = query(messagesRef, orderBy("createdAt", "desc"), limit(10))
        onSnapshot(q, (snap) => {
          setMessagesPaginationData({
            ...messagesPaginationData,
            start: snap.docs[snap.docs.length - 1],
          })

          setMessages(
            snap.docs.map((doc) => {
              const source = snap.metadata.fromCache ? "local cache" : "server"
              console.log("Messages: " + source)
              return {
                ...doc.data(),
                createdAt: doc.data().createdAt.toDate(),
                messageid: doc.id,
                channelid: chatChannel.channelid,
              }
            })
          )
        })
      })
    }
  }

  const getMoreMessages = async () => {
    chatChannels.forEach((chatChannel) => {
      const messagesRef = collection(
        db,
        "customers/" +
          userData.customerID +
          "/chat/" +
          chatChannel.channelid +
          "/messages"
      )

      const q = query(
        messagesRef,
        orderBy("createdAt", "desc"),
        startAfter(messagesPaginationData.start),
        limit(10)
      )

      onSnapshot(q, (snap) => {
        //Mesajlar duplice oluyor; needs fix!------------------------------------------------------------------------------
        if (snap.docs.length > 0) {
          setMessagesPaginationData({
            ...messagesPaginationData,
            start: snap.docs[snap.docs.length - 1],
          })

          setMessages([
            ...messages,
            ...snap.docs.map((doc) => {
              const source = snap.metadata.fromCache ? "local cache" : "server"
              console.log("More Messages: " + source)
              return {
                ...doc.data(),
                createdAt: doc.data().createdAt.toDate(),
                messageid: doc.id,
                channelid: chatChannel.channelid,
              }
            }),
          ])
        } else {
          setIsEndOfActiveChat(true)
        }
      })
    })
  }

  useEffect(() => {
    patientsSnapshotOnMount(userData.customerID, userData.clinicID)
    appointmentsSnapshotOnMount(userData.customerID, userData.clinicID)
    chatChannelsSnapshotOnMount()
    console.log("Firebase Context => LOOP'ta İSE ACİLEN DURDUR!")
    // eslint-disable-next-line
  }, [userData])

  useEffect(() => {
    getMessagesSnapshotOnMount()
    //eslint-disable-next-line
  }, [chatChannels])

  useEffect(() => {
    channelInfo()
    console.log("burası sorun çıkarabilir bir ara bakarım")
    //eslint-disable-next-line
  }, [chatChannels])

  return (
    <FirebaseContext.Provider
      value={{
        messages,
        userData,
        lastSender,
        chatResults,
        chatChannels,
        getInventory,
        getPortfolio,
        deletePatient,
        setChatResults,
        radarChartData,
        lineChartData,
        currentPatients,
        getMoreMessages,
        getMorePatients,
        deleteAppointment,
        updateAppointment,
        searchChatResults,
        isEndOfActiveChat,
        isEndOfPatientList,
        currentAppointments,
        getMoreAppointments,
        searchPatientsResult,
        getEmployeesOfClinic,
        setIsEndOfActiveChat,
        messagesPaginationData,
        patientsPaginationData,
      }}
    >
      {children}
    </FirebaseContext.Provider>
  )
}

export const FirebaseActions = () => {
  return useContext(FirebaseContext)
}
