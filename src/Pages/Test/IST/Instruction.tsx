import { Suspense } from "react"
import { Link, useLoaderData } from "react-router-dom"

const Instruction = () => {
    const {
        name,
        task,
        InstructionC,
        next,
        category: { time }
    } = useLoaderData() as ISTInstructionLoader

    return (
        <div className="container my-5 col-md-7">
            <div>
                <h1 className="fs-3 text-center mb-5">{name}</h1>
                <p>Tugas : {task}</p>
                <p>Waktu : {time / 60} Menit</p>
            </div>

            <Suspense>
                <InstructionC />
            </Suspense>

            <div className="d-flex justify-content-end">
                <Link className="btn btn-primary text-light" to={next}>
                    Kerjakan Tes
                </Link>
            </div>
        </div>
    )
}

export default Instruction
