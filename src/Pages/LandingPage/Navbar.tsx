import { Link } from "react-router-dom"
import Button from "../../Components/Button"
import { FC, memo, useEffect, useRef } from "react"

const Navbar: FC<LandingPage.Navbar> = ({ loginRegisterRef }) => {
    const btnLoginRef = useRef<HTMLButtonElement>(null)
    const btnRegisterRef = useRef<HTMLButtonElement>(null)

    useEffect(() => {
        const buttons = [btnLoginRef, btnRegisterRef]

        const handleClick = () => loginRegisterRef.current?.scrollIntoView()
        buttons.map((button) =>
            button.current?.addEventListener("click", handleClick)
        )
    }, [loginRegisterRef])

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
                            <Button
                                color="light"
                                outline
                                className="px-3"
                                ref={btnLoginRef}
                            >
                                Sign In
                            </Button>
                            <Button
                                color="danger"
                                className="text-light"
                                ref={btnRegisterRef}
                            >
                                Register
                            </Button>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default memo(Navbar)
