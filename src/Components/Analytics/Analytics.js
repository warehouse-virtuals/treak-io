import "./Analytics.css"

import { UserAuth } from "../../Context/UserContext"
import { FirebaseActions } from "../../Context/FirebaseContext"

import { toDate } from "date-fns"

import TopBar from "../TopBar/TopBar"
import { useEffect, useState } from "react"
const Analytics = () => {
  const [portfolioItems, setPortfolioItems] = useState([])
  const [inventory, setInventory] = useState([])

  const { userData } = UserAuth()
  const { getPortfolio, getInventory } = FirebaseActions()

  useEffect(() => {
    getPortfolio(userData.customerID).then((data) => {
      console.log(data)
      setPortfolioItems(data)
    })
    console.log("Agenda Useffect loopta hemen durdur!")
    //eslint-disable-next-line
  }, [])

  const handleGetInventory = async (customerID, productSN) => {
    return await getInventory(customerID, productSN)
  }

  console.log(inventory)
  return (
    <div className='analytics-container'>
      <TopBar />
      <div className='analytics-body'>
        <div className='portfolio'>
          {portfolioItems.map((item) => {
            return (
              <div>
                Portfolyomdaki cihaz bilgileri
                <div>
                  {item.brandName} {item.brandModal}
                </div>
                <div>
                  {item.aidModal} {item.PN} {item.SN}
                </div>
                {item.productSerialNumbers.map((serialNumber, i) => {
                  return (
                    <div
                      onClick={() =>
                        handleGetInventory(
                          userData.customerID,
                          serialNumber
                        ).then((data) => setInventory(data[0]))
                      }
                      key={i}
                    >
                      {i} {serialNumber}
                    </div>
                  )
                })}
              </div>
            )
          })}
        </div>
        <div>
          Envanter Bilgileri
          <div className='entry'>
            <div>Giriş yaptığı tarihler</div>
            {inventory.entryDates
              ? inventory.entryDates.map((date) => {
                  const fixedDate = toDate(
                    date.seconds * 1000
                  ).toLocaleDateString("tr", {
                    day: "2-digit",
                    month: "long",
                    year: "numeric",
                  })
                  return <div>{fixedDate}</div>
                })
              : null}
          </div>
          <div className='exit'>
            <div>Çıkış yaptığı tarihler</div>
            {inventory.exitDates
              ? inventory.exitDates.map((date) => {
                  const fixedDate = toDate(
                    date.seconds * 1000
                  ).toLocaleDateString("tr", {
                    day: "2-digit",
                    month: "long",
                    year: "numeric",
                  })
                  return <div>{fixedDate}</div>
                })
              : null}
          </div>
          <div style={{ marginBottom: "10px" }}>
            {inventory.inStock ? (
              <div>Envanterde</div>
            ) : (
              <div>Envanterde Değil</div>
            )}
          </div>
          <div>{inventory.productSN ? inventory.productSN : null}</div>
        </div>
      </div>
    </div>
  )
}

export default Analytics
