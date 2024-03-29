import { Link, Outlet } from "react-router-dom"
import Sidebar from "./Sidebar"
import Auth from "../../Functions/Auth"

const Root = () => {
    return (
        <div className="root">
            <Sidebar type={Auth.auth?.role} />

            <div className="content">
                <header className="row align-items-center justify-content-between mb-5">
                    <div className="col-md-8"></div>

                    <div className="col-md-4 d-flex justify-content-end">
                        <Link
                            to="/"
                            className="btn btn-primary text-light"
                            onClick={() => localStorage.clear()}
                        >
                            Log Out
                        </Link>
                    </div>
                </header>

                <Outlet />
            </div>
        </div>
    )
}

export default Root
