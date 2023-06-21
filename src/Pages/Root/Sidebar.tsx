import { useEffect, useRef } from "react"
import SidebarItems from "./SidebarItems"
import logo from "../../Assets/logo-sp.webp"

const Sidebar = () => {
    const ulRef = useRef<HTMLUListElement>(null)

    useEffect(() => {
        const currentActive = localStorage.getItem("sidebar_active")
        if (currentActive) {
            ulRef.current
                ?.querySelector(`[href="${currentActive}"]`)
                ?.classList.add("active")
        } else {
            ulRef.current?.firstElementChild?.firstElementChild?.classList.add(
                "active"
            )
        }
    }, [])

    return (
        <div id="sidebar" className="bg-primary">
            <div className="brand p-3 mb-3">
                <img src={logo} alt="Psichological" />
                <span className="fs-3 fw-bold">Psychological</span>
            </div>

            <ul ref={ulRef}>
                <SidebarItems
                    iconName="house"
                    text="Dashboard"
                    to="/dashboard"
                    active
                />
                <SidebarItems
                    iconName="file-earmark-medical-fill"
                    text="Nilai Saya"
                    to="/score"
                />
            </ul>
        </div>
    )
}

export default Sidebar
