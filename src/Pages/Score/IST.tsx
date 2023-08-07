import Classification from "./IST/Classification"
import { useEffect, useState } from "react"
import Api from "../../Functions/Api"
import Spinner from "../../Components/Spinner"
import InfoUser from "./IST/InfoUser"
import Iq from "./IST/Iq"

const IST = () => {
    const [errorMessage, setErrorMessage] = useState<string>("")
    const [iqNorma, setIqNorma] = useState<Record<string, any>>()
    const [user, setUser] = useState<Record<string, any>>({})
    const [loading, setLoading] = useState<boolean>(true)
    const [classification, setClassification] = useState<Api.Result>()
    const [userTest, setUserTest] = useState<Api.Result>()

    useEffect(() => {
        Api.handle("exam/1/score")
            .then((res) => {
                const { ok, result } = res

                if ("message" in result) {
                    return setErrorMessage(res.result.message)
                }
                if (!ok) return

                setIqNorma(res.result.iq.norma)
                setUser(res.result.user)
                setClassification(res.result.classification)
                setUserTest(res.result.user_test)
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

                {loading ? (
                    <Spinner />
                ) : (
                    <>
                        <div className="col-md-5">
                            <Classification classification={classification} />
                        </div>

                        <div className="col-md-5">
                            <Iq iqNorma={iqNorma} />

                            <InfoUser
                                user={user}
                                createdTest={userTest?.created_at}
                            />
                        </div>
                    </>
                )}
            </div>
        </div>
    )
}

export default IST
