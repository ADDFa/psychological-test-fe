import { createBrowserRouter } from "react-router-dom"
import LandingPage from "./Pages/LandingPage/LandingPage"
import { Suspense, lazy } from "react"

const Root = lazy(() => import("./Pages/Root/Root"))
const Dashboard = lazy(() => import("./Pages/Dashboard/Dashboard"))
const Score = lazy(() => import("./Pages/Score/Score"))

const router = createBrowserRouter([
    {
        path: "/",
        element: <LandingPage />
    },
    {
        element: (
            <Suspense>
                <Root />
            </Suspense>
        ),
        children: [
            {
                path: "/dashboard",
                element: (
                    <Suspense>
                        <Dashboard />
                    </Suspense>
                )
            },
            {
                path: "/score",
                element: (
                    <Suspense>
                        <Score />
                    </Suspense>
                )
            }
        ]
    }
])

export default router
