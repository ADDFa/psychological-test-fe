import { FC } from "react"
import Option from "../Components/Option"
import useSaveAnswer from "../Hooks/useSaveAnswer"

const An: FC<Test.Question> = ({ questions }) => {
    const saveAnswer = useSaveAnswer()

    const save = (props: Test.SaveAnswer) => {
        saveAnswer(props)
    }

    return (
        <>
            {questions.map(
                (
                    {
                        first_word,
                        second_word,
                        third_word,
                        option_a,
                        option_b,
                        option_c,
                        option_d,
                        option_e,
                        answer,
                        id
                    },
                    i
                ) => (
                    <div
                        key={i}
                        className={i === 0 ? "active" : "d-none"}
                        data-id={id}
                        data-name="question"
                    >
                        <p key={i}>
                            <span className="me-3">{first_word}</span>
                            <span> : </span>
                            <span className="mx-3">{second_word}</span>
                            <span> = </span>
                            <span className="mx-3">{third_word}</span>
                            <span> : </span>
                            <span className="ms-3">?</span>
                        </p>

                        <div className="mt-5">
                            <Option
                                name="a"
                                active={answer === "a"}
                                text={option_a}
                                autoSave={({ name }) => {
                                    save({
                                        answer: name,
                                        category: "an",
                                        question_id: id
                                    })
                                }}
                            />
                            <Option
                                name="b"
                                active={answer === "b"}
                                text={option_b}
                                autoSave={({ name }) => {
                                    save({
                                        answer: name,
                                        category: "an",
                                        question_id: id
                                    })
                                }}
                            />
                            <Option
                                name="c"
                                active={answer === "c"}
                                text={option_c}
                                autoSave={({ name }) => {
                                    save({
                                        answer: name,
                                        category: "an",
                                        question_id: id
                                    })
                                }}
                            />
                            <Option
                                name="d"
                                active={answer === "d"}
                                text={option_d}
                                autoSave={({ name }) => {
                                    save({
                                        answer: name,
                                        category: "an",
                                        question_id: id
                                    })
                                }}
                            />
                            <Option
                                name="e"
                                active={answer === "e"}
                                text={option_e}
                                autoSave={({ name }) => {
                                    save({
                                        answer: name,
                                        category: "an",
                                        question_id: id
                                    })
                                }}
                            />
                        </div>
                    </div>
                )
            )}
        </>
    )
}

export default An
