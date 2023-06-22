import { useEffect, useState } from "react"
import Test from "./Components/Test"
import Api from "../../Functions/Api"
import Option from "./Components/Option"

const SeTest = () => {
    const [data, setData] = useState<Question.Question>()
    const [indexNoSoal, setIndexNoSoal] = useState<number>(0)
    const question = data?.questions[indexNoSoal]

    useEffect(() => {
        Api.handle("questions/se").then((res) => {
            if (!res.ok) return
            setData(res.result)
        })
    }, [])

    return (
        <>
            {data && (
                <>
                    {data && (
                        <Test
                            totalQuestion={data.questions.length}
                            next="wa"
                            indexNoSoal={indexNoSoal}
                            setIndexNoSoal={setIndexNoSoal}
                        >
                            {question && (
                                <>
                                    <p>{question.question}</p>

                                    <div>
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
            )}
        </>
    )
}

export default SeTest
