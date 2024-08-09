import FooterMenuItems from "./FooterMenuItems"

function FooterSubMenu({submenus}) {
    return (
        <>
                {submenus.map((submenu, index) => (
                    <div class="footer-submenu hover:border-b-[2px] hover:border-[solid] hover:border-b-[#DBB064] w-[fit-content]">
                        <FooterMenuItems items={submenu} key={index} />
                    </div>
                ))}
        </>

    )
}

export default FooterSubMenu
