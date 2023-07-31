import { NavLink } from "react-router-dom"

const SidebarItems: React.FC<SidebarItemsT> = ({ to, iconName, text }) => {
    return (
        <li>
            <NavLink to={to}>
                <i className={`bi bi-${iconName}`} />
                <span>{text}</span>
            </NavLink>
        </li>
    )
}

export default SidebarItems
