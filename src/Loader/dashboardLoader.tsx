import { LoaderFunction } from "react-router-dom"
import Api from "../Functions/Api"

const dashboardLoader: LoaderFunction = async ({ params }) => {
    const exams = await Api.handle("exam")
    return exams.result
}

export default dashboardLoader
