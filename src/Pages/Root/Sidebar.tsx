import { FC, useEffect, useRef } from "react"
import SidebarItems from "./SidebarItems"
import logo from "../../Assets/logo-sp.webp"

const Sidebar: FC<Sidebar> = ({ type }) => {
    const ulRef = useRef<HTMLUListElement>(null)

    useEffect(() => {
        ulRef.current
            ?.querySelector(`[href="${window.location.pathname}"]`)
            ?.classList.add("active")
    }, [])

    return (
        <div id="sidebar" className="bg-primary">
            <div className="brand p-3 mb-3">
                <img src={logo} alt="Psichological" />
                <span className="fs-3 fw-bold">Psychological</span>
            </div>

            <ul ref={ulRef}>
                {type === "user" ? (
                    <>
                        <SidebarItems
                            iconName="house"
                            text="Dashboard"
                            to="/dashboard"
                            active
                        />
                        <SidebarItems
                            iconName="file-earmark-medical-fill"
                            text="Nilai Saya"
                            to="/exam/ist/score"
                        />
                    </>
                ) : (
                    <>
                        <SidebarItems
                            iconName="house"
                            text="Dashboard"
                            to="/admin/dashboard"
                            active
                        />
                        <SidebarItems
                            iconName="people"
                            text="Peserta"
                            to="/admin/participant"
                            active
                        />
                    </>
                )}
            </ul>
        </div>
    )
}

export default Sidebar
