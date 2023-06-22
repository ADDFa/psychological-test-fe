import { useEffect, useState } from "react"
import Test from "./Components/Test"
import Api from "../../Functions/Api"
import Option from "./Components/Option"

const AnTest = () => {
    const [data, setData] = useState<Question.Question>()
    const [indexNoSoal, setIndexNoSoal] = useState<number>(0)
    const question = data?.questions[indexNoSoal]

    useEffect(() => {
        Api.handle("questions/an").then((res) => {
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
                    next="ge"
                >
                    {question && (
                        <>
                            <p>
                                <span className="me-3">
                                    {question.first_word}
                                </span>
                                <span> : </span>
                                <span className="mx-3">
                                    {question.second_word}
                                </span>
                                <span> = </span>
                                <span className="mx-3">
                                    {question.thrid_word}
                                </span>
                                <span> : </span>
                                <span className="ms-3">?</span>
                            </p>

                            <div className="mt-5">
                                <Option
                                    optionName="a"
                                    text={question.option_a}
                                />
                                <Option
                                    optionName="b"
                                    text={question.option_b}
                                />
                                <Option
                                    optionName="c"
                                    text={question.option_c}
                                />
                                <Option
                                    optionName="d"
                                    text={question.option_d}
                                />
                                <Option
                                    optionName="e"
                                    text={question.option_e}
                                />
                            </div>
                        </>
                    )}
                </Test>
            )}
        </>
    )
}

export default AnTest
