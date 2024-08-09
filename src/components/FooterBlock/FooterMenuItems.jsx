import FooterSubMenu from "./FooterSubMenu";
import { Link } from "react-router-dom";
import { footerData } from "../../data/FooterPrimaryMenuData"

function FooterMenuItems({items}) {
    return (
        <>
            {items.submenu ? (
                <>
                    <div className="text-lg font-semibold font-proximaNova">{items.menuTitle}</div>
                    <FooterSubMenu submenus={items.submenu}/>
                </>
            ) : (
                <Link to={items.url} className="font-proximaNova">{items.menuTitle}</Link>
            )}
                      
        </>

        
      )
}

export default FooterMenuItems
