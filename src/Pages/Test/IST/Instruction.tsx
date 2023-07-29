import { Suspense, useEffect, useState } from "react"
import { Link, useLoaderData } from "react-router-dom"
import Api from "../../../Functions/Api"
import Spinner from "../../../Components/Spinner"

const Instruction = () => {
    const { name, task, InstructionC, next, categoryName } =
        useLoaderData() as ISTInstructionLoader
    const [questionProp, setQuestionProps] = useState<Api.Result>()

    useEffect(() => {
        Api.handle(`question-category/${categoryName}`).then((res) => {
            console.log(res.result)
            setQuestionProps(res.result)
        })
    }, [])

    return (
        <div className="container my-5 col-md-7">
            {!questionProp && <Spinner />}

            {questionProp && (
                <>
                    <div>
                        <h1 className="fs-3 text-center mb-5">{name}</h1>
                        <p>Tugas : {task}</p>
                        <p>Waktu : {questionProp.time / 60} Menit</p>
                    </div>

                    <Suspense>
                        <InstructionC />
                    </Suspense>

                    <div className="d-flex justify-content-end">
                        <Link
                            className="btn btn-primary text-light"
                            to={categoryName === "me" ? "/test/me" : next}
                        >
                            Kerjakan Tes
                        </Link>
                    </div>
                </>
            )}
        </div>
    )
}

export default Instruction
