const Card = (props) => {
  return (
    <div className="flex justify-center items-center bg-blue-300 h-40 w-1/5 mr-10 text-[#0a1f33] text-5xl rounded-3xl">
      {props.whatDisDo}
    </div>
  )
}

export default Card
