import MenuItems from "./MenuItems";

function Dropdown({submenus, dropdown, depthLevel}) {
    depthLevel = depthLevel + 1;
    const dropdownClass = depthLevel > 1 ? "dropdown-submenu" : "";

    return (
        <ul className={`header-dropdown ${dropdownClass} ${dropdown ? "show" : ""} absolute -right-[80px] left-auto hidden min-w-[11rem] bg-[#f4e9d8] pl-0 pr-0 [list-style:none] mt-[40px] font-proximaNova`}>
            {submenus.map((submenu, index) => (
                <MenuItems items={submenu} key={index} depthLevel={depthLevel} />
            ))}
        </ul>
    )
}

export default Dropdown
