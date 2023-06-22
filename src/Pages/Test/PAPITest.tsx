import { useEffect, useState } from "react"
import Test from "./Components/Test"
import Api from "../../Functions/Api"

const PapiTest = () => {
    const [data, setData] = useState<Question.Question>()

    useEffect(() => {
        Api.handle("questions/papi").then((res) => {
            if (!res.ok) return

            setData(res.result)
            console.log(res.result)
        })
    }, [])

    return (
        <>
            {/* {data && (
                <Test totalQuestion={data.questions.length}>
                    <div>PAPITest</div>
                </Test>
            )} */}
        </>
    )
}

export default PapiTest
