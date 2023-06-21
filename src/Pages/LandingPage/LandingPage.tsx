import { useRef } from "react"
import Login from "./Login"
import Navbar from "./Navbar"
import Overview from "./Overview"
import Register from "./Register"
import Auth from "../../Functions/Auth"
import { redirect } from "react-router-dom"

export const landingPageLoader = () => {
    return Auth.token_access ? redirect("/dashboard") : null
}

const LandingPage = () => {
    const loginRef = useRef<HTMLDivElement>(null)
    const registerRef = useRef<HTMLDivElement>(null)
    const loginRegisterView = useRef<HTMLDivElement>(null)

    const handleForm = () => {
        loginRef.current?.classList.toggle("d-none")
        registerRef.current?.classList.toggle("d-none")
    }

    return (
        <div className="landing-page">
            <Navbar loginRegisterRef={loginRegisterView} />
            <Overview />
            <div className="background" />
            <section className="row container justify-content-end mx-auto mb-5 mh-25">
                <div className="col-md-5"></div>
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
