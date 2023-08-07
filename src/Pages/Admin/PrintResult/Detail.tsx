import { MouseEventHandler, useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import Api from "../../../Functions/Api"
import Spinner from "../../../Components/Spinner"
import InfoUser from "../../Score/IST/InfoUser"
import Classification from "../../Score/IST/Classification"
import Iq from "../../Score/IST/Iq"
import AnswersRow from "../../Score/IST/AnswersRow"

const Detail = () => {
    const { id, exam } = useParams()
    const [loading, setLoading] = useState<boolean>(true)
    const [classification, setClassification] = useState<Api.Result>()
    const [iqNorma, setIqNorma] = useState<Api.Result>()
    const [user, setUser] = useState<Api.Result>()
    const [userTest, setUserTest] = useState<Api.Result>()
    const [scores, setScores] = useState<Api.Result[]>([])
    const [seAnswers, setSeAnswers] = useState<Api.Result[]>()
    const [waAnswers, setWaAnswers] = useState<Api.Result[]>()
    const [anAnswers, setAnAnswers] = useState<Api.Result[]>()
    const [geAnswers, setGeAnswers] = useState<Api.Result[]>()
    const [raAnswers, setRaAnswers] = useState<Api.Result[]>()
    const [zrAnswers, setZrAnswers] = useState<Api.Result[]>()
    const [faAnswers, setFaAnswers] = useState<Api.Result[]>()
    const [wuAnswers, setWuAnswers] = useState<Api.Result[]>()
    const [meAnswers, setMeAnswers] = useState<Api.Result[]>()

    useEffect(() => {
        Api.handle(`user-score?user_id=${id}&exam_id=${exam}`)
            .then((res) => {
                const { ok, result } = res
                if (!ok) return

                const { classification, iq, user, user_test, scores, answers } =
                    result

                setClassification(classification)
                setUser(user)
                setIqNorma(iq.norma)
                setUserTest(user_test)
                setScores(scores)
                setSeAnswers(answers.se)
                setWaAnswers(answers.wa)
                setAnAnswers(answers.an)
                setGeAnswers(answers.ge)
                setRaAnswers(answers.ra)
                setZrAnswers(answers.zr)
                setFaAnswers(answers.fa)
                setWuAnswers(answers.wu)
                setMeAnswers(answers.me)
            })
            .finally(() => setLoading(false))
    }, [exam, id])

    return (
        <>
            <h1 className="fs-4 fw-bold mb-4">Nilai Peserta Tes</h1>

            {loading ? (
                <Spinner />
            ) : (
                <>
                    <div className="my-5 row justify-content-between">
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
                                {(scores as Api.Result[]).map(
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
                                    <th className="text-center" scope="col">
                                        No
                                    </th>
                                    <th className="text-center" scope="col">
                                        Jawaban
                                    </th>
                                    <th className="text-center" scope="col">
                                        Hasil
                                    </th>
                                    <th className="text-center" scope="col">
                                        Kategori
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <AnswersRow answers={seAnswers} category="Se" />
                                <AnswersRow answers={waAnswers} category="Wa" />
                                <AnswersRow answers={anAnswers} category="An" />
                                <AnswersRow answers={geAnswers} category="Ge" />
                                <AnswersRow answers={raAnswers} category="Ra" />
                                <AnswersRow answers={zrAnswers} category="Zr" />
                                <AnswersRow answers={faAnswers} category="Fa" />
                                <AnswersRow answers={wuAnswers} category="Wu" />
                                <AnswersRow answers={meAnswers} category="Me" />
                            </tbody>
                        </table>
                    </div>
                </>
            )}
        </>
    )
}

export default Detail
