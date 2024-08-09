import Dropdown from "./Dropdown";
import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

function MenuItems({items, depthLevel}) {

    const [dropdown, setDropdown] = useState(false);
    let ref = useRef();

    useEffect(() => {
        const handler = (event) => {
         if (dropdown && ref.current && !ref.current.contains(event.target)) {
          setDropdown(false);
         }
        };
        document.addEventListener("mousedown", handler);
        document.addEventListener("touchstart", handler);
        return () => {
         // Cleanup the event listener
         document.removeEventListener("mousedown", handler);
         document.removeEventListener("touchstart", handler);
        };
    }, [dropdown]);

    const onMouseEnter = () => {
        setDropdown(true)
    }

    const onMouseLeave = () => {
        setDropdown(false)
    }

  return (
    <li ref={ref} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} className="block text-xl h-full content-center ml-[30px] mr-[30px] relative border-bottom-menu-transparent hover:border-b-[8px] hover:border-[solid] hover:border-b-primaryBrownColor-0">
        {items.submenu ? (
            <>
                <button type="button" aria-haspopup="menu" aria-expanded={dropdown ? "true" : "false"} onClick={() => setDropdown((prev) => !prev)}>
                    {items.menuTitle}{' '}
                    {depthLevel > 0 ? <span>&raquo;</span> : <span className="arrow" />}
                </button>
                <Dropdown submenus={items.submenu} dropdown={dropdown} depthLevel={depthLevel}/>
            </>
        ) : (
            <Link to={items.url}>{items.menuTitle}</Link>
        )}
    </li>
  )
}

export default MenuItems
