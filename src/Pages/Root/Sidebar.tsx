import SidebarItems from "./SidebarItems"

const Sidebar = () => {
    return (
        <div id="sidebar" className="bg-primary">
            <div className="brand">BRAND</div>

            <ul>
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
