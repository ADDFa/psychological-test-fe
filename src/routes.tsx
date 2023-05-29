import { createBrowserRouter } from "react-router-dom"
import LandingPage from "./Pages/LandingPage"
import Root from "./Root"

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        children: [
            {
                index: true,
                element: <LandingPage />
            }
        ]
    }
])

export default router
