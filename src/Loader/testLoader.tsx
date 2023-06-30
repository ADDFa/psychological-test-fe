import { LoaderFunction } from "react-router-dom"
import { lazy } from "react"
import Api from "../Functions/Api"

const AnQuestion = lazy(() => import("../Pages/Test/IST/An"))
const FaQuestion = lazy(() => import("../Pages/Test/IST/Fa"))
const GeQuestion = lazy(() => import("../Pages/Test/IST/Ge"))
const MeQuestion = lazy(() => import("../Pages/Test/IST/Me"))
const RaQuestion = lazy(() => import("../Pages/Test/IST/Ra"))
const SeQuestion = lazy(() => import("../Pages/Test/IST/Se"))
const WaQuestion = lazy(() => import("../Pages/Test/IST/Wa"))
const WuQuestion = lazy(() => import("../Pages/Test/IST/Wu"))
const ZrQuestion = lazy(() => import("../Pages/Test/IST/Zr"))

const testLoader: LoaderFunction = async ({ params }) => {
    const { category } = params
    const next = "/instruction/ist/"

    const questionsRes = await Api.handle(`exam/${category}/do-the-exam`, {
        method: "POST"
    })

    const result: TestLoader = {
        questions: questionsRes.ok ? questionsRes.result : null,
        Question: SeQuestion,
        next: next + "wa"
    }

    switch (category) {
        case "wa":
            result.Question = WaQuestion
            result.next = next + "an"
            break

        case "an":
            result.Question = AnQuestion
            result.next = next + "ge"
            break

        case "ge":
            result.Question = GeQuestion
            result.next = next + "ra"
            break

        case "ra":
            result.Question = RaQuestion
            result.next = next + "zr"
            break

        case "zr":
            result.Question = ZrQuestion
            result.next = next + "fa"
            break

        case "fa":
            result.Question = FaQuestion
            result.next = next + "wu"
            break

        case "wu":
            result.Question = WuQuestion
            result.next = next + "me"
            break

        case "me":
            result.Question = MeQuestion
            result.next = next + "me"
            break
    }

    return result
}

export default testLoader
