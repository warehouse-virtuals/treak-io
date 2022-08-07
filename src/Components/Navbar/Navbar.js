import whLogo from "../../Assets/logo.svg"
import homeSVG from "../../Assets/home.svg"
import logoutSVG from "../../Assets/logout.svg"
import searchSVG from "../../Assets/search.svg"
import archiveSVG from "../../Assets/archive.svg"
import hdSVG from "../../Assets/hard-drive.svg"
import activySVG from "../../Assets/activity.svg"

const Navbar = () => {
  return (
    <div className="h-full w-48 bg-gray-100 bg-clip-padding text-gray-700 flex flex-col drop-shadow-lg items-center">
      <div className="mt-10 mb-20 border-b-2">
        <img src={whLogo} />
        warehouse
      </div>
      <img src={homeSVG} />
      <img src={searchSVG} />
      <img src={archiveSVG} />
      <img src={hdSVG} />
      <img src={activySVG} />
      <img src={logoutSVG} />
    </div>
  )
}

export default Navbar
