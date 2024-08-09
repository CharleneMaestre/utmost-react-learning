import { menuItemsData } from "../../data/MenuItemsData"
import MenuItems from "./MenuItems"
import { Link } from "react-router-dom";
import Button from "../Button";

function Navbar() {
    const depthLevel = 0;
    const btnLink = "/collections/"

    return (
    <nav className="desktop-nav flex float-right h-full">
        <ul className="flex flex-wrap header-items items-center  border-[none] bg-transparent cursor-pointer w-full ">
            {menuItemsData.map((menu, index) => {
                return <MenuItems items={menu} key={index} depthLevel={depthLevel}/>
            })}
            <li className="border-bottom-menu-transparent">
                <Button title="Explore" btnLink={btnLink} className="transparentBg font-abril"/>
            </li>
        </ul>
    </nav>
    )
    }

export default Navbar
