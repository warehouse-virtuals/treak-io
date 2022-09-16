const PatientsList = () => {
  const theadData = ["NAME", "DATE OF BIRTH", "GENDER", "STATUS"]

  const tbodyData = [
    {
      id: "1",
      items: ["Mıstık Fıstık", "01 Ocak 1993", "Erkek", "AKTİF"],
    },
    {
      id: "2",
      items: ["Denis Penis", "21 Aralık 1994", "Erkek", "AKTİF"],
    },
    {
      id: "3",
      items: ["Işıl Mışıl", "12 Temmuz 1995", "Kadın", "PASİF"],
    },
  ]

  const TableHeadItem = ({ item }) => {
    return (
      <div className="pl-3 gap-10 grid grid-cols-4 mb-3 ">
        {item.map((h) => {
          return <div className="">{h}</div>
        })}
      </div>
    )
  }
  const TableRow = ({ data }) => {
    return (
      <div className="grid border-r-8 border-green-400 pl-5 gap-10 items-center grid-cols-4 text-sm mb-1 h-14 rounded-2xl drop-shadow-sm bg-white">
        {data.map((item) => {
          return (
            <div className="border-r-2 border-slate-100 " key={item}>
              {item}
            </div>
          )
        })}
      </div>
    )
  }
  const Table = ({ theadData, tbodyData, customClass }) => {
    return (
      <div className={customClass}>
        <div className="text-[#c4c8d5] text-sm font-semibold">
          <TableHeadItem item={theadData} />
        </div>
        <div className="">
          {tbodyData.map((item) => {
            return <TableRow key={item.id} data={item.items} />
          })}
        </div>
      </div>
    )
  }

  return (
    <div className="">
      <Table
        theadData={theadData}
        tbodyData={tbodyData}
        customClass="w-full font-normal "
      />
    </div>
  )
}

export default PatientsList
