declare namespace LandingPage {
    type Content = React.Dispatch<React.SetStateAction>

    type Active = (evt: React.MouseEvent<HTMLAnchorElement>) => void

    interface Menu {
        setContent: Content
        active: Active
    }

    interface MainContent {
        content: string
    }

    interface LinkMenu {
        text: string
        to: string
    }

    interface Home {
        active: Active
    }
}
