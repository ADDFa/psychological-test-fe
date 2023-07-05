declare namespace LandingPage {
    type Active = "login" | "register"

    interface LandingPage {
        handleForm: () => void
    }

    interface LoginC extends LandingPage {
        loginRef: React.MutableRefObject<HTMLDivElement | null>
    }

    interface RegisterC extends LandingPage {
        registerRef: React.MutableRefObject<HTMLDivElement | null>
    }

    type TitleForm = "LOGIN" | "REGISTER"

    interface Navbar {
        loginRegisterRef: React.RefObject<HTMLDivElement>
        showLogin: () => void
        showRegister: () => void
    }
}
