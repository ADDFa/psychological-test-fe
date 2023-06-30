import { lazy } from "react"
import { LoaderFunction } from "react-router-dom"

const ISTInstruction = lazy(() => import("../Pages/Instruction/IST"))
const MSDTInstruction = lazy(() => import("../Pages/Instruction/MSDT"))
const PAPIInstruction = lazy(() => import("../Pages/Instruction/PAPI"))

const instructionLoader: LoaderFunction = ({ params }): InstructionLoader => {
    const { category } = params

    const result: InstructionLoader = {
        title: "IST (INTELLIGENCE STRUCTURE TEST)",
        toNextTest: "/instruction/ist/se",
        InstructionC: ISTInstruction
    }

    switch (category) {
        case "msdt":
            result.title = "MSDT (Management Style Diagnostic Test)"
            result.toNextTest = "/test/msdt"
            result.InstructionC = MSDTInstruction
            break

        case "papi":
            result.title = "PAPI (Personality and Preference Inventory)"
            result.toNextTest = "/test/papi"
            result.InstructionC = PAPIInstruction
            break
    }

    return result
}

export default instructionLoader
