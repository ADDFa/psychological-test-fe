import { FC } from "react"
import Numbers from "../Components/Numbers"
import useSaveAnswer from "../Hooks/useSaveAnswer"

const Ra: FC<Test.Question> = ({ questions }) => {
    const saveAnswer = useSaveAnswer()

    return (
        <>
            {questions.map(({ question, id, answer }, i) => (
                <div
                    className={`my-5 ${i === 0 ? "active" : "d-none"}`}
                    key={i}
                    data-id={id}
                    data-name="question"
                >
                    <p>{question}</p>

                    <Numbers
                        defaultSelect={answer}
                        onSelect={({ selected }) =>
                            saveAnswer({
                                answer: selected,
                                category: "ra",
                                question_id: id
                            })
                        }
                    />
                </div>
            ))}
        </>
    )
}

export default Ra
