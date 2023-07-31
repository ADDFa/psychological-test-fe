import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import Api from "../../../Functions/Api"
import Spinner from "../../../Components/Spinner"
import InfoUser from "../../Score/IST/InfoUser"
import Classification from "../../Score/IST/Classification"
import Iq from "../../Score/IST/Iq"

const Detail = () => {
    const { id, exam } = useParams()
    const [userScore, setUserScore] = useState<Api.Result>()
    const [loading, setLoading] = useState<boolean>(true)

    useEffect(() => {
        Api.handle(`user-score?user_id=${id}&exam_id=${exam}`)
            .then((res) => {
                setUserScore(res.result)
                console.log(res.result)
            })
            .finally(() => setLoading(false))
    }, [exam, id])

    return (
        <>
            <h1 className="fs-4 fw-bold mb-4">Nilai Peserta Tes</h1>

            {loading && <Spinner />}

            {userScore && (
                <>
                    <div className="my-5 row justify-content-between">
                        <div className="col-md-5">
                            <Classification
                                classification={userScore.classification}
                            />
                        </div>
                        <div className="col-md-5">
                            {userScore.iq && (
                                <Iq iqNorma={userScore.iq.norma} />
                            )}
                            <InfoUser
                                user={userScore.user}
                                createdTest={userScore.user_test.created_at}
                            />
                        </div>
                    </div>

                    <div className="my-5">
                        <h3 className="fw-bold">Score Peserta</h3>

                        <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col">No</th>
                                    <th scope="col" className="text-center">
                                        Jenis Soal
                                    </th>
                                    <th scope="col" className="text-center">
                                        Score Rw
                                    </th>
                                    <th scope="col" className="text-center">
                                        Score Sw
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {(userScore.scores as Api.Result[]).map(
                                    (
                                        {
                                            question_category,
                                            rw_score,
                                            sw_score
                                        },
                                        i
                                    ) => (
                                        <tr key={i}>
                                            <th scope="row">{++i}</th>
                                            <td className="text-center">
                                                {question_category.toUpperCase()}
                                            </td>
                                            <td className="text-center">
                                                {rw_score}
                                            </td>
                                            <td className="text-center">
                                                {sw_score}
                                            </td>
                                        </tr>
                                    )
                                )}
                            </tbody>
                        </table>
                    </div>

                    <div className="my-5">
                        <h3 className="fw-bold">Jawaban Peserta</h3>

                        <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col">No</th>
                                    <th scope="col">Jawaban</th>
                                    <th scope="col">Hasil</th>
                                    <th scope="col">Benar</th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* <tr>
                                    <th scope="row">1</th>
                                    <td>Mark</td>
                                    <td>Otto</td>
                                    <td>@mdo</td>
                                </tr> */}
                            </tbody>
                        </table>
                    </div>
                </>
            )}
        </>
    )
}

export default Detail
