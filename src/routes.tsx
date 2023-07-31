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

// TODO: Admin
const DashboardAdmin = lazy(() => import("./Pages/Admin/Dashboard/Dashboard"))
const Exam = lazy(() => import("./Pages/Admin/Exam/Exam"))
const Participant = lazy(() => import("./Pages/Admin/Participant/Participant"))
const DetailResult = lazy(() => import("./Pages/Admin/PrintResult/Detail"))
const PrintResult = lazy(() => import("./Pages/Admin/PrintResult/PrintResult"))

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
                        path: "/exam/ist/score",
                        element: (
                            <Suspense>
                                <ISTScore />
                            </Suspense>
                        )
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
            },
            {
                path: "/admin",
                element: (
                    <Suspense>
                        <Root />
                    </Suspense>
                ),
                children: [
                    {
                        path: "dashboard",
                        element: (
                            <Suspense>
                                <DashboardAdmin />
                            </Suspense>
                        )
                    },
                    {
                        path: "exam",
                        element: (
                            <Suspense>
                                <Exam />
                            </Suspense>
                        )
                    },
                    {
                        path: "print-result",
                        element: (
                            <Suspense>
                                <PrintResult />
                            </Suspense>
                        )
                    },
                    {
                        path: "participant",
                        element: (
                            <Suspense>
                                <Participant />
                            </Suspense>
                        )
                    },
                    {
                        path: "participant/:exam/:id",
                        element: (
                            <Suspense>
                                <DetailResult />
                            </Suspense>
                        )
                    }
                ]
            }
        ]
    }
])

export default router
