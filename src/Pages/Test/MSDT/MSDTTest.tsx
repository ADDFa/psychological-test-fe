import { useEffect, useState } from "react"
import Api from "../../../Functions/Api"

const MSDTTest = () => {
    const [data, setData] = useState()

    useEffect(() => {
        Api.handle("question/msdt").then((res) => {
            if (!res.ok) return

            setData(res.result)
        })
    }, [])
    console.log(data)

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
