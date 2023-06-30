import { FC } from "react"
import Option from "../Components/Option"
import useSaveAnswer from "../Hooks/useSaveAnswer"

const Me: FC<Test.Question> = ({ questions }) => {
    const saveAnswer = useSaveAnswer()

    return (
        <>
            {questions.map(({ question, answer, id }, i) => (
                <div
                    className={i === 0 ? "active" : "d-none"}
                    data-name="question"
                    key={i}
                    data-id={id}
                >
                    <p>{question}</p>

                    <div>
                        <Option
                            autoSave={({ name }) => {
                                saveAnswer({
                                    answer: name,
                                    category: "me",
                                    question_id: id
                                })
                            }}
                            active={answer === "a"}
                            name="a"
                            text="bunga"
                        />
                        <Option
                            autoSave={({ name }) => {
                                saveAnswer({
                                    answer: name,
                                    category: "me",
                                    question_id: id
                                })
                            }}
                            active={answer === "b"}
                            name="b"
                            text="perkakas"
                        />
                        <Option
                            autoSave={({ name }) => {
                                saveAnswer({
                                    answer: name,
                                    category: "me",
                                    question_id: id
                                })
                            }}
                            active={answer === "c"}
                            name="c"
                            text="burung"
                        />
                        <Option
                            autoSave={({ name }) => {
                                saveAnswer({
                                    answer: name,
                                    category: "me",
                                    question_id: id
                                })
                            }}
                            active={answer === "d"}
                            name="d"
                            text="kesenian"
                        />
                        <Option
                            autoSave={({ name }) => {
                                saveAnswer({
                                    answer: name,
                                    category: "me",
                                    question_id: id
                                })
                            }}
                            active={answer === "e"}
                            name="e"
                            text="binatang"
                        />
                    </div>
                </div>
            ))}
        </>
    )
}

export default Me
