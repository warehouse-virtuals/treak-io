import React, { useState, useEffect } from "react"

import { collection, getDocs } from "firebase/firestore"
import { db } from "../../firebase"

const Customer = () => {
  const [customers, setCustomers] = useState([])

  useEffect(() => {
    getCustomers()
  }, [])

  useEffect(() => {
    console.log(customers)
  }, [customers])

  const getCustomers = () => {
    const customerCollectionRef = collection(db, "customers")
    getDocs(customerCollectionRef)
      .then((response) => {
        const customersFromFirestore = response.docs.map((doc) => ({
          data: doc.data(),
          id: doc.id,
        }))
        setCustomers(customersFromFirestore[0].data.customers)
      })
      .catch((error) => console.log(error.message))
  }

  return (
    <div>
      {customers.map((c) => {
        return (
          <div>
            {c.customerShortName}
            {c.city}
          </div>
        )
      })}
    </div>
  )
}

export default Customer
