import { createBrowserRouter, redirect } from "react-router-dom"
import { Suspense, lazy } from "react"
import LandingPage, { landingPageLoader } from "./Pages/LandingPage/LandingPage"
import Auth from "./Functions/Auth"

const Root = lazy(() => import("./Pages/Root/Root"))
const Dashboard = lazy(() => import("./Pages/Dashboard/Dashboard"))
const Score = lazy(() => import("./Pages/Score/Score"))

const SeTest = lazy(() => import("./Pages/Test/SeTest"))
const WaTest = lazy(() => import("./Pages/Test/WaTest"))
const AnTest = lazy(() => import("./Pages/Test/AnTest"))
const GeTest = lazy(() => import("./Pages/Test/GeTest"))
const RaTest = lazy(() => import("./Pages/Test/RaTest"))
const ZrTest = lazy(() => import("./Pages/Test/ZrTest"))
const FaTest = lazy(() => import("./Pages/Test/FaTest"))
const WuTest = lazy(() => import("./Pages/Test/WuTest"))
const MeTest = lazy(() => import("./Pages/Test/MeTest"))
const MSDTTest = lazy(() => import("./Pages/Test/MSDTTest"))
const PAPITest = lazy(() => import("./Pages/Test/PAPITest"))

const ISTInstruction = lazy(() => import("./Pages/Instruction/IST"))
const ISTTestInstruction = lazy(() => import("./Pages/Test/IST/Instruction"))

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
                path: "/test/ist/instruction",
                element: (
                    <Suspense>
                        <ISTTestInstruction />
                    </Suspense>
                )
            },
            {
                path: "/test",
                children: [
                    {
                        path: "se",
                        element: (
                            <Suspense>
                                <SeTest />
                            </Suspense>
                        )
                    },
                    {
                        path: "wa",
                        element: (
                            <Suspense>
                                <WaTest />
                            </Suspense>
                        )
                    },
                    {
                        path: "an",
                        element: (
                            <Suspense>
                                <AnTest />
                            </Suspense>
                        )
                    },
                    {
                        path: "ge",
                        element: (
                            <Suspense>
                                <GeTest />
                            </Suspense>
                        )
                    },
                    {
                        path: "ra",
                        element: (
                            <Suspense>
                                <RaTest />
                            </Suspense>
                        )
                    },
                    {
                        path: "zr",
                        element: (
                            <Suspense>
                                <ZrTest />
                            </Suspense>
                        )
                    },
                    {
                        path: "fa",
                        element: (
                            <Suspense>
                                <FaTest />
                            </Suspense>
                        )
                    },
                    {
                        path: "wu",
                        element: (
                            <Suspense>
                                <WuTest />
                            </Suspense>
                        )
                    },
                    {
                        path: "me",
                        element: (
                            <Suspense>
                                <MeTest />
                            </Suspense>
                        )
                    },
                    {
                        path: "msdt",
                        element: (
                            <Suspense>
                                <MSDTTest />
                            </Suspense>
                        )
                    },
                    {
                        path: "papi",
                        element: (
                            <Suspense>
                                <PAPITest />
                            </Suspense>
                        )
                    }
                ]
            }
        ]
    }
])

export default router
