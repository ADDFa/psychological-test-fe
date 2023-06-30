import { FC } from "react"
import Option from "./Option"
import useSaveAnswer from "../Hooks/useSaveAnswer"

const QuestionOptions: FC<Test.QuestionOptions> = ({
    question: questionObj,
    category,
    ...rest
}) => {
    const saveAnswer = useSaveAnswer()
    const {
        id,
        question,
        option_a,
        option_b,
        option_c,
        option_d,
        option_e,
        answer
    } = questionObj

    const save: Test.AutoSave = ({ name }) => {
        saveAnswer({ answer: name, category, question_id: id })
    }

    return (
        <div data-id={id} {...rest} data-name="question">
            {question && <p>{question}</p>}

            <div>
                <Option
                    name="a"
                    active={answer === "a"}
                    text={option_a}
                    autoSave={save}
                />
                <Option
                    name="b"
                    active={answer === "b"}
                    autoSave={save}
                    text={option_b}
                />
                <Option
                    name="c"
                    active={answer === "c"}
                    autoSave={save}
                    text={option_c}
                />
                <Option
                    name="d"
                    active={answer === "d"}
                    autoSave={save}
                    text={option_d}
                />
                <Option
                    name="e"
                    active={answer === "e"}
                    autoSave={save}
                    text={option_e}
                />
            </div>
        </div>
    )
}

export default QuestionOptions
