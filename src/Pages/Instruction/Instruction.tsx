import { FC, lazy } from "react"
import { Link, useLoaderData, useParams } from "react-router-dom"

const Instruction: FC = () => {
    const { title, toNextTest, InstructionC } =
        useLoaderData() as InstructionLoader

    return (
        <div className="container col-md-7">
            <h1 className="text-center my-5 fw-bold fs-2">{title}</h1>

            <InstructionC />

            <div className="text-end mt-5">
                <Link to={toNextTest} className="btn btn-primary text-light">
                    Kerjakan Tes
                </Link>
            </div>
        </div>
    )
}

export default Instruction
