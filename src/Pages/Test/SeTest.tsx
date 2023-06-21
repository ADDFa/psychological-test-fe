import { useLoaderData } from "react-router-dom"
import Time from "./Components/Time"
import NavigationNumber from "./Components/NavigationNumber"
import { useState } from "react"
import Option from "./Components/Option"

const SeTest = () => {
    const [index, setIndex] = useState<number>(0)
    const data = useLoaderData() as SeTest.SeTestLoader | null
    if (!data) {
        return <h1>Network Error</h1>
    }

    const { category, questions } = data
    const question = questions[index]

    return (
        <div className="container mt-5">
            <div className="row justify-content-between">
                <div className="col-md-5 mb-5">
                    <Time time={category.time} />
                </div>
                <div className="col-md-5 d-flex justify-content-end mb-5">
                    <NavigationNumber
                        total={questions.length}
                        index={index}
                        setIndex={setIndex}
                    />
                </div>
            </div>

            <div>
                <p>{question.question}</p>
                <div>
                    <Option optionName="a" text={question.option_a} />
                    <Option optionName="b" text={question.option_b} />
                    <Option optionName="c" text={question.option_c} />
                    <Option optionName="d" text={question.option_d} />
                    <Option optionName="e" text={question.option_e} />
                </div>
            </div>
        </div>
    )
}

export default SeTest
