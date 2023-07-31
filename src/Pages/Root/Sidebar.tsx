import { FC } from "react"
import SidebarItems from "./SidebarItems"
import logo from "../../Assets/logo-sp.webp"

const Sidebar: FC<Sidebar> = ({ type }) => {
    return (
        <div id="sidebar" className="bg-primary">
            <div className="brand p-3 mb-3">
                <img src={logo} alt="Psichological" />
                <span className="fs-3 fw-bold">Psychological</span>
            </div>

            <ul>
                {type === "admin" ? (
                    <>
                        <SidebarItems
                            iconName="house"
                            text="Dashboard"
                            to="/admin/dashboard"
                            active
                        />
                        <SidebarItems
                            iconName="journal-bookmark-fill"
                            text="Tes"
                            to="/admin/exam"
                        />
                        <SidebarItems
                            iconName="people"
                            text="Peserta"
                            to="/admin/participant"
                        />
                        <SidebarItems
                            iconName="printer-fill"
                            text="Cetak Nilai Peserta"
                            to="/admin/print-result"
                        />
                    </>
                ) : (
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
                )}
            </ul>
        </div>
    )
}

export default Sidebar
