import { useEffect, useState } from "react"
import Test from "./Components/Test"
import Api from "../../Functions/Api"

const ZrTest = () => {
    const [data, setData] = useState<Question.Question>()
    const [indexNoSoal, setIndexNoSoal] = useState<number>(0)
    const question = data?.questions[indexNoSoal]

    useEffect(() => {
        Api.handle("questions/zr").then((res) => {
            if (!res.ok) return
            setData(res.result)
        })
    }, [])

    return (
        <>
            {data && (
                <Test
                    totalQuestion={data.questions.length}
                    indexNoSoal={indexNoSoal}
                    setIndexNoSoal={setIndexNoSoal}
                    next="fa"
                >
                    {question && (
                        <div>
                            <div className="mb-5">
                                <p>Soal</p>
                                <div className="numbers">
                                    <span>{question.first_number}</span>
                                    <span>{question.second_number}</span>
                                    <span>{question.thrid_number}</span>
                                    <span>{question.fourth_number}</span>
                                    <span>{question.fifth_number}</span>
                                    <span>{question.sixth_number}</span>
                                    <span>{question.seventh_number}</span>
                                    <span>?</span>
                                </div>
                            </div>

                            <div>
                                <p>Jawaban</p>
                                <div className="numbers">
                                    <span>1</span>
                                    <span>2</span>
                                    <span>3</span>
                                    <span>4</span>
                                    <span>5</span>
                                    <span>6</span>
                                    <span>7</span>
                                    <span>8</span>
                                    <span>9</span>
                                    <span>0</span>
                                </div>
                            </div>
                        </div>
                    )}
                </Test>
            )}
        </>
    )
}

export default ZrTest
