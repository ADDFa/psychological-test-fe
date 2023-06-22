import { useEffect, useState } from "react"
import Test from "./Components/Test"
import Api from "../../Functions/Api"

const MSDTTest = () => {
    const [data, setData] = useState<Question.Question>()

    useEffect(() => {
        Api.handle("questions/msdt").then((res) => {
            if (!res.ok) return

            setData(res.result)
            console.log(res.result)
        })
    }, [])

    return (
        <>
            {/* {data && (
                <Test totalQuestion={data.questions.length}>
                    <div>MSDTTest</div>
                </Test>
            )} */}
        </>
    )
}

export default MSDTTest
