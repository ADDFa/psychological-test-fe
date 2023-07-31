import { ChangeEvent, useEffect, useState } from "react"
import Api from "../../../Functions/Api"
import Spinner from "../../../Components/Spinner"

const Exam = () => {
    const [tests, setTests] = useState<Api.Result[]>()
    const [loading, setLoading] = useState<boolean>(true)

    useEffect(() => {
        Api.handle("exam")
            .then((res) => {
                setTests(res.result)
            })
            .finally(() => setLoading(false))
    }, [])

    const changeExamStatus = (evt: ChangeEvent, examId: number) => {
        Api.handle(`exam/toggle/${examId}`, {
            method: "PATCH"
        })
    }

    return (
        <>
            <h1 className="fs-4 fw-bold mb-4">Daftar Tes</h1>

            {loading && <Spinner />}

            {tests && (
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">No</th>
                            <th scope="col">Nama Tes</th>
                            <th scope="col">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tests.map(({ exam, active, id }, i) => (
                            <tr key={i}>
                                <th scope="row">{++i}</th>
                                <td>{exam.toUpperCase()}</td>
                                <td>
                                    <div className="form-check form-switch">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            role="switch"
                                            id="flexSwitchCheckChecked"
                                            defaultChecked={
                                                parseInt(active) === 1
                                                    ? true
                                                    : false
                                            }
                                            onChange={(evt) =>
                                                changeExamStatus(evt, id)
                                            }
                                        />
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </>
    )
}

export default Exam
