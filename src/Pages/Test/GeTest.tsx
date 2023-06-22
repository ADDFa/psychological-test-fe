import { useEffect, useState } from "react"
import Test from "./Components/Test"
import Api from "../../Functions/Api"

const GeTest = () => {
    const [data, setData] = useState<Question.Question>()
    const [indexNoSoal, setIndexNoSoal] = useState<number>(0)
    const question = data?.questions[indexNoSoal]

    useEffect(() => {
        Api.handle("questions/ge").then((res) => {
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
                    next="ra"
                >
                    {question && (
                        <>
                            <p>
                                <span>{question.first_word}</span>
                                <span className="mx-3">-</span>
                                <span>{question.second_word}</span>
                            </p>

                            <div className="my-3 answer-ge">
                                <label htmlFor="ge-example-answer">
                                    Jawaban
                                </label>
                                <input type="text" id="ge-example-answer" />
                            </div>
                        </>
                    )}
                </Test>
            )}
        </>
    )
}

export default GeTest
