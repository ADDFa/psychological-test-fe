import { FC } from "react"
import QuestionOptions from "../Components/QuestionOptions"

const Se: FC<Test.Question> = ({ questions }) => {
    return (
        <>
            {questions.map((question, i) => (
                <QuestionOptions
                    question={question}
                    key={i}
                    className={i === 0 ? "active" : "d-none"}
                    category="se"
                />
            ))}
        </>
    )
}

export default Se
