import { createBrowserRouter, redirect } from "react-router-dom"
import LandingPage from "./Pages/LandingPage"
import Root from "./Root"
import { Suspense, lazy } from "react"

const Dashboard = lazy(() => import("./Pages/Dashboard"))

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        children: [
            {
                index: true,
                element: <LandingPage />,
                loader: () => {
                    return localStorage.getItem("token_access")
                        ? redirect("/dashboard")
                        : null
                }
            },
            {
                path: "dashboard",
                element: (
                    <Suspense>
                        <Dashboard />
                    </Suspense>
                ),
                loader: () => {
                    return localStorage.getItem("token_access")
                        ? null
                        : redirect("/#login")
                }
            }
        ]
    }
])

export default router
