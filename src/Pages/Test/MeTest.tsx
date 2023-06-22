import { useEffect, useState } from "react"
import Test from "./Components/Test"
import Api from "../../Functions/Api"
import Option from "./Components/Option"

const MeTest = () => {
    const [data, setData] = useState<Question.Question>()
    const [indexNoSoal, setIndexNoSoal] = useState<number>(0)
    const question = data?.questions[indexNoSoal]

    useEffect(() => {
        Api.handle("questions/me").then((res) => {
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
                    next="result-ist"
                >
                    {question && (
                        <>
                            <p>{question.question}</p>

                            <div>
                                <Option optionName="a" text="bunga" />
                                <Option optionName="b" text="perkakas" />
                                <Option optionName="c" text="burung" />
                                <Option optionName="d" text="kesenian" />
                                <Option optionName="e" text="binatang" />
                            </div>
                        </>
                    )}
                </Test>
            )}
        </>
    )
}

export default MeTest
