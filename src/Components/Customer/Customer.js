import React, { useState, useEffect } from "react"

import { db } from "../../firebase"
import {
  collection,
  getDocs,
  // getDoc,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
  getDoc,
} from "firebase/firestore"

const customerCollectionRef = collection(db, "customers")
const Customer = () => {
  const [customers, setCustomers] = useState([])

  useEffect(() => {
    getCustomers()
  }, [])

  //Get customers
  const getCustomers = async () => {
    const data = await getDocs(customerCollectionRef)
    const customersFromData = await data.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }))

    setCustomers(customersFromData)
    console.log(customers)
  }

  //Get single customer from id
  const getCustomer = (id) => {
    const customerDoc = doc(db, "customers", id)
    return getDoc(customerDoc)
  }

  //Yeni customer bilgileri
  const newCompany = {
    customerFullName: "İdea İşitme Sistemleri",
    customerShortName: "İDİS",
    addres:
      "Sahrayıcedit Mahallesi Batman Sokak Royal Plaza No:18/7 Kat:3-4-5 Kadıköy, İstanbul",
    city: "İstanbul",
    phone: "4444347",
    postalCode: "",
    territories: [
      {
        territoryName: "Marmara",
        manager: "Ahmet Atlı",
        clinics: [
          {
            clinicCode: "3401",
            clinicName: "Kadıköy",
            adress: "SomewhereInIstanbul Kadıköy/İSTANBUL",
            city: "İstanbul",
            phone: "05354901078",
          },
          {
            clinicCode: "3402",
            clinicName: "Maltepe",
            adress: "SomewhereInIstanbul Malteoe/İSTANBUL",
            city: "İstanbul",
            phone: "05354901078",
          },
        ],
      },
      {
        territoryName: "Antalya",
        manager: "Kıvanç Karağaç",
        clinics: [
          {
            clinicCode: "0701",
            clinicName: "Muratpaşa",
            adress: "SomewhereInIstanbul Muratpaşa/Antalya",
            city: "Antalya",
            phone: "05354901078",
          },
        ],
      },
    ],
    employees: [
      {
        clinicCode: "0701",
        firstName: "Nazlı",
        lastName: "Aydın",
        email: "nazliaydin@gmail.com",
      },
      {
        clinicCode: "3401",
        firstName: "Mustafa",
        lastName: "Mıstık",
        email: "mistikmustaf@gmail.com",
      },
    ],
    patients: [
      {
        patientId: "070101",
        firstName: "Hatice",
        lastName: "Teyze",
        age: "47",
        registeredAt: "Kadıköy",
      },
      {
        patientId: "070102",
        firstName: "Mahmut",
        lastName: "Amca",
        age: "56",
        registeredAt: "Muratpaşa",
      },
    ],
  }

  //Add customer
  const addCustomer = (newCustomer) => {
    return addDoc(customerCollectionRef, newCustomer)
  }

  //Update customer
  const updateCustomersSomething = (id, updatedInfo) => {
    const customerDoc = doc(db, "customers", id)
    return updateDoc(customerDoc, updateCustomersSomething)
  }

  //delete customer
  const deleteCustomer = (id) => {
    return deleteDoc(id)
  }

  return <div></div>
}

export default Customer
