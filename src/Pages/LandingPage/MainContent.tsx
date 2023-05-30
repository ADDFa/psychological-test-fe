import { Col } from "react-bootstrap"
import Home from "./Home"
import { Suspense, lazy, useContext } from "react"
import { ActiveContext } from "../LandingPage"

const Instructions = lazy(() => import("./Instructions"))
const Contact = lazy(() => import("./Contact"))
const Login = lazy(() => import("./Login"))
const Register = lazy(() => import("./Register"))

const MainContent = ({ content }: LandingPage.MainContent) => {
    const getClassName = () => content.split("#")[1]
    const active = useContext(ActiveContext)

    return (
        <Col id="main-content" className={`${getClassName()}`}>
            {content === "#home" && (
                <Home active={active as LandingPage.Active} />
            )}
            {content === "#instruction" && (
                <Suspense>
                    <Instructions />
                </Suspense>
            )}
            {content === "#contact" && (
                <Suspense>
                    <Contact />
                </Suspense>
            )}
            {content === "#login" && (
                <Suspense>
                    <Login />
                </Suspense>
            )}
            {content === "#register" && (
                <Suspense>
                    <Register />
                </Suspense>
            )}
        </Col>
    )
}

export default MainContent
