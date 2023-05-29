import { Col, Container, Row } from "react-bootstrap"
import bg from "../Assets/images/bg.png"
import Brand from "./LandingPage/Brand"
import Menu from "./LandingPage/Menu"
import MainContent from "./LandingPage/MainContent"
import "../Assets/Styles/Pages/landingPage.css"
import { useState } from "react"
import { createContext } from "react"
import { fadeInLeft, fadeOutLeft } from "../Functions/animate"
import { el } from "../Functions/global"

export const ActiveContext = createContext<LandingPage.Active | null>(null)

const LandingPage = () => {
    const [content, setContent] = useState("#home")

    const active = (evt: React.MouseEvent<HTMLAnchorElement>) => {
        const mainContentEl = el("#main-content")
        const currTarget = evt.currentTarget
        const duration = 200

        fadeOutLeft(mainContentEl, {
            duration: duration,
            fill: "forwards"
        })

        const currElementActive = el(".active")
        currElementActive?.classList.add("link-underline-opacity-0")
        currElementActive?.classList.remove("active")

        currTarget.classList.remove("link-underline-opacity-0")
        currTarget.classList.add("active")

        setTimeout(() => {
            fadeInLeft(mainContentEl, {
                duration,
                fill: "forwards"
            })

            setContent(currTarget.hash)
        }, duration)
    }

    return (
        <div id="landing-page">
            <Container>
                <Row className="flex-nowrap align-items-center py-5 gap-5 h-100">
                    <Brand />
                    <Menu setContent={setContent} active={active} />
                </Row>
                <Row className="justify-content-between">
                    <ActiveContext.Provider value={active}>
                        <MainContent content={content} />
                    </ActiveContext.Provider>
                    <Col id="bg" className="flowers">
                        <h2>SPI</h2>
                        <img src={bg} alt="Flowers" className="w-75 pt-5" />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default LandingPage
