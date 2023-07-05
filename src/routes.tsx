import { createBrowserRouter, redirect } from "react-router-dom"
import { Suspense, lazy } from "react"
import landingPageLoader from "./Loader/landingPageLoader"
import LandingPage from "./Pages/LandingPage/LandingPage"
import Auth from "./Functions/Auth"

const Root = lazy(() => import("./Pages/Root/Root"))
const Dashboard = lazy(() => import("./Pages/Dashboard/Dashboard"))
const Instruction = lazy(() => import("./Pages/Instruction/Instruction"))
const ISTInstruction = lazy(() => import("./Pages/Test/IST/Instruction"))
const Test = lazy(() => import("./Pages/Test/Test"))
const ISTScore = lazy(() => import("./Pages/Score/IST"))

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
                        ),
                        loader: async (args) => {
                            const load = await import(
                                "./Loader/dashboardLoader"
                            )
                            return load.default(args)
                        }
                    },
                    {
                        path: "/exam/ist/score",
                        element: (
                            <Suspense>
                                <ISTScore />
                            </Suspense>
                        ),
                        loader: async () => {
                            const load = await import("./Loader/scoreLoader")
                            return load.default()
                        }
                    }
                ]
            },
            {
                path: "/instruction/:category",
                element: (
                    <Suspense>
                        <Instruction />
                    </Suspense>
                ),
                loader: async (args) => {
                    const load = await import("./Loader/instructionLoader")
                    return load.default(args)
                }
            },
            {
                path: "/instruction/ist/:category",
                element: (
                    <Suspense>
                        <ISTInstruction />
                    </Suspense>
                ),
                loader: async (args) => {
                    const load = await import("./Loader/istInstructionLoader")
                    return load.default(args)
                }
            },
            {
                path: "/test/:category",
                element: (
                    <Suspense>
                        <Test />
                    </Suspense>
                ),
                loader: async (args) => {
                    const load = await import("./Loader/testLoader")
                    return load.default(args)
                }
            }
        ]
    }
])

export default router
