import { footerData } from "../../data/FooterPrimaryMenuData"
import FooterMenuItems from "./FooterMenuItems";

function FooterNav() {

    return (
        <>
            { footerData.map((menu, index) => {
                return (
                    <>
                        <div className={`col-start-${menu.id}`}>
                            <div className="grid grid-cols-1 grid-rows-5 gap-4 editions"> 
                                <FooterMenuItems items={menu} key={index}/>
                            </div>
                        </div>
                
                    </>

                )
                
            })}
        </>
        

    
    )
    }

export default FooterNav
