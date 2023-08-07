import loginVector from "../../Assets/images/login-vector.svg"
import { Link, Outlet } from "react-router-dom"
import logo from "../../Assets/logo-sp.webp"

const LandingPage = () => {
    return (
        <div className="landing-page">
            <nav className="navbar navbar-expand-lg bg-primary text-light pt-4">
                <div className="container">
                    <Link
                        className="navbar-brand text-light fw-bold fs-3"
                        to="/"
                    >
                        Psichological Test
                    </Link>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNav"
                        aria-controls="navbarNav"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item d-flex gap-3">
                                <Link to="/" className="btn btn-outline-light">
                                    Sign In
                                </Link>
                                <Link
                                    to="/register"
                                    className="btn btn-danger text-primary"
                                >
                                    Register
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            <section className="overview text-center text-light bg-primary">
                <div className="pt-5">
                    <h1>Tes Psikologi</h1>
                    <img src={logo} alt="Psichological Test" />
                </div>
                <p className="fs-3 mb-0">
                    Kami menyediakan Tes IST, MSDT & PAPI
                </p>
            </section>

            <div className="background" />
            <section className="row container justify-content-between mx-auto mb-5 mh-25">
                <div className="col-md-5">
                    <img src={loginVector} alt="Login Register" />
                </div>
                <div className="col-md-5">
                    <Outlet />
                </div>
            </section>
        </div>
    )
}

export default LandingPage
