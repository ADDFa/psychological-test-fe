import { useEffect, useState } from "react"
import Test from "./Components/Test"
import Api from "../../Functions/Api"

const RaTest = () => {
    const [data, setData] = useState<Question.Question>()
    const [indexNoSoal, setIndexNoSoal] = useState<number>(0)
    const question = data?.questions[indexNoSoal]

    useEffect(() => {
        Api.handle("questions/ra").then((res) => {
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
                    next="zr"
                >
                    {question && (
                        <>
                            <p>{question.question}</p>

                            <div className="numbers my-3">
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
                        </>
                    )}
                </Test>
            )}
        </>
    )
}

export default RaTest
