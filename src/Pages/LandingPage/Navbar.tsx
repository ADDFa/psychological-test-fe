import { Link } from "react-router-dom"
import Button from "../../Components/Button"

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-primary text-light pt-4">
            <div className="container">
                <Link className="navbar-brand" to="/">
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
                            <Button color="light" outline className="px-3">
                                Sign In
                            </Button>
                            <Button color="danger" className="text-light">
                                Register
                            </Button>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
