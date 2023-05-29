import { useEffect } from "react"

const Menu = ({ setContent, active }: LandingPage.Menu) => {
    const links: LandingPage.LinkMenu[] = [
        {
            text: "HOME",
            to: "home"
        },
        {
            text: "PETUNJUK",
            to: "instruction"
        },
        {
            text: "KONTAK",
            to: "contact"
        }
    ]

    useEffect(() => {
        const defaultElActive = document.querySelector(
            `[href="${window.location.hash}"]`
        )

        if (defaultElActive) {
            defaultElActive.classList.remove("link-underline-opacity-0")
            defaultElActive.classList.add("active")
        }

        setContent(window.location.hash || "#home")
    }, [setContent])

    return (
        <div id="menu" className="ms-5">
            {links.map(({ text, to }, i) => (
                <a
                    onClick={active}
                    key={i}
                    href={`#${to}`}
                    className="mx-4 link-offset-3 link-offset-3-hover link-underline-light
                     link-underline-opacity-0 link-underline-opacity-75-hover"
                >
                    {text}
                </a>
            ))}
        </div>
    )
}

export default Menu
