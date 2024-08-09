import Container from "../Container"
import Grid from "../Grid"
import Logo from "../Logo"
import ExcerptText from "../ExcerptText"
import FooterNav from "./FooterNav"
import HorizontalLine from "../HorizontalLine"
import { footerSecondaryMenuData } from "../../data/FooterSecondaryMenuData"
import { Link } from "react-router-dom"


function Footer() {

    const footerLogo = "https://utmost.org/wp-content/uploads/logo-my-utmost-for-his-highest-badge.svg"
    const excerptText = "Oswald Chambers’ beloved devotional from Our Daily Bread Ministries."


    return (
        <>
            <Container className="bg-navigationBgColor-0 pt-24 pb-24">
                <Grid className="grid-cols-5 grid-rows-1 gap-4 parent">
                    <div className="col-span-2">
                        <Logo className="w-[84px]" imgSource={footerLogo}/>
                        <ExcerptText text={excerptText} className="mt-5 text-textBlackGrayColor-0 text-lg leading-[33px] w-[358px] font-proximaNova"/>
                    </div>
                    <FooterNav/>
                </Grid>
                <HorizontalLine className="border-[1px] border-pearlBlush-0 mt-10 border-solid"/>
                <div className="grid-cols-2 grid-rows-1 gap-4 mt-20">
                    <div className="flex float-left">
                        { footerSecondaryMenuData.map((menu, index) => {
                            return (
                                <Link className="mr-4 font-proximaNova hover:border-b-[2px] hover:border-[solid] hover:border-b-[#DBB064] w-[fit-content]" to={menu.url}>{menu.menuTitle}</Link>
                            )
                        }) }

                        {/* <p className="mr-4 font-proximaNova">Terms and Conditions</p>
                        <p className="mr-4 font-proximaNova">Privacy Policy</p>
                        <p className="mr-4 font-proximaNova">Help</p> */}
                    </div>
                    <div>
                        <ExcerptText text="2024 Our Daily Bread Ministries" className="float-right font-proximaNova"/>
                    </div>
                </div>
            </Container>
            

        {/* 
        <div className="grid grid-cols-2 grid-rows-1 gap-4 mt-20">
            <div className="flex">
                <p className="mr-4">Rights and Permissions</p>
                <p className="mr-4">Terms and Conditions</p>
                <p className="mr-4">Privacy Policy</p>
                <p className="mr-4">Help</p>
            </div>
            <div>
                <p className="float-right">2024 Our Daily Bread Ministries</p>
            </div>
        </div> */}

        </>

    
  )
}

export default Footer
