import { useEffect, useState } from "react"
import Api from "../../../Functions/Api"

const PapiTest = () => {
    const [data, setData] = useState()

    useEffect(() => {
        Api.handle("question/papi").then((res) => {
            if (!res.ok) return

            setData(res.result)
        })
    }, [])
    console.log(data)

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
