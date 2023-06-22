import { useEffect, useState } from "react"
import Test from "./Components/Test"
import Api from "../../Functions/Api"

const WuTest = () => {
    const [data, setData] = useState<Question.Question>()
    const [indexNoSoal, setIndexNoSoal] = useState<number>(0)
    const question = data?.questions[indexNoSoal]

    useEffect(() => {
        Api.handle("questions/wu").then((res) => {
            if (!res.ok) return

            setData(res.result)
            console.log(res.result)
        })
    }, [])

    return (
        <>
            {data && (
                <Test
                    totalQuestion={data.questions.length}
                    indexNoSoal={indexNoSoal}
                    setIndexNoSoal={setIndexNoSoal}
                    next="me"
                >
                    {question && <div>WuTest</div>}
                </Test>
            )}
        </>
    )
}

export default WuTest
