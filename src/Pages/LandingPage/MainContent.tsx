import { Col } from "react-bootstrap"
import Home from "./Home"
import Instructions from "./Instructions"
import Contact from "./Contact"
import Login from "./Login"
import Register from "./Register"
import { useContext } from "react"
import { ActiveContext } from "../LandingPage"

const MainContent = ({ content }: LandingPage.MainContent) => {
    const getClassName = () => content.split("#")[1]
    const active = useContext(ActiveContext)

    return (
        <Col id="main-content" className={`${getClassName()}`}>
            {content === "#home" && (
                <Home active={active as LandingPage.Active} />
            )}
            {content === "#instruction" && <Instructions />}
            {content === "#contact" && <Contact />}
            {content === "#login" && <Login />}
            {content === "#register" && <Register />}
        </Col>
    )
}

export default MainContent
