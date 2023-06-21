import { FC } from "react"
import { Link } from "react-router-dom"

const Instruction: FC<Instruction.Instruction> = ({
    children,
    title,
    toNextTest
}) => {
    return (
        <div className="container col-md-7">
            <h1 className="text-center my-5 fw-bold fs-2">{title}</h1>

            {children}

            <div className="text-end mt-5">
                <Link to={toNextTest} className="btn btn-primary text-light">
                    Kerjakan Tes
                </Link>
            </div>
        </div>
    )
}

export default Instruction
