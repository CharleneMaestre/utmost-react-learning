import Navbar from "../NavigationBlock/Navbar"
import { Link } from "react-router-dom"

function Header() {
  return (
    <header className="sticky top-[0] z-[1]">
        <div className=" bg-navigationBgColor-0 pl-20 pr-20 h-[100px] content-center">
            <div className="float-left h-full content-center">
                <Link to="/">
                  <img src="https://utmost.org/wp-content/uploads/logo-my-utmost-for-his-highest-wordmark.svg" className="w-[264px]"/>
                </Link>
            </div>
            <Navbar/>
        </div>
    </header>
  )
}

export default Header
