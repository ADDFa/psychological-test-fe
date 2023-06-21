import { createBrowserRouter, redirect } from "react-router-dom"
import { Suspense, lazy } from "react"
import LandingPage, { landingPageLoader } from "./Pages/LandingPage/LandingPage"
import Auth from "./Functions/Auth"

const Root = lazy(() => import("./Pages/Root/Root"))
const Dashboard = lazy(() => import("./Pages/Dashboard/Dashboard"))
const Score = lazy(() => import("./Pages/Score/Score"))
const ISTInstruction = lazy(() => import("./Pages/Instruction/IST"))
const ISTTestInstruction = lazy(() => import("./Pages/Test/ISTInstruction"))
const SeTest = lazy(() => import("./Pages/Test/SeTest"))
const PAPIInstruction = lazy(() => import("./Pages/Instruction/PAPI"))
const MSDTInstruction = lazy(() => import("./Pages/Instruction/MSDT"))

const router = createBrowserRouter([
    {
        path: "/",
        element: <LandingPage />,
        loader: landingPageLoader
    },
    {
        loader: () => (!Auth.token_access ? redirect("/") : null),
        children: [
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
            },
            {
                path: "/instructions/ist",
                element: (
                    <Suspense>
                        <ISTInstruction />
                    </Suspense>
                )
            },
            {
                path: "/instructions/papi",
                element: (
                    <Suspense>
                        <PAPIInstruction />
                    </Suspense>
                )
            },
            {
                path: "/instructions/msdt",
                element: (
                    <Suspense>
                        <MSDTInstruction />
                    </Suspense>
                )
            },
            {
                path: "/test/ist",
                element: (
                    <Suspense>
                        <ISTTestInstruction />
                    </Suspense>
                )
            },
            {
                path: "/test/ist/se",
                element: (
                    <Suspense>
                        <SeTest />
                    </Suspense>
                )
            }
        ]
    }
])

export default router
