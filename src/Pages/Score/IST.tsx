import Classification from "./IST/Classification"
import { useEffect, useState } from "react"
import Api from "../../Functions/Api"
import Spinner from "../../Components/Spinner"

const IST = () => {
    const [score, setScore] = useState<Api.Result>()
    const [errorMessage, setErrorMessage] = useState<string>("")
    const [iqNorma, setIqNorma] = useState<Record<string, any>>()
    const [user, setUser] = useState<Record<string, any>>({})
    const [loading, setLoading] = useState<boolean>(true)

    useEffect(() => {
        Api.handle("exam/1/score")
            .then((res) => {
                if (res.status === 200) {
                    setScore(res.result)
                    setIqNorma(res.result.iq.norma)
                    setUser(res.result.user)
                }

                if ("message" in res.result) {
                    setErrorMessage(res.result.message)
                }
            })
            .finally(() => {
                setLoading(false)
            })
    }, [])

    return (
        <div className="ist-score">
            <h4 className="fw-bold mb-5">Hasil IST</h4>

            <div className="row justify-content-between">
                {errorMessage && (
                    <div className="col-md-8 mx-auto text-center">
                        <div className="alert alert-danger" role="alert">
                            {errorMessage}
                        </div>
                    </div>
                )}

                {loading && <Spinner />}

                {score && (
                    <>
                        <Classification classification={score.classification} />

                        <div className="col-md-5">
                            <div className="border mx-auto text-center p-2 rounded-3 mb-5">
                                <h1 className="text-primary fs-5">IQ</h1>
                                {iqNorma && (
                                    <>
                                        <h3
                                            className={`fs-1 text-${
                                                iqNorma.iq > 70
                                                    ? "success"
                                                    : "danger"
                                            }`}
                                        >
                                            {iqNorma.iq}
                                        </h3>
                                        <p>{iqNorma.category}</p>
                                    </>
                                )}
                            </div>

                            <div>
                                <table className="table">
                                    <tbody>
                                        <tr>
                                            <th scope="col">Nama</th>
                                            <td>{user.name}</td>
                                        </tr>
                                        <tr>
                                            <th scope="col">TTL</th>
                                            <td>{`${user.birthplace}, ${user.date_of_birth}`}</td>
                                        </tr>
                                        <tr>
                                            <th className="col">Tgl Tes</th>
                                            <td>2023-07-27</td>
                                        </tr>
                                        <tr>
                                            <th className="col">Pendidikan</th>
                                            <td>{user.general_education}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </>
                )}
            </div>
        </div>
    )
}

export default IST
