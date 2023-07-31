import Classification from "./IST/Classification"
import { useEffect, useState } from "react"
import Api from "../../Functions/Api"
import Spinner from "../../Components/Spinner"
import InfoUser from "./IST/InfoUser"
import Iq from "./IST/Iq"

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
                        <div className="col-md-5">
                            <Classification
                                classification={score.classification}
                            />
                        </div>

                        <div className="col-md-5">
                            {iqNorma && <Iq iqNorma={iqNorma} />}

                            <InfoUser
                                user={user}
                                createdTest={score.user_test.created_at}
                            />
                        </div>
                    </>
                )}
            </div>
        </div>
    )
}

export default IST
