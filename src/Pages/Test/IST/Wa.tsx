import { FC } from "react"
import QuestionOptions from "../Components/QuestionOptions"

const Wa: FC<Test.Question> = ({ questions }) => {
    return (
        <>
            {questions.map((question, i) => (
                <QuestionOptions
                    question={question}
                    key={i}
                    className={i === 0 ? "active" : "d-none"}
                    category="wa"
                />
            ))}
        </>
    )
}

export default Wa
