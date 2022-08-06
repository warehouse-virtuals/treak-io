import React, { useState, useEffect } from "react"

import { db } from "../../firebase"
import {
  collection,
  onSnapshot,
  // getDocs,
  // getDoc,
  // addDoc,
  updateDoc,
  // deleteDoc,
  doc,
} from "firebase/firestore"
const Customer = () => {
  const [customers, setCustomers] = useState([])
  const [newCustomerForm, setNewCustomerForm] = useState({
    customerFullName: "",
    customerShortName: "",
    addres: "",
    city: "",
    phone: "",
    postalCode: "",
    territories: [
      {
        territoryName: "",
        manager: "",
        clinics: [
          {
            clinicCode: "",
            clinicName: "",
            adress: "",
            city: "",
            phone: "",
          },
        ],
      },
    ],
    employees: [
      {
        clinicCode: "",
        firstName: "",
        lastName: "",
        email: "",
      },
    ],
    patients: [
      {
        patientId: "",
        firstName: "",
        lastName: "",
        age: "",
        registeredAt: "",
      },
    ],
  })
  const customerCollectionRef = collection(db, "customers")

  const clinicsRef = collection(db, "customers/idis/clinics") //this is a subcollection, output->array
  const employeesRef = collection(db, "customers/idis/employees")
  const territoriesRef = collection(db, "customers/idis/territories")
  const patientsRef = collection(db, "customers/idis/patients/")

  useEffect(() => {
    //Getting copy of information on database
    onSnapshot(customerCollectionRef, (snapshot) => {
      setCustomers(
        snapshot.docs.map((doc) => {
          return { id: doc.id, viewing: false, ...doc.data() }
        })
      )
    })
    console.log(customers)
  }, [])

  // ------Get customers
  // const getCustomers = async () => {
  //   const data = await getDocs(customerCollectionRef)
  //   const customersFromData = await data.docs.map((doc) => ({
  //     ...doc.data(),
  //     id: doc.id,
  //   }))

  //   setCustomers(customersFromData)
  //   console.log(customers)
  // }

  //Get single customer from id
  // const getCustomer = (id) => {
  //   const customerDoc = doc(db, "customers", id)
  //   return getDoc(customerDoc)
  // }

  //Add customer
  // const addCustomer = (newCustomer) => {
  //   return addDoc(customerCollectionRef, newCustomer)
  // }

  //Update customer
  const updateCustomersSomething = (id, updatedInfo) => {
    const customerDoc = doc(db, "customers", id)
    return updateDoc(customerDoc, updateCustomersSomething)
  }

  //delete customer
  // const deleteCustomer = (id) => {
  //   return deleteDoc(id)
  // }

  return <div></div>
}

export default Customer
