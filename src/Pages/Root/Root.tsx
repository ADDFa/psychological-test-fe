import { Outlet } from "react-router-dom"

import Sidebar from "./Sidebar"

const Root = () => {
    return (
        <div className="root">
            <Sidebar />

            <div className="content">
                <header className="row align-items-center justify-content-between mb-5">
                    <div className="col-md-8"></div>

                    <div className="col-md-4">
                        <input
                            type="text"
                            className="form-control border-success"
                            placeholder="Cari..."
                        />
                    </div>
                </header>

                <Outlet />
            </div>
        </div>
    )
}

export default Root
