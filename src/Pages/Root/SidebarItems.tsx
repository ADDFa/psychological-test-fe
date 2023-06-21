import { MouseEventHandler } from "react"
import { Link } from "react-router-dom"

const SidebarItems: React.FC<SidebarItemsT> = ({ to, iconName, text }) => {
    const setActive: MouseEventHandler<HTMLAnchorElement> = (evt) => {
        document.querySelector("#sidebar .active")?.classList.remove("active")
        localStorage.setItem("sidebar_active", evt.currentTarget.pathname)
        evt.currentTarget.classList.add("active")
    }

    return (
        <li>
            <Link to={to} onClick={setActive}>
                <i className={`bi bi-${iconName}`} />
                <span>{text}</span>
            </Link>
        </li>
    )
}

export default SidebarItems
