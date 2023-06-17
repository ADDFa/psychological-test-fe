import { Link } from "react-router-dom"

const SidebarItems: React.FC<SidebarItemsT> = ({
    to,
    iconName,
    text,
    active
}) => {
    return (
        <li>
            <Link to={to} className={active ? "active" : ""}>
                <i className={`bi bi-${iconName}`} />
                <span>{text}</span>
            </Link>
        </li>
    )
}

export default SidebarItems
