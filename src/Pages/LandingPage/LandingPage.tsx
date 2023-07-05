import { useCallback, useRef } from "react"
import Login from "./Login"
import Navbar from "./Navbar"
import Overview from "./Overview"
import Register from "./Register"
import loginVector from "../../Assets/images/login-vector.svg"

const LandingPage = () => {
    const loginRef = useRef<HTMLDivElement>(null)
    const registerRef = useRef<HTMLDivElement>(null)
    const loginRegisterView = useRef<HTMLDivElement>(null)

    const handleForm = () => {
        loginRef.current?.classList.toggle("d-none")
        registerRef.current?.classList.toggle("d-none")
    }

    const showLogin = useCallback(() => {
        loginRef.current?.classList.remove("d-none")
        registerRef.current?.classList.add("d-none")
    }, [])

    const showRegister = useCallback(() => {
        registerRef.current?.classList.remove("d-none")
        loginRef.current?.classList.add("d-none")
    }, [])

    return (
        <div className="landing-page">
            <Navbar
                loginRegisterRef={loginRegisterView}
                showLogin={showLogin}
                showRegister={showRegister}
            />
            <Overview />
            <div className="background" />
            <section className="row container justify-content-between mx-auto mb-5 mh-25">
                <div className="col-md-5">
                    <img src={loginVector} alt="Login Register" />
                </div>
                <div className="col-md-5" ref={loginRegisterView}>
                    <Login loginRef={loginRef} handleForm={handleForm} />
                    <Register
                        registerRef={registerRef}
                        handleForm={handleForm}
                    />
                </div>
            </section>
        </div>
    )
}

export default LandingPage
