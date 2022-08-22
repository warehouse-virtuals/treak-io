import { FiPlusCircle } from "react-icons/fi"

const CardIcons = {
  FiPlusCircle: {
    icon: (
      <FiPlusCircle
        className="rounded-3xl "
        color="#ffffff60"
        size={40}
        stroke="#D6872E"
      />
    ),
    route: "/addPatient",
  },
  FiPlusCircle2: {
    icon: (
      <FiPlusCircle
        className=" rounded-3xl "
        color="#ffffff60"
        size={40}
        stroke="#7831CB"
      />
    ),
    route: "/makeAppointment",
  },
}
export default CardIcons
